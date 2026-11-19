// Сервер: отдаёт игру из public/ и пересылает сообщения между двумя игроками комнаты.
const http = require('http');
const fs = require('fs');
const path = require('path');
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

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
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
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
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
