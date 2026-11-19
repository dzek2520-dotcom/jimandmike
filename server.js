// Сервер: отдаёт игру из public/ и пересылает сообщения между двумя игроками комнаты.
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
};


// ---- Общие уровни ----
const DATA = path.join(__dirname, 'data', 'levels.json');
let levels = [];
try { levels = JSON.parse(fs.readFileSync(DATA, 'utf8')); } catch {}
const num = (v, a, b) => typeof v === 'number' && v >= a && v <= b;
const pt = (a, w, h) => Array.isArray(a) && a.length >= 2 && num(a[0], -w, w) && num(a[1], -h, h);
function cleanLevel(d) {
  if (!d || typeof d !== 'object') return null;
  if (![18, 26, 34].includes(d.w) || ![8, 10, 12].includes(d.h)) return null;
  const { w, h } = d;
  if (!Number.isInteger(d.th) || d.th < 0 || d.th > 40 || !num(d.es, 1, 6) || !num(d.lz || 0, 0, 2)) return null;
  if (!Array.isArray(d.pl) || d.pl.length < 2 || d.pl.length > 3 || !d.pl.every((a) => pt(a, w, h))) return null;
  if (!pt(d.rm, w, h)) return null;
  if (!Array.isArray(d.it) || d.it.length > 40 || !d.it.every((a) => pt(a, w, h))) return null;
  if (!Array.isArray(d.en) || d.en.length > 20 || !d.en.every((a) => pt(a, w, h))) return null;
  if (d.ts && !pt(d.ts, w, h)) return null;
  return {
    n: String(d.n || '').slice(0, 30), w, h, th: d.th, es: d.es,
    ice: d.ice ? 1 : 0, mars: d.mars ? 1 : 0, pz: d.pz ? 1 : 0, lz: d.lz | 0,
    pl: d.pl.map((a) => [a[0], a[1]]), rm: [d.rm[0], d.rm[1]],
    it: d.it.map((a) => [a[0], a[1], a[2] ? 1 : 0]), en: d.en.map((a) => [a[0], a[1]]),
    ts: d.ts ? [d.ts[0], d.ts[1]] : null,
  };
}
const posts = new Map();
function handleApi(req, res) {
  const json = (code, obj) => { res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(obj)); };
  if (req.method === 'GET') return json(200, levels.slice().reverse().map((l) => ({ id: l.id, d: l.d })));
  if (req.method !== 'POST') return json(405, 'Метод не поддерживается');
  const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0].trim();
  const now = Date.now(), recent = (posts.get(ip) || []).filter((t) => now - t < 60000);
  if (recent.length >= 5) return json(429, 'Слишком часто. Подождите минуту.');
  let body = '';
  req.on('data', (c) => { body += c; if (body.length > 20000) req.destroy(); });
  req.on('end', () => {
    let d; try { d = cleanLevel(JSON.parse(body)); } catch {}
    if (!d || !d.n) return json(400, 'Некорректный уровень.');
    recent.push(now); posts.set(ip, recent);
    levels.push({ id: now.toString(36) + Math.random().toString(36).slice(2, 6), d });
    if (levels.length > 100) levels.shift();
    try { fs.mkdirSync(path.dirname(DATA), { recursive: true }); fs.writeFileSync(DATA, JSON.stringify(levels)); } catch {}
    json(200, { ok: true });
  });
}
const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent((req.url || '/').split('?')[0]); }
  catch { res.writeHead(400); return res.end('Bad request'); }
  if (urlPath === '/api/levels') return handleApi(req, res);
  if (urlPath === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  if (urlPath === '/') urlPath = '/index.html';
  const file = path.normalize(path.join(PUBLIC, urlPath));
  if (!file.startsWith(PUBLIC)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Не найдено');
    }
    const ext = path.extname(file);
    const headers = { 'Content-Type': TYPES[ext] || 'application/octet-stream' };
    // Кэш для тяжёлых статичных файлов, чтобы на старых ПК игра грузилась быстрее
    if (ext === '.js' || ext === '.css') headers['Cache-Control'] = 'public, max-age=300';
    if (/\bgzip\b/.test(String(req.headers['accept-encoding'] || '')) && /^\.(html|js|css|json|svg)$/.test(ext)) {
      headers['Content-Encoding'] = 'gzip';
      headers['Vary'] = 'Accept-Encoding';
      res.writeHead(200, headers);
      return res.end(zlib.gzipSync(data));
    }
    res.writeHead(200, headers);
    res.end(data);
  });
});

// ---- Комнаты ----
const rooms = new Map(); // код -> { host, guest }
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // без похожих символов (0/O, 1/I)

function newCode() {
  for (let i = 0; i < 1000; i++) {
    let c = '';
    for (let j = 0; j < 4; j++) c += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    if (!rooms.has(c)) return c;
  }
  return null;
}

function send(ws, m) {
  if (ws && ws.readyState === 1) ws.send(JSON.stringify(m));
}

function leave(ws) {
  const room = ws.room;
  if (!room) return;
  ws.room = null;
  const other = room.host === ws ? room.guest : room.host;
  send(other, { t: 'bye' });
  if (other) other.room = null;
  rooms.delete(room.code);
}

const wss = new WebSocketServer({ server, maxPayload: 64 * 1024 });

wss.on('connection', (ws) => {
  ws.isAlive = true;
  ws.room = null;
  ws.on('pong', () => (ws.isAlive = true));

  ws.on('message', (raw) => {
    let m;
    try {
      m = JSON.parse(raw.toString());
    } catch {
      return;
    }
    if (!m || typeof m.t !== 'string') return;

    if (m.t === 'create') {
      if (ws.room) return;
      const code = newCode();
      if (!code) return send(ws, { t: 'err', m: 'Нет свободных комнат, попробуйте позже.' });
      const room = { code, host: ws, guest: null };
      rooms.set(code, room);
      ws.room = room;
      return send(ws, { t: 'code', c: code });
    }

    if (m.t === 'join') {
      if (ws.room) return;
      const room = rooms.get(String(m.c || '').toUpperCase());
      if (!room) return send(ws, { t: 'err', m: 'Комната не найдена. Проверьте код.' });
      if (room.guest) return send(ws, { t: 'err', m: 'В комнате уже двое игроков.' });
      room.guest = ws;
      ws.room = room;
      send(room.host, { t: 'ready' });
      return send(ws, { t: 'ready' });
    }

    // Всё остальное просто пересылаем напарнику
    const room = ws.room;
    if (!room) return;
    const other = room.host === ws ? room.guest : room.host;
    send(other, m);
  });

  ws.on('close', () => leave(ws));
  ws.on('error', () => leave(ws));
});

// Пинг, чтобы Render не обрывал «молчащие» соединения
setInterval(() => {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
}, 25000);

server.listen(PORT, () => console.log('Игра запущена на порту ' + PORT));
