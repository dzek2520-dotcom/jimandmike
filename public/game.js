var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
let rnd = Math.random;
const $ = (id) => document.getElementById(id), R = (a, b) => a + rnd() * (b - a), pk = (a) => a[Math.random() * a.length | 0];
let vol = 0.5, AC;
function snd(f, d, ty, s) {
  try {
    AC = AC || new AudioContext();
    const o = AC.createOscillator(), g = AC.createGain(), n = AC.currentTime;
    o.type = ty;
    o.frequency.setValueAtTime(f, n);
    o.frequency.exponentialRampToValueAtTime(Math.max(30, f + s), n + d);
    g.gain.setValueAtTime(vol * 0.25 + 1e-4, n);
    g.gain.exponentialRampToValueAtTime(1e-4, n + d);
    o.connect(g);
    g.connect(AC.destination);
    o.start();
    o.stop(n + d);
  } catch (e) {
  }
}
const SFX = { hit: () => snd(220, 0.15, "square", -140), fall: () => snd(600, 0.45, "sawtooth", -500), creak: () => snd(140, 0.3, "sawtooth", 70), bzz: () => snd(90, 0.4, "square", 30), pick: () => snd(500, 0.12, "triangle", 400), win: () => {
  snd(500, 0.25, "triangle", 300);
  setTimeout(() => snd(800, 0.4, "triangle", 300), 180);
} };
let L = [
  { n: "\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430", w: 18, h: 8, c: 8368233, s: 6192973, wl: 7032698, bg: 2826803, ec: 14701978, k: 16765503, hv: 13621468, N: 2, es: 2.2, d: [[0, "\u0412\u0441\u0451. \u0421\u0435\u0433\u043E\u0434\u043D\u044F \u044F \u0441\u043C\u043E\u0442\u0440\u044E \u0444\u0438\u043B\u044C\u043C. \u042D\u0442\u043E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435."], [1, "\u041F\u0443\u043B\u044C\u0442 \u043C\u043E\u0439. \u042F \u043A\u0443\u043F\u0438\u043B \u0435\u0433\u043E \u043D\u0430 \u0441\u0434\u0430\u0447\u0443 \u043E\u0442 \u0442\u0432\u043E\u0435\u0433\u043E \u0441\u0430\u043C\u043E\u0443\u0432\u0430\u0436\u0435\u043D\u0438\u044F."], [0, "\u041E\u0442\u0434\u0430\u0439, \u043F\u043E\u043A\u0430 \u044F \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043B \u043F\u043B\u0430\u043D \xAB\u0411\xBB!"], [2, "\u041E\u043D\u0438 \u0434\u0435\u0440\u0443\u0442\u0441\u044F. \u041F\u0443\u043B\u044C\u0442 \u0432\u0437\u043B\u0435\u0442\u0430\u0435\u0442, \u0432\u0435\u0440\u0442\u0438\u0442\u0441\u044F \u0438 \u0438\u0441\u0447\u0435\u0437\u0430\u0435\u0442 \u0432 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438."], [1, "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E, \u0441\u0442\u0440\u0430\u0442\u0435\u0433. \u0422\u0435\u043F\u0435\u0440\u044C \u043E\u043D \u0432 \u0441\u0442\u0435\u043D\u0435."]] },
  { n: "\u041A\u0430\u0444\u0435 \xAB\u0423 \u043C\u043E\u043A\u0440\u043E\u0433\u043E \u0445\u043B\u0435\u0431\u0430\xBB", w: 20, h: 9, c: 15245884, s: 12089898, wl: 9059645, bg: 2824730, ec: 10119738, k: 7259903, hv: 11583173, N: 3, es: 2.6, d: [[2, "\u041F\u0443\u043B\u044C\u0442 \u0432\u044B\u043F\u0430\u043B \u0432 \u043A\u0430\u0444\u0435. \u0422\u0443\u0442 \u043A\u0430\u043F\u0438\u0431\u0430\u0440\u044B \u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 \u043C\u0435\u043D\u044E \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u043F\u0440\u0435\u0437\u0438\u0440\u0430\u044E\u0442 \u0432\u0441\u0435\u0445."], [0, "\u0421\u043F\u043E\u043A\u043E\u0439\u043D\u043E, \u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u044E\u0441\u044C."], [1, "\u0422\u044B \u0443\u043C\u0435\u0435\u0448\u044C \u0434\u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u0437\u0435\u0440\u043A\u0430\u043B\u043E\u043C."]] },
  { n: "\u041F\u043E\u0434\u0432\u0430\u043B", w: 22, h: 9, c: 3837839, s: 2779754, wl: 3358029, bg: 1318954, ec: 10204218, k: 16747102, hv: 9479342, N: 3, es: 2.9, d: [[2, "\u041F\u043E\u0434\u0432\u0430\u043B. \u0422\u0443\u0442 \u0436\u0438\u0432\u0443\u0442 \u043F\u043B\u0435\u0441\u043D\u0435\u0432\u0435\u043B\u044B\u0435 \u0441\u043F\u0430\u0433\u0435\u0442\u0442\u0438 \u2014 \u043E\u043D\u0438 \u0434\u0430\u0432\u043D\u043E \u0432\u044B\u0448\u043B\u0438 \u0438\u0437 \u0441\u0440\u043E\u043A\u0430 \u0438 \u0438\u0437 \u0441\u0435\u0431\u044F."], [1, "\u042D\u0442\u0438 \u043C\u0430\u043A\u0430\u0440\u043E\u043D\u044B \u0441\u0442\u0430\u0440\u0448\u0435 \u0442\u0432\u043E\u0438\u0445 \u0448\u0443\u0442\u043E\u043A."], [0, "\u0417\u0430\u0442\u043E \u043C\u043E\u0438 \u0448\u0443\u0442\u043A\u0438 \u043D\u0435 \u043A\u0443\u0441\u0430\u044E\u0442\u0441\u044F!"]] },
  { n: "\u041C\u0438\u0440 \u0432\u043D\u0443\u0442\u0440\u0438 \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u0430", w: 24, h: 10, c: 9064400, s: 6172832, wl: 2763306, bg: 1182242, ec: 5234912, k: 16769354, hv: 15527921, N: 4, es: 3.2, d: [[2, "\u041C\u0438\u0440 \u0432\u043D\u0443\u0442\u0440\u0438 \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u0430. \u0412\u0441\u0451 \u0432 \u043F\u043E\u043C\u0435\u0445\u0430\u0445, \u0430 \u0441\u043B\u043E\u043C\u0430\u043D\u043D\u044B\u0435 \u0442\u043E\u0441\u0442\u0435\u0440\u044B \u043D\u0435\u043D\u0430\u0432\u0438\u0434\u044F\u0442 \u043B\u044E\u0434\u0435\u0439."], [0, "\u0412\u0438\u0436\u0443 \u043F\u0443\u043B\u044C\u0442! \u042D\u0442\u043E \u043C\u043E\u044F \u0441\u0443\u0434\u044C\u0431\u0430!"], [1, "\u0422\u0432\u043E\u044F \u0441\u0443\u0434\u044C\u0431\u0430 \u2014 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043C\u043D\u0435 \u043C\u043E\u0439 \u043F\u0443\u043B\u044C\u0442."]] },
  { n: "\u0411\u0430\u043B\u043A\u043E\u043D", w: 24, h: 10, c: 7317724, s: 4882350, wl: 5594987, bg: 1056814, ec: 16757575, k: 16739179, hv: 11583173, N: 4, es: 3.2, d: [[2, "\u041F\u0443\u043B\u044C\u0442 \u0443\u043B\u0435\u0442\u0435\u043B \u043F\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u0430\u043C \u043D\u0430 \u0431\u0430\u043B\u043A\u043E\u043D. \u0422\u0443\u0442 \u0436\u0438\u0432\u0443\u0442 \u0433\u043E\u043B\u0443\u0431\u0438-\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u0438\u043A\u0438."], [0, "\u042F \u0432\u0438\u0436\u0443 \u0435\u0433\u043E! \u041F\u0440\u044B\u0433\u0430\u0439!"], [1, "\u0421\u0430\u043C \u043F\u0440\u044B\u0433\u0430\u0439, \u0441\u0442\u0440\u0430\u0442\u0435\u0433."]] },
  { n: "\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F", w: 26, h: 10, c: 13213916, s: 10187440, wl: 3038830, bg: 1708592, ec: 6740392, k: 16765503, hv: 13621468, N: 4, es: 3.4, d: [[2, "\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F. \u0421\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B \u0431\u0435\u0448\u0435\u043D\u043E \u043A\u0440\u0443\u0442\u044F\u0442\u0441\u044F \u0438 \u0437\u043B\u044F\u0442\u0441\u044F \u043D\u0430 \u043D\u043E\u0441\u043A\u0438."], [1, "\u041C\u043E\u0439 \u043D\u043E\u0441\u043E\u043A! \u041E\u043D \u0442\u0430\u043C \u043E\u0434\u0438\u043D!"], [0, "\u042D\u0442\u043E \u0442\u0432\u043E\u0439 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0434\u0440\u0443\u0433?"]] },
  { n: "\u041A\u0440\u044B\u0448\u0430", w: 26, h: 11, c: 9276825, s: 7171450, wl: 3814224, bg: 855322, ec: 16735838, k: 7259903, hv: 11583173, N: 5, es: 3.5, d: [[2, "\u041A\u0440\u044B\u0448\u0430. \u041F\u0443\u043B\u044C\u0442 \u043A\u0430\u0442\u0438\u0442\u0441\u044F \u043A \u0430\u043D\u0442\u0435\u043D\u043D\u0435, \u0430 \u0430\u043D\u0442\u0435\u043D\u043D\u044B \u0441\u043C\u043E\u0442\u0440\u044F\u0442 \u043D\u0430 \u0433\u0435\u0440\u043E\u0435\u0432 \u0441 \u043E\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435\u043C."], [0, "\u0412\u0441\u0451 \u043F\u043E \u043F\u043B\u0430\u043D\u0443!"], [1, "\u041A\u0430\u043A\u043E\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E? \u0423 \u0442\u0435\u0431\u044F \u0438\u0445 \u0434\u0435\u0432\u044F\u0442\u044C."]] },
  { n: "\u0412\u043D\u0443\u0442\u0440\u0438 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430", w: 28, h: 11, c: 11069168, s: 7652564, wl: 3041930, bg: 662052, ec: 14701978, k: 16769354, hv: 15527921, N: 5, es: 3.7, d: [[2, "\u0412\u043D\u0443\u0442\u0440\u0438 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430. \u0425\u043E\u043B\u043E\u0434\u043D\u043E, \u0442\u0435\u043C\u043D\u043E, \u0430 \u0441\u044B\u0440 \u0441\u043C\u043E\u0442\u0440\u0438\u0442 \u0441 \u0443\u0433\u0440\u043E\u0437\u043E\u0439."], [1, "\u042F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E, \u043A\u0430\u043A \u043C\u043E\u0439 \u0441\u0430\u0440\u043A\u0430\u0437\u043C \u0437\u0430\u043C\u0435\u0440\u0437\u0430\u0435\u0442."], [0, "\u041F\u043E\u0437\u0434\u043D\u043E, \u043E\u043D \u0443\u0436\u0435 \u0437\u0430\u043C\u043E\u0440\u043E\u0436\u0435\u043D."]] },
  { n: "\u0421\u0442\u0440\u0430\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043E\u043A", w: 30, h: 12, c: 16766287, s: 13214247, wl: 6953755, bg: 2755082, ec: 5234912, k: 16739179, hv: 9479342, N: 6, es: 4, d: [[2, "\u0421\u0442\u0440\u0430\u043D\u0430 \u0440\u043E\u0437\u0435\u0442\u043E\u043A. \u0417\u0434\u0435\u0441\u044C \u0432\u0441\u0451 \u0438\u0441\u043A\u0440\u0438\u0442, \u0438 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0435\u0442, \u0433\u0434\u0435 \u0432\u0438\u043B\u043A\u0430."], [0, "\u0417\u043D\u0430\u0447\u0438\u0442, \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440..."], [1, "\u0422\u0438\u0445\u043E. \u041D\u0435 \u0433\u043E\u0432\u043E\u0440\u0438 \u044D\u0442\u043E\u0433\u043E \u0432\u0441\u043B\u0443\u0445."]] },
  { n: "\u041A\u043E\u043D\u0442\u043E\u0440\u0430 \u0432\u0438\u043B\u043E\u043A", w: 30, h: 12, c: 11581379, s: 9410470, wl: 4871528, bg: 1777450, ec: 12597547, k: 16765503, hv: 13621468, N: 6, es: 4.1, d: [[2, "\u0413\u0435\u0440\u043E\u0438 \u043D\u0430\u0436\u0438\u043C\u0430\u044E\u0442 \u043A\u043D\u043E\u043F\u043A\u0443. \u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u0447\u043A\u0443: \xAB\u041D\u0435\u0442 \u043F\u0438\u0442\u0430\u043D\u0438\u044F. \u0412\u0438\u043B\u043A\u0430 \u0432\u044B\u0434\u0430\u0451\u0442\u0441\u044F \u0432 \u041A\u043E\u043D\u0442\u043E\u0440\u0435 \u0432\u0438\u043B\u043E\u043A\xBB."], [1, "\u041A\u043E\u043D\u0442\u043E\u0440\u0430 \u0432\u0438\u043B\u043E\u043A. \u041A\u043E\u043D\u0435\u0447\u043D\u043E. \u0411\u044E\u0440\u043E\u043A\u0440\u0430\u0442\u0438\u044F \u0435\u0441\u0442\u044C \u0434\u0430\u0436\u0435 \u0443 \u0440\u043E\u0437\u0435\u0442\u043E\u043A."], [0, "\u0412\u0441\u0451 \u043F\u0440\u043E\u0441\u0442\u043E: \u0431\u0435\u0440\u0451\u043C \u0441\u043F\u0440\u0430\u0432\u043A\u0443, \u0431\u0435\u0440\u0451\u043C \u0432\u0438\u043B\u043A\u0443, \u0431\u0435\u0440\u0451\u043C \u0440\u0435\u0432\u0430\u043D\u0448."], [2, "\u041A\u0430\u0431\u0435\u043B\u044C \u0443\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 \u0441\u0442\u0435\u043D\u044B \u0432 \u043E\u043A\u043D\u043E \u0438 \u0442\u044F\u043D\u0435\u0442\u0441\u044F \u043F\u043E \u0433\u043E\u0440\u043E\u0434\u0443. \u0413\u0435\u0440\u043E\u0438 \u0438\u0434\u0443\u0442 \u0432\u0434\u043E\u043B\u044C \u043D\u0435\u0433\u043E."], [1, "\u0417\u0430\u043C\u0435\u0442\u044C: \u0442\u044B \u0432\u043F\u0435\u0440\u0432\u044B\u0435 \u0441\u043A\u0430\u0437\u0430\u043B \xAB\u043F\u043B\u0430\u043D\xBB \u0438 \u043D\u0435 \u0441\u043E\u0432\u0440\u0430\u043B."]] },
  { n: "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043F\u0430\u0440\u043A", w: 32, h: 12, c: 6270554, s: 4164155, wl: 3104058, bg: 926228, ec: 13849600, k: 16773494, hv: 10395294, N: 7, es: 4.2, d: [[2, "\u041A\u0430\u0431\u0435\u043B\u044C \u0432\u0435\u0434\u0451\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0440\u043A. \u0417\u0434\u0435\u0441\u044C \u0436\u0438\u0432\u0443\u0442 \u0444\u043E\u043D\u0430\u0440\u0438: \u043E\u043D\u0438 \u0441\u0432\u0435\u0442\u044F\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u043C, \u043A\u0442\u043E \u0438\u043C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F."], [0, "\u0424\u043E\u043D\u0430\u0440\u044C \u043C\u0438\u0433\u0430\u0435\u0442 \u043C\u043D\u0435. \u041C\u044B \u043F\u043E\u0434\u0440\u0443\u0436\u0438\u043B\u0438\u0441\u044C!"], [1, "\u041E\u043D \u043C\u0438\u0433\u0430\u0435\u0442 \u0430\u0437\u0431\u0443\u043A\u043E\u0439 \u041C\u043E\u0440\u0437\u0435. \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u043E: \xAB\u043F\u043E\u0448\u0451\u043B \u043F\u0440\u043E\u0447\u044C\xBB."], [2, "\u0421 \u0434\u0435\u0440\u0435\u0432\u0430 \u0437\u0430 \u0433\u0435\u0440\u043E\u044F\u043C\u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u0442 \u0440\u044B\u0436\u0438\u0439 \u0441\u0438\u043B\u0443\u044D\u0442. \u041E\u043D \u0437\u0435\u0432\u0430\u0435\u0442 \u0438 \u0438\u0441\u0447\u0435\u0437\u0430\u0435\u0442 \u0432 \u043B\u0438\u0441\u0442\u0432\u0435."]] },
  { n: "\u0422\u0435\u043B\u0435\u0431\u0430\u0448\u043D\u044F", w: 34, h: 13, c: 3622735, s: 2503224, wl: 1713022, bg: 330266, ec: 58879, k: 16728193, hv: 9479342, N: 7, es: 4.4, d: [[2, "\u0422\u0435\u043B\u0435\u0431\u0430\u0448\u043D\u044F. \u041E\u0442\u0441\u044E\u0434\u0430 \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u043E\u043C \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0441\u0438\u0433\u043D\u0430\u043B. \u0418 \u0432\u0441\u044F \u0441\u043A\u0443\u043A\u0430 \u043C\u0438\u0440\u0430."], [1, "\u0417\u043D\u0430\u0447\u0438\u0442, \u0432\u0438\u043B\u043A\u0430 \u0433\u0434\u0435-\u0442\u043E \u043D\u0430\u0432\u0435\u0440\u0445\u0443."], [0, "\u0410 \u043F\u0443\u043B\u044C\u0442 \u0437\u0434\u0435\u0441\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u0440\u0438 \u0447\u0451\u043C?"], [1, "\u041E\u043D \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438 \u0447\u0451\u043C. \u041E\u043D \u0438 \u0435\u0441\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u0430."], [2, "\u0418\u0437 \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u043E\u0432 \u0440\u0430\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u0433\u043E\u043B\u043E\u0441: \xAB\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C. \u0412\u044B \u043E\u043F\u043E\u0437\u0434\u0430\u043B\u0438 \u043D\u0430 \u0441\u043E\u0440\u043E\u043A \u043C\u0438\u043D\u0443\u0442 \u0440\u0435\u043A\u043B\u0430\u043C\u044B\xBB."]] },
  { n: "\u041E\u0440\u0431\u0438\u0442\u0430: \u0422\u0435\u0441\u043B\u0430", w: 32, h: 12, c: 1780298, s: 2900851, wl: 725542, bg: 131850, ec: 10134968, k: 16777215, hv: 9085128, N: 5, es: 3.8, tesla: 1, hint: "\u0421\u044F\u0434\u044C\u0442\u0435 \u0432 \u043A\u0440\u0430\u0441\u043D\u0443\u044E \u0422\u0435\u0441\u043B\u0443 (E): \u043E\u043D\u0430 \u043B\u0435\u0442\u0430\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0438 \u0441\u0431\u0438\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0435 E \u2014 \u0432\u044B\u0439\u0442\u0438.", d: [[2, "\u0413\u043E\u043B\u043E\u0441 \u0432 \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430\u0445 \u0441\u043C\u0435\u0451\u0442\u0441\u044F: \u0432\u0438\u043B\u043A\u0443 \u0431\u0430\u0448\u043D\u044F \u0434\u0430\u0432\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0430 \u043D\u0430 \u043E\u0440\u0431\u0438\u0442\u0443 \u2014 \u0432 \u043A\u0440\u0430\u0441\u043D\u043E\u0439 \u0422\u0435\u0441\u043B\u0435, \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043C\u0430\u043D\u0435\u043A\u0435\u043D\u043E\u043C \u0432 \u0441\u043A\u0430\u0444\u0430\u043D\u0434\u0440\u0435."], [1, "\u041C\u0430\u043D\u0435\u043A\u0435\u043D \u0432 \u0441\u043A\u0430\u0444\u0430\u043D\u0434\u0440\u0435? \u042D\u0442\u043E \u043C\u044B. \u0422\u043E\u043B\u044C\u043A\u043E \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u0441\u0442\u044E\u043C\u0430\u0445."], [0, "\u0411\u0435\u0440\u0451\u043C \u0422\u0435\u0441\u043B\u0443. \u0413\u043E\u0432\u043E\u0440\u044F\u0442, \u043E\u043D\u0430 \u0443\u043C\u0435\u0435\u0442 \u043B\u0435\u0442\u0430\u0442\u044C."], [2, "\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0422\u0435\u0441\u043B\u0430 \u043F\u0430\u0440\u0438\u0442 \u043D\u0430\u0434 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439. \u041C\u0443\u0437\u044B\u043A\u0430 \u0432 \u043D\u0435\u0439 \u0438\u0433\u0440\u0430\u0435\u0442 \u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0435 \u0443\u0436\u0435 \u0448\u0435\u0441\u0442\u044C \u043B\u0435\u0442."]] },
  { n: "\u041C\u0430\u0440\u0441: \u043F\u0443\u0441\u0442\u044B\u043D\u044F", w: 32, h: 12, c: 13129770, s: 10108703, wl: 7219738, bg: 2756360, ec: 8188064, k: 16769202, hv: 10586239, N: 6, es: 4, lg: 1, wd: 1, hint: "\u041D\u0438\u0437\u043A\u0430\u044F \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F: \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043B\u0435\u0442\u044F\u0442 \u0432\u044B\u0448\u0435 \u0438 \u0434\u0430\u043B\u044C\u0448\u0435. \u0421\u043B\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043F\u0435\u0441\u0447\u0430\u043D\u044B\u043C\u0438 \u0431\u0443\u0440\u044F\u043C\u0438 \u2014 \u043E\u043D\u0438 \u0441\u043D\u043E\u0441\u044F\u0442 \u0432\u0441\u0435\u0445.", d: [[2, "\u0422\u0435\u0441\u043B\u0430 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u041C\u0430\u0440\u0441 \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u0438 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043E\u043F\u043E\u0437\u0434\u0430\u043D\u0438\u0435\u043C. \u0412\u0441\u0451 \u0432\u043E\u043A\u0440\u0443\u0433 \u043A\u0440\u0430\u0441\u043D\u043E\u0435, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435."], [0, "\u041C\u0430\u0440\u0441! \u041F\u0435\u0440\u0432\u044B\u043C \u0441\u0442\u0443\u043F\u0438\u043B... \u0430\u0439, \u043F\u044B\u043B\u044C!"], [1, "\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F \u0442\u0443\u0442 \u0441\u043B\u0430\u0431\u0430\u044F, \u0437\u0430\u0442\u043E \u0443 \u043C\u0430\u0440\u0441\u0438\u0430\u043D \u043A\u0440\u0435\u043F\u043A\u0438\u0435 \u043D\u0435\u0440\u0432\u044B."], [2, "\u0412\u0434\u0430\u043B\u0438 \u0432\u0438\u0434\u0435\u043D \u043A\u0443\u043F\u043E\u043B. \u041D\u0430\u0434 \u0440\u0430\u0432\u043D\u0438\u043D\u043E\u0439 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0435\u043D\u0430 \u043F\u0435\u0441\u043A\u0430."]] },
  { n: "\u041C\u0430\u0440\u0441\u0438\u0430\u043D\u0441\u043A\u0438\u0439 \u043A\u0443\u043F\u043E\u043B", w: 30, h: 12, c: 14277091, s: 12105928, wl: 3885675, bg: 1053983, ec: 8188064, k: 4892927, hv: 13621468, N: 6, es: 4.1, pz: 1, lg: 1, hint: "\u0428\u043B\u044E\u0437 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u0434\u043E\u043C: \u043D\u0430\u0441\u0442\u0443\u043F\u0430\u0439\u0442\u0435 \u043D\u0430 \u043F\u043B\u0438\u0442\u044B \u0441\u0442\u0440\u043E\u0433\u043E \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0430\u043C 1, 2, 3. \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u043A\u043E\u0434.", d: [[2, "\u041A\u0443\u043F\u043E\u043B \u0441 \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u043E\u0439 \xAB\u0421\u0442\u0430\u043D\u0446\u0438\u044F \u201E\u0420\u043E\u0437\u0435\u0442\u043A\u0430-1\u201C\xBB. \u0428\u043B\u044E\u0437 \u0437\u0430\u043F\u0435\u0440\u0442 \u043A\u043E\u0434\u043E\u0432\u044B\u043C \u0437\u0430\u043C\u043A\u043E\u043C \u043D\u0430 \u0442\u0440\u0438 \u043F\u043B\u0438\u0442\u044B."], [1, "\u041D\u0430 \u043F\u043B\u0438\u0442\u0430\u0445 \u0446\u0438\u0444\u0440\u044B. \u041F\u043E\u0434\u043E\u0437\u0440\u0435\u0432\u0430\u044E, \u0447\u0442\u043E \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0432\u0430\u0436\u0435\u043D."], [0, "\u042F \u043B\u044E\u0431\u043B\u044E \u043F\u043E\u0440\u044F\u0434\u043E\u043A! \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043A\u043E\u0433\u0434\u0430 \u0435\u0433\u043E \u043D\u0430\u0440\u0443\u0448\u0430\u044E\u0442 \u0434\u0440\u0443\u0433\u0438\u0435."], [2, "\u041D\u0430\u0434 \u043F\u043B\u0438\u0442\u0430\u043C\u0438 \u043C\u0438\u0433\u0430\u044E\u0442 \u0446\u0438\u0444\u0440\u044B 1, 2, 3. \u041C\u0430\u0440\u0441\u0438\u0430\u043D\u0435 \u0441\u043C\u043E\u0442\u0440\u044F\u0442 \u0438 \u0436\u0434\u0443\u0442 \u043E\u0448\u0438\u0431\u043A\u0438."]] },
  { n: "\u041B\u0430\u0437\u0435\u0440\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F", w: 32, h: 12, c: 2767439, s: 2043200, wl: 1055274, bg: 329744, ec: 16739286, k: 8188064, hv: 9479342, N: 5, es: 4, lz: 2, hint: "\u041A\u0440\u0430\u0441\u043D\u044B\u0435 \u043B\u0430\u0437\u0435\u0440\u044B \u0445\u043E\u0434\u044F\u0442 \u043F\u043E \u0437\u0430\u043B\u0443 \u0438 \u043E\u0433\u043B\u0443\u0448\u0430\u044E\u0442. \u041F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u0435, \u043F\u043E\u043A\u0430 \u043E\u043D\u0438 \u0443\u0445\u043E\u0434\u044F\u0442.", d: [[2, "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u0438. \u0417\u0434\u0435\u0441\u044C \u0432\u044B\u0440\u0430\u0449\u0438\u0432\u0430\u044E\u0442 \u0432\u0438\u043B\u043A\u0438. \u041B\u0443\u0447\u0438 \u043B\u0430\u0437\u0435\u0440\u043E\u0432 \u0445\u043E\u0434\u044F\u0442 \u043F\u043E \u0437\u0430\u043B\u0443, \u043A\u0430\u043A \u0441\u043A\u0443\u0447\u0430\u044E\u0449\u0438\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u0438\u043A\u0438."], [1, "\u0417\u0430\u0434\u0435\u043D\u0443\u0442 \u043C\u0435\u043D\u044F \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044E \u0438\u043C \u0441\u0447\u0451\u0442."], [0, "\u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0432\u0435\u0442. \u041E\u0447\u0435\u043D\u044C \u0437\u043B\u043E\u0439 \u0441\u0432\u0435\u0442."], [2, "\u0417\u0430 \u043B\u0443\u0447\u0430\u043C\u0438 \u0441\u0442\u043E\u0438\u0442 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0432\u0438\u043B\u043A\u0430. \u0420\u044F\u0434\u043E\u043C \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u0430: \xAB\u041D\u0435 \u0442\u0440\u043E\u0433\u0430\u0442\u044C. \u0421\u0435\u0440\u044C\u0451\u0437\u043D\u043E\xBB."]] },
  { n: "\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0441\u043F\u0443\u0442\u043D\u0438\u043A", w: 32, h: 12, c: 13625589, s: 10274008, wl: 4878214, bg: 465446, ec: 16747102, k: 4892927, hv: 15527921, N: 6, es: 4.3, ice: 1, hint: "\u041B\u0451\u0434: \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438 \u0441\u043A\u043E\u043B\u044C\u0437\u044F\u0442. \u0422\u043E\u0440\u043C\u043E\u0437\u0438\u0442\u0435 \u0437\u0430\u0440\u0430\u043D\u0435\u0435.", d: [[2, "\u0412\u0438\u043B\u043A\u0430 \u0443 \u0433\u0435\u0440\u043E\u0435\u0432, \u043D\u043E \u0434\u043E\u043C\u043E\u0439 \u043D\u0430\u0434\u043E \u0447\u0435\u0440\u0435\u0437 \u043B\u0435\u0434\u044F\u043D\u043E\u0439 \u0441\u043F\u0443\u0442\u043D\u0438\u043A. \u0422\u0435\u0441\u043B\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442 \u0442\u043E\u043F\u043B\u0438\u0432\u043E \u0438 \u0441\u043E\u0432\u0435\u0441\u0442\u044C."], [0, "\u0421\u043A\u043E\u043B\u044C\u0437\u043A\u043E! \u042D\u0442\u043E \u043C\u043E\u0439 \u0437\u0432\u0451\u0437\u0434\u043D\u044B\u0439 \u0447\u0430\u0441!"], [1, "\u042D\u0442\u043E \u0442\u0432\u043E\u044F \u0432\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430 \u0432\u0441\u0442\u0430\u0442\u044C."], [2, "\u041B\u0451\u0434 \u0442\u0440\u0435\u0449\u0438\u0442. \u0413\u0434\u0435-\u0442\u043E \u0432\u043D\u0438\u0437\u0443, \u0432 \u0442\u0451\u043C\u043D\u043E\u0439 \u0432\u043E\u0434\u0435, \u043A\u0442\u043E-\u0442\u043E \u043C\u044F\u0443\u043A\u0430\u0435\u0442."]] },
  { n: "\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F", w: 36, h: 13, c: 14133358, s: 11896138, wl: 8014650, bg: 2758672, ec: 14701978, k: 7259903, hv: 15527921, N: 8, es: 4.6, d: [[2, "\u0422\u0435\u0441\u043B\u0430 \u0441\u0430\u0436\u0430\u0435\u0442 \u0433\u0435\u0440\u043E\u0435\u0432 \u043D\u0430 \u043A\u0440\u044B\u0448\u0443 \u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430. \u0412\u0438\u043B\u043A\u0430 \u0443 \u043D\u0438\u0445, \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0433\u043E\u0441\u0442\u0438\u043D\u0443\u044E, \u0437\u0430\u0445\u0432\u0430\u0447\u0435\u043D\u043D\u0443\u044E \u043C\u0435\u0431\u0435\u043B\u044C\u044E."], [0, "\u0414\u0438\u0432\u0430\u043D! \u041E\u043D \u043D\u0430\u0441 \u043D\u0435 \u0443\u0437\u043D\u0430\u0451\u0442!"], [1, "\u041E\u043D \u043D\u0430\u0441 \u0443\u0437\u043D\u0430\u0451\u0442. \u041E\u043D \u043D\u0430\u0441 \u043F\u043E\u043C\u043D\u0438\u0442. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0438 \u043D\u0430\u043F\u0430\u0434\u0430\u0435\u0442."], [2, "\u041F\u0443\u043B\u044C\u0442, \u0432\u0438\u043B\u043A\u0430, \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440. \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u044F\u0442\u044C \u043C\u0435\u0442\u0440\u043E\u0432. \u0421\u0430\u043C\u044B\u0445 \u0434\u043B\u0438\u043D\u043D\u044B\u0445 \u0432 \u0436\u0438\u0437\u043D\u0438."]] }
];
const FIN = [[2, "\u0412\u0438\u043B\u043A\u0430 \u0432 \u0440\u043E\u0437\u0435\u0442\u043A\u0435. \u041F\u0443\u043B\u044C\u0442 \u0432 \u0440\u0443\u043A\u0430\u0445. \u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440 \u043E\u0436\u0438\u0432\u0430\u0435\u0442 \u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u043E\u0435 \u0448\u043E\u0443 \u043E \u043F\u043E\u043B\u044C\u0437\u0435 \u0442\u0438\u0448\u0438\u043D\u044B."], [1, "\u0418 \u0440\u0430\u0434\u0438 \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u0441\u044C \u0433\u043E\u0440\u043E\u0434?"], [0, "\u0420\u0430\u0434\u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430. \u0418 \u043F\u043B\u0430\u043D\u0430. \u0412 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0440\u0430\u0434\u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430."], [2, "\u0421 \u0434\u0438\u0432\u0430\u043D\u0430 \u0441\u043F\u0440\u044B\u0433\u0438\u0432\u0430\u0435\u0442 \u0440\u044B\u0436\u0438\u0439 \u043A\u043E\u0442 \u0412\u0430\u043B\u0435\u0440\u0430. \u041E\u043D \u043D\u0430\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043B\u0430\u043F\u043E\u0439 \u043D\u0430 \u043F\u0443\u043B\u044C\u0442."], [3, "\u041C\u044F\u0443."], [2, "\u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440 \u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F. \u0412\u0430\u043B\u0435\u0440\u0430 \u043B\u043E\u0436\u0438\u0442\u0441\u044F \u043D\u0430 \u043F\u0443\u043B\u044C\u0442 \u0438 \u0437\u0430\u0441\u044B\u043F\u0430\u0435\u0442."], [0, "\u042D\u0442\u043E \u0431\u044B\u043B\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u043F\u043B\u0430\u043D\u0430..."], [1, "\u041D\u0435\u0442, \u0414\u0436\u0438\u043C. \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u0447\u0430\u0441\u0442\u044C\u044E \u043A\u043E\u0442\u0430."]];
const L0 = L;
const HURT = [["\u041C\u043E\u0439 \u043F\u043B\u0430\u043D \u0431\u044B\u043B \u0434\u0440\u0443\u0433\u0438\u043C!", "\u0410\u0439! \u042D\u0442\u043E \u043D\u0435 \u043F\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044E!", "\u042F \u0441\u0442\u0440\u0430\u0442\u0435\u0433, \u0430 \u043D\u0435 \u043C\u044F\u0447\u0438\u043A!"], ["\u0425\u0430! \u0414\u0430\u0436\u0435 \u043D\u0435 \u0431\u043E\u043B\u044C\u043D\u043E. \u041F\u043E\u0447\u0442\u0438.", "\u042D\u0442\u043E \u0431\u044B\u043B \u043D\u0435 \u044F. \u042D\u0442\u043E \u0431\u044B\u043B \u0442\u044B.", "\u041C\u043E\u0439 \u0445\u043B\u0438\u043F\u043A\u0438\u0439 \u044D\u0433\u043E \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B."]];
const IDLE = [["\u042F \u0442\u0443\u0442 \u0433\u043B\u0430\u0432\u043D\u044B\u0439!", "\u041F\u0443\u043B\u044C\u0442 \u2014 \u043C\u043E\u044F \u0441\u0443\u0434\u044C\u0431\u0430!", "\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043B\u0430\u043D, \u043D\u0435 \u043C\u0435\u0448\u0430\u0439."], ["\u041A\u043B\u0430\u0441\u0441\u043D\u044B\u0439 \u043F\u043B\u0430\u043D. \u0414\u043B\u044F \u043A\u0440\u043E\u0442\u0430.", "\u041F\u0443\u043B\u044C\u0442 \u043C\u043E\u0439, \u043D\u0438\u0449\u0435\u0431\u0440\u043E\u0434.", "\u0422\u044B \u0448\u0443\u043C\u0438\u0448\u044C \u043A\u0430\u043A \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A."]];
for (const k in SFX) {
  const f = SFX[k];
  SFX[k] = () => {
    f();
    if (mode == "host") send({ t: "fx", k });
  };
}
const K = {}, KM = [{ u: "KeyW", d: "KeyS", l: "KeyA", r: "KeyD", a: "KeyF", i: "KeyE" }, { u: "ArrowUp", d: "ArrowDown", l: "ArrowLeft", r: "ArrowRight", a: "KeyK", i: "KeyL" }];
let mode = "local", me = 0, ws, RK = {}, got = false, sn = 0, st = "menu", li = 0, lv, P = [], E = [], I = [], pl = [], gate, gx, open = false, t = 0, rem, q = [], cb, idl = 5;
let sqp = 0, lt = 0, gust = false, LZ = [];
const rid = (p) => I.some((i) => i.tesla && i.holder === p), pc = (i, on) => lv.pz ? i < sqp ? 3800968 : on ? 16765503 : 4892927 : on ? 3800968 : 16726843, lzx = (k) => Math.sin(lt * 1.05 + k * 2.4) * (gx - 4);
function mkRen() {
  let r = null;
  for (const aa of [true, false]) {
    try {
      r = new THREE.WebGLRenderer({ antialias: aa, powerPreference: "high-performance" });
      if (r) break;
    } catch (e) {
      r = null;
    }
  }
  if (!r) {
    const d = document.createElement("div");
    d.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;z-index:99;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;background:#2b2233;color:#fff3c4;font:18px sans-serif";
    d.textContent = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C WebGL. \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0434\u0440\u0430\u0439\u0432\u0435\u0440 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B \u0438 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E \xAB\u0410\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435\xBB (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u2192 \u0421\u0438\u0441\u0442\u0435\u043C\u0430).";
    document.body.appendChild(d);
    throw new Error("WebGL unavailable");
  }
  return r;
}
const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(40, 1, 0.1, 300), ren = mkRen(), world = new THREE.Group(), cl = new THREE.Vector3();
document.body.appendChild(ren.domElement);
scene.add(world, new THREE.AmbientLight(16777215, 0.75));
const dl = new THREE.DirectionalLight(16777215, 0.7);
dl.position.set(5, 12, 6);
scene.add(dl);
function rs() {
  ren.setSize(innerWidth, innerHeight);
  cam.aspect = innerWidth / innerHeight;
  cam.updateProjectionMatrix();
}
addEventListener("resize", rs);
rs();
const MT = (c) => new THREE.MeshToonMaterial({ color: c });
function box(w, h, d, c) {
  const g = new THREE.BoxGeometry(w, h, d), m = new THREE.Mesh(g, MT(c)), o = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0, side: THREE.BackSide }));
  o.scale.setScalar(1.1);
  m.add(o);
  return m;
}
function tex(hat) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const x = c.getContext("2d");
  x.lineWidth = 6;
  x.strokeStyle = "#000";
  x.fillStyle = "#fff";
  x.beginPath();
  x.moveTo(32, 128);
  x.quadraticCurveTo(34, 76, 64, 72);
  x.quadraticCurveTo(94, 76, 96, 128);
  x.fill();
  x.stroke();
  x.beginPath();
  x.arc(64, 52, 26, 0, 7);
  x.fill();
  x.stroke();
  x.fillStyle = "#000";
  x.beginPath();
  x.arc(54, 54, 5, 0, 7);
  x.fill();
  x.beginPath();
  x.arc(76, 54, 5, 0, 7);
  x.fill();
  if (hat) {
    x.fillRect(38, 24, 52, 8);
    x.fillRect(48, 2, 32, 26);
  } else {
    x.fillRect(36, 34, 56, 10);
    x.fillStyle = "#ff5e3a";
    x.fillRect(36, 36, 56, 5);
  }
  return new THREE.CanvasTexture(c);
}
let TX;
function mkP(id, x, z) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: TX[id], transparent: true })), sh = new THREE.Mesh(new THREE.CircleGeometry(0.9, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.35 }));
  sh.rotation.x = -Math.PI / 2;
  sh.position.y = 0.02;
  world.add(sp, sh);
  return { id, kind: "p", x, z, vx: 0, vz: 0, r: 0.8, im: 1, fx: 1, fz: 0, stun: 0, cd: 0, hit: 0, inv: 0, hold: null, sp, sh, say: 0, rot: 0 };
}
function mkI(x, z, w, h, d, c, im, rem2) {
  const m = box(w, h, d, c);
  world.add(m);
  const it = { kind: "i", x, z, vx: 0, vz: 0, y: 0, vy: 0, r: Math.max(w, d) / 2, im, h, m, holder: null, thr: 0, by: null, rem: rem2 };
  I.push(it);
  return it;
}
function load(i) {
  li = i;
  lv = L[i];
  let sd = i * 7919 + 13;
  rnd = () => {
    sd = sd * 1664525 + 1013904223 >>> 0;
    return sd / 4294967296;
  };
  while (world.children.length) world.remove(world.children[0]);
  P = [];
  E = [];
  I = [];
  LZ = [];
  sqp = 0;
  lt = 0;
  open = false;
  scene.background = new THREE.Color(lv.bg);
  const w = lv.w, h = lv.h;
  gx = w - 4;
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(w * 2, h * 2), MT(lv.c));
  fl.rotation.x = -Math.PI / 2;
  world.add(fl);
  for (let k = 0; k < 28; k++) {
    const s = new THREE.Mesh(new THREE.CircleGeometry(R(0.4, 1.3), 12), new THREE.MeshBasicMaterial({ color: lv.s }));
    s.rotation.x = -Math.PI / 2;
    s.position.set(R(-w, w), 0.01, R(-h, h));
    world.add(s);
  }
  [[0, -h - 0.5, 2 * w + 2, 1], [0, h + 0.5, 2 * w + 2, 1], [-w - 0.5, 0, 1, 2 * h], [w + 0.5, 0, 1, 2 * h]].forEach((a) => {
    const m = box(a[2], 2.5, a[3], lv.wl);
    m.position.set(a[0], 1.25, a[1]);
    world.add(m);
  });
  pl = (lv.cu ? lv.cu.pl.map((a) => ({ x: a[0], z: a[1] })) : [{ x: -w * 0.25, z: -h * 0.6 }, { x: w * 0.1, z: h * 0.6 }, ...lv.pz ? [{ x: w * 0.28, z: -h * 0.45 }] : []]).map((p, i2) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.15, 24), new THREE.MeshBasicMaterial({ color: 16726843 }));
    m.position.set(p.x, 0.08, p.z);
    world.add(m);
    p.m = m;
    if (lv.pz) {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const x = c.getContext("2d");
      x.font = "bold 52px sans-serif";
      x.textAlign = "center";
      x.fillStyle = "#fff";
      x.strokeStyle = "#000";
      x.lineWidth = 6;
      x.strokeText(i2 + 1, 32, 50);
      x.fillText(i2 + 1, 32, 50);
      const l = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }));
      l.scale.set(2, 2, 1);
      l.position.set(p.x, 1.6, p.z);
      world.add(l);
    }
    return p;
  });
  gate = box(1, 4, 2 * h, 16765503);
  gate.position.set(gx, 2, 0);
  world.add(gate);
  const ex = new THREE.Mesh(new THREE.PlaneGeometry(4, 2 * h), new THREE.MeshBasicMaterial({ color: 3800968, transparent: true, opacity: 0.5 }));
  ex.rotation.x = -Math.PI / 2;
  ex.position.set(w - 1.8, 0.03, 0);
  world.add(ex);
  rem = mkI(...lv.cu ? lv.cu.rm : [R(-w * 0.2, w * 0.2), R(-h * 0.5, h * 0.5)], 0.7, 0.4, 1.5, 2236962, 1.4, true);
  const bt = box(0.3, 0.2, 0.3, 16720418);
  bt.position.y = 0.25;
  rem.m.add(bt);
  for (let k = 0, CI = lv.cu ? lv.cu.it : null; k < (CI ? CI.length : 6); k++) {
    const hv = CI ? CI[k][2] : k % 3 == 2;
    mkI(...CI ? [CI[k][0], CI[k][1]] : [R(-w + 4, gx - 3), R(-h + 2, h - 2)], hv ? 1.8 : 1.1, hv ? 2.2 : 1.1, hv ? 1.8 : 1.1, hv ? lv.hv : lv.k, hv ? 0.15 : 1);
  }
  if (lv.tesla) {
    const ts = mkI(...lv.cu && lv.cu.ts ? lv.cu.ts : [-w * 0.4, 0], 2.6, 0.9, 1.6, 14883127, 0.5, false);
    ts.tesla = true;
    const a = box(2.6, 0.15, 0.4, 16777215);
    a.position.y = 0.5;
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), new THREE.MeshBasicMaterial({ color: 16777215 }));
    b.position.y = 0.8;
    ts.m.add(a, b);
  }
  for (let k = 0; k < (lv.lz || 0); k++) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2, 2 * h), new THREE.MeshBasicMaterial({ color: 16722474 }));
    m.position.y = 1;
    world.add(m);
    LZ.push(m);
  }
  for (let k = 0; k < lv.N; k++) {
    const m = box(2.2, 1.5, 1.6, lv.ec);
    [-0.45, 0.45].forEach((s) => {
      const e = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), new THREE.MeshBasicMaterial({ color: 16777215 })), p = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0 }));
      e.position.set(s, 0.5, 0.8);
      p.position.set(0, 0, 0.25);
      e.add(p);
      m.add(e);
    });
    world.add(m);
    E.push({ kind: "e", x: lv.cu ? lv.cu.en[k][0] : R(0, gx - 3), z: lv.cu ? lv.cu.en[k][1] : R(-h + 2, h - 2), vx: 0, vz: 0, r: 1.1, im: 0.4, stun: 0, m, sp: lv.es });
  }
  P = [mkP(0, -w + 2, -1.5), mkP(1, -w + 2, 1.5)];
  cam.position.set(-w + 2, 14, 14);
  cl.set(-w + 2, 0, 0);
  $("menu").style.display = $("dlg").style.display = $("pause").style.display = "none";
  st = "play";
  rnd = Math.random;
  got = false;
}
function say(i, s) {
  const p = P[i];
  if (!p) return;
  if (mode == "host") send({ t: "say", i, s });
  p.say = 2.4;
  $("b" + i).textContent = s;
}
let th, ct = 0, spk = 2, tw = null, ttl = "";
const cv = document.createElement("canvas"), g2 = cv.getContext("2d"), SR = [...Array(40)].map(() => [Math.random(), Math.random(), Math.random()]), hx = (c) => "#" + c.toString(16).padStart(6, "0");
cv.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;z-index:4;display:none";
document.body.insertBefore(cv, $("dlg"));
function cin(dt) {
  ct += dt;
  const W = cv.width = innerWidth, H = cv.height = innerHeight, g = g2, T = th, fy = H * 0.72, u = Math.min(W * 0.45, H * 0.5), ca = Math.min(1, ct / 0.7);
  const gr = g.createLinearGradient(0, 0, 0, fy);
  gr.addColorStop(0, hx(T.bg));
  gr.addColorStop(1, hx(T.wl));
  g.fillStyle = gr;
  g.fillRect(0, 0, W, H);
  g.fillStyle = hx(T.k);
  SR.forEach((a) => {
    g.globalAlpha = 0.2 + 0.5 * a[2];
    g.beginPath();
    g.arc(((a[0] * W - ct * (10 + a[2] * 30)) % W + W) % W, a[1] * fy * 0.9 + Math.sin(ct + a[0] * 9) * 10, 1.5 + a[2] * 3, 0, 7);
    g.fill();
  });
  for (let l = 0; l < 2; l++) {
    g.fillStyle = hx(l ? T.s : T.ec);
    g.globalAlpha = 0.22 + 0.18 * l;
    for (let i = 0; i < 9; i++) {
      const bw = W / 6, x = ((i * bw * 0.9 - ct * (8 + l * 14)) % (W * 1.2) + W * 1.2) % (W * 1.2) - bw, bh2 = H * (0.16 + (i * 37 + l * 11) % 10 / 45);
      g.fillRect(x, fy - bh2, bw * 0.7, bh2);
    }
  }
  g.globalAlpha = 1;
  g.fillStyle = hx(T.c);
  g.fillRect(0, fy, W, H - fy);
  g.fillStyle = "#0005";
  g.fillRect(0, fy, W, 5);
  [0, 1].forEach((i) => {
    const on = spk == i, s = u * (on ? 1.1 : 1), x = W * (i ? 0.74 : 0.26) + (1 - ca) * (i ? 220 : -220);
    g.save();
    g.globalAlpha = (on || spk > 1 ? 1 : 0.5) * ca;
    g.fillStyle = "#0004";
    g.beginPath();
    g.ellipse(x, fy + 4, s * 0.35, s * 0.07, 0, 0, 7);
    g.fill();
    g.translate(x, fy + Math.sin(ct * (on ? 7 : 2) + i) * (on ? 7 : 3));
    if (i) g.scale(-1, 1);
    g.drawImage(TX[i].image, -s / 2, -s, s, s);
    g.restore();
  });
  if (spk == 3) {
    const x = W / 2, r = u * 0.22;
    g.fillStyle = "#e8944a";
    g.strokeStyle = "#000";
    g.lineWidth = 4;
    g.beginPath();
    g.ellipse(x, fy - r * 0.8, r * 1.3, r * 0.8, 0, 0, 7);
    g.fill();
    g.stroke();
    g.beginPath();
    g.arc(x, fy - r * 1.9, r * 0.8, 0, 7);
    g.fill();
    g.stroke();
    [-1, 1].forEach((k) => {
      g.beginPath();
      g.moveTo(x + k * r * 0.2, fy - r * 2.5);
      g.lineTo(x + k * r * 0.75, fy - r * 3.1);
      g.lineTo(x + k * r * 0.9, fy - r * 2.2);
      g.fill();
      g.stroke();
    });
  }
  const v = g.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.9);
  v.addColorStop(0, "#0000");
  v.addColorStop(1, "#000b");
  g.fillStyle = v;
  g.fillRect(0, 0, W, H);
  g.fillStyle = "#000";
  const bh = H * 0.11 * Math.min(1, ct * 2);
  g.fillRect(0, 0, W, bh);
  g.fillRect(0, H - bh, W, bh);
  if (ttl && ct < 3.2) {
    g.globalAlpha = Math.min(1, ct) * (ct > 2.6 ? (3.2 - ct) / 0.6 : 1);
    g.fillStyle = "#fff3c4";
    g.textAlign = "center";
    g.font = "bold " + Math.round(Math.min(W / 17, 52)) + 'px "Trebuchet MS",sans-serif';
    g.shadowColor = "#000";
    g.shadowBlur = 14;
    g.fillText(ttl, W / 2, H * 0.3);
    g.shadowBlur = 0;
    g.globalAlpha = 1;
  }
}
function showDlg(lines, f, i, tt) {
  q = lines.slice();
  cb = f;
  st = "dlg";
  th = L[Math.min(i || 0, L.length - 1)];
  ttl = tt || "\u0413\u043B\u0430\u0432\u0430 " + (i + 1) + ". " + th.n;
  ct = 0;
  tw = null;
  $("dlg").style.display = "flex";
  nextDlg();
}
function nextDlg() {
  if (st != "dlg") return;
  if (tw && tw.t * 45 < tw.s.length) {
    tw.t = 999;
    return;
  }
  if (!q.length) {
    $("dlg").style.display = "none";
    return cb();
  }
  const [w, s] = q.shift();
  spk = w;
  tw = { s, t: 0 };
  $("dn").textContent = ["\u0414\u0436\u0438\u043C", "\u041C\u0430\u0439\u043A", "\u0420\u0430\u0441\u0441\u043A\u0430\u0437\u0447\u0438\u043A", "\u041A\u043E\u0442 \u0412\u0430\u043B\u0435\u0440\u0430"][w];
  $("dn").style.color = ["#ffd23f", "#ff8a5e", "#9ad", "#e8944a"][w];
  $("dt").textContent = "";
  snd(300 + w * 120, 0.06, "square", 50);
}
function bump(b, vx, vz, s) {
  b.vx = vx;
  b.vz = vz;
  b.stun = s;
  SFX.hit();
  if (b.kind == "p") {
    drop(b);
    say(b.id, pk(HURT[b.id]));
    SFX.fall();
  }
}
function drop(p) {
  if (p.hold) {
    p.hold.holder = null;
    p.hold = null;
  }
}
function attack(p) {
  if (p.stun > 0 || p.cd > 0) return;
  p.cd = 0.5;
  p.hit = 0.25;
  SFX.hit();
  for (const b of [...P, ...E]) if (b !== p && Math.hypot(b.x - p.x, b.z - p.z) < 2.6) bump(b, p.fx * 14, p.fz * 14, b.kind == "p" ? 1.4 : 2);
  for (const it of I) if (!it.holder && Math.hypot(it.x - p.x, it.z - p.z) < 2.4) {
    it.vx += p.fx * 12;
    it.vz += p.fz * 12;
    it.vy = 4;
  }
}
function interact(p) {
  if (p.stun > 0) return;
  if (p.hold) {
    const it = p.hold;
    drop(p);
    if (it.tesla) {
      it.vx = it.vz = 0;
      it.y = 0;
      it.vy = 0;
      SFX.pick();
      return;
    }
    it.vx = p.fx * 11;
    it.vz = p.fz * 11;
    it.vy = 5;
    it.y = 1.5;
    it.thr = 0.8;
    it.by = p;
    SFX.pick();
    if (it.rem) say(p.id, "\u041B\u043E\u0432\u0438, \u0436\u0443\u043B\u0438\u043A!");
    return;
  }
  let best = null, bd = 2.4;
  for (const it of I) if (!it.holder && it.im >= 0.5) {
    const d = Math.hypot(it.x - p.x, it.z - p.z);
    if (d < bd) {
      bd = d;
      best = it;
    }
  }
  if (best) {
    best.holder = p;
    p.hold = best;
    SFX.pick();
    if (best.rem) say(p.id, "\u041F\u0443\u043B\u044C\u0442 \u043C\u043E\u0439!");
  }
}
function touch(a, b, nx, nz) {
  if (a.kind == "e" && b.kind == "p" && rid(b)) return bump(a, -nx * 16, -nz * 16, 2.2);
  if (a.kind == "e" && a.stun <= 0 && b.kind == "p" && b.stun <= 0 && !(b.inv > 0)) bump(b, nx * 11, nz * 11, 0.9);
  if (a.kind == "i" && a.thr > 0 && b.kind != "i" && b !== a.by && b.stun <= 0 && !(b.inv > 0)) bump(b, nx * 10, nz * 10, 1.1);
}
function upd(dt) {
  t += dt;
  lt += dt;
  gust = !!lv.wd && lt % 9 > 5.5;
  if (mode != "guest") {
    P.forEach((p, i) => {
      p.cd -= dt;
      p.hit -= dt;
      p.inv -= dt;
      if (p.stun > 0) {
        p.stun -= dt * (inp(i, "u") || inp(i, "d") || inp(i, "l") || inp(i, "r") ? 3.2 : 1);
        if (p.stun <= 0) {
          p.stun = 0;
          p.inv = 1.3;
        }
      } else {
        let dx = (inp(i, "r") ? 1 : 0) - (inp(i, "l") ? 1 : 0), dz = (inp(i, "d") ? 1 : 0) - (inp(i, "u") ? 1 : 0);
        const l = Math.hypot(dx, dz);
        if (l) {
          dx /= l;
          dz /= l;
          p.fx = dx;
          p.fz = dz;
        }
        const k = Math.min(1, (lv.ice ? 1.5 : 12) * dt), vs = rid(p) ? 11 : 6.5;
        p.vx += (dx * vs - p.vx) * k;
        p.vz += (dz * vs - p.vz) * k;
      }
      if (p.stun > 0) {
        drop(p);
        const f = Math.exp(-2.5 * dt);
        p.vx *= f;
        p.vz *= f;
      }
    });
    E.forEach((e) => {
      if (e.stun > 0) {
        e.stun -= dt;
        const f = Math.exp(-2.5 * dt);
        e.vx *= f;
        e.vz *= f;
      } else {
        const tp = P.reduce((a2, b2) => Math.hypot(b2.x - e.x, b2.z - e.z) < Math.hypot(a2.x - e.x, a2.z - e.z) ? b2 : a2), dx = tp.x - e.x, dz = tp.z - e.z, l = Math.hypot(dx, dz) || 1, k = Math.min(1, 4 * dt);
        e.vx += (dx / l * e.sp - e.vx) * k;
        e.vz += (dz / l * e.sp - e.vz) * k;
      }
    });
    I.forEach((it) => {
      if (it.holder) {
        const p = it.holder;
        if (it.tesla) {
          it.x = p.x;
          it.z = p.z;
          it.y = 0.9;
        } else {
          it.x = p.x + p.fx * 0.9;
          it.z = p.z + p.fz * 0.9;
          it.y = 1.5;
        }
        it.vx = it.vz = 0;
        return;
      }
      const f = Math.exp(-2.5 * dt);
      it.vx *= f;
      it.vz *= f;
      it.thr -= dt;
      if (it.y > 0 || it.vy > 0) {
        it.vy -= 26 * (lv.lg ? 0.4 : 1) * dt;
        it.y += it.vy * dt;
        if (it.y <= 0) {
          it.y = 0;
          if (it.vy < -3) {
            it.vy *= -0.35;
            SFX.creak();
          } else it.vy = 0;
        }
      }
    });
    const B = [...P, ...E, ...I.filter((i) => !i.holder)];
    B.forEach((b2) => {
      if (gust) b2.vz += (b2.kind == "i" ? 15 : 40) * dt;
      b2.x += b2.vx * dt;
      b2.z += b2.vz * dt;
      const X = lv.w - b2.r, Z = lv.h - b2.r;
      if (b2.x < -X) {
        b2.x = -X;
        b2.vx = Math.abs(b2.vx) * 0.5;
      }
      if (b2.x > X) {
        b2.x = X;
        b2.vx = -Math.abs(b2.vx) * 0.5;
      }
      if (b2.z < -Z) {
        b2.z = -Z;
        b2.vz = Math.abs(b2.vz) * 0.5;
      }
      if (b2.z > Z) {
        b2.z = Z;
        b2.vz = -Math.abs(b2.vz) * 0.5;
      }
      if (!open && b2.x > gx - 0.7 - b2.r) {
        b2.x = gx - 0.7 - b2.r;
        b2.vx = -Math.abs(b2.vx) * 0.3;
      }
    });
    for (let i = 0; i < B.length; i++) for (let j = i + 1; j < B.length; j++) {
      const a2 = B[i], b2 = B[j], dx = b2.x - a2.x, dz = b2.z - a2.z, d = Math.hypot(dx, dz), m = a2.r + b2.r;
      if (d >= m || d < 1e-4) continue;
      if (a2.kind == "i" && a2.y > 1.6 || b2.kind == "i" && b2.y > 1.6) continue;
      const nx = dx / d, nz = dz / d, s = a2.im + b2.im, ov = m - d;
      a2.x -= nx * ov * a2.im / s;
      a2.z -= nz * ov * a2.im / s;
      b2.x += nx * ov * b2.im / s;
      b2.z += nz * ov * b2.im / s;
      const rv = (b2.vx - a2.vx) * nx + (b2.vz - a2.vz) * nz;
      if (rv < 0) {
        const k = -1.6 * rv / s;
        a2.vx -= k * a2.im * nx;
        a2.vz -= k * a2.im * nz;
        b2.vx += k * b2.im * nx;
        b2.vz += k * b2.im * nz;
      }
      touch(a2, b2, nx, nz);
      touch(b2, a2, -nx, -nz);
    }
    pl.forEach((p, i) => {
      p.on = B.some((b2) => (b2.kind == "p" || b2.kind == "i" && b2.y < 0.5) && Math.hypot(b2.x - p.x, b2.z - p.z) < 1.5);
      if (lv.pz) {
        if (p.on && !p.was) {
          if (i == sqp) {
            sqp++;
            SFX.pick();
          } else if (i > sqp) {
            sqp = 0;
            SFX.bzz();
          }
        }
        p.was = p.on;
      }
    });
    pl.forEach((p, i) => p.m.material.color.set(pc(i, p.on)));
    LZ.forEach((m, k) => {
      const x = lzx(k);
      P.forEach((p) => {
        if (Math.abs(p.x - x) < 0.9 && p.stun <= 0 && !(p.inv > 0)) bump(p, (p.x > x ? 1 : -1) * 9, 0, 1);
      });
    });
    if (!open && (lv.pz ? sqp >= pl.length : pl.every((p) => p.on))) {
      open = true;
      SFX.bzz();
      say(0, "\u0412\u043E\u0440\u043E\u0442\u0430 \u043E\u0442\u043A\u0440\u044B\u043B\u0438\u0441\u044C! \u042F \u0442\u0430\u043A \u0438 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043B!");
    }
  }
  LZ.forEach((m, k) => m.position.x = lzx(k));
  gate.position.y += ((open ? -2.4 : 2) - gate.position.y) * Math.min(1, 3 * dt);
  if (mode != "guest" && open && rem.x > lv.w - 2.5 && st == "play") return done();
  const [a, b] = P, dd = Math.hypot(a.x - b.x, a.z - b.z);
  if (dd > 20) {
    const k = Math.min(1, (dd - 20) * 0.3 * dt);
    [[a, b], [b, a]].forEach(([u, v]) => {
      u.x += (v.x - u.x) * k;
      u.z += (v.z - u.z) * k;
    });
  }
  const cx = (a.x + b.x) / 2, cz = (a.z + b.z) / 2, hh = Math.min(36, 15 + dd * 0.9);
  cam.position.lerp(new THREE.Vector3(cx, hh * 0.75, cz + hh * 0.75), Math.min(1, 3 * dt));
  cl.lerp(new THREE.Vector3(cx, 0, cz), Math.min(1, 4 * dt));
  cam.lookAt(cl);
  idl -= dt;
  if (idl < 0) {
    idl = R(5, 9);
    const i = Math.random() < 0.5 ? 0 : 1;
    say(i, pk(IDLE[i]));
  }
  hud();
}
function done() {
  if (mode != "guest") SFX.win();
  if (mode == "host") send({ t: "done" });
  if (CLD) return showDlg([[2, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0439\u0434\u0435\u043D! \u041E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430."]], () => location.reload(), 0, "\u041F\u043E\u0431\u0435\u0434\u0430");
  if (li < L.length - 1) showDlg(L[li + 1].d, () => load(li + 1), li + 1);
  else showDlg(FIN, () => {
    st = "win";
    $("win").style.display = "flex";
  }, L.length - 1, "\u0424\u0438\u043D\u0430\u043B");
}
function sync() {
  P.forEach((p) => {
    const mv = Math.hypot(p.vx, p.vz);
    let sx = 1, sy = 1, rot = 0;
    if (p.stun > 0) {
      p.rot += 0.3;
      rot = p.rot;
      sx = 1 + 0.25 * Math.sin(t * 20);
      sy = 1 - 0.25 * Math.sin(t * 20);
    } else {
      p.rot = 0;
      if (p.hit > 0) {
        sx = 1.45;
        sy = 0.7;
      } else if (mv > 0.5) {
        sy = 1 + 0.12 * Math.sin(t * 16);
        sx = 1 - 0.08 * Math.sin(t * 16);
        rot = 0.08 * Math.sin(t * 8);
      } else sy = 1 + 0.04 * Math.sin(t * 3);
    }
    const jump = p.stun > 0 ? Math.abs(Math.sin(t * 9)) * 0.9 : 0;
    p.sp.material.rotation = rot;
    p.sp.material.color.set(p.stun > 0 ? 16751258 : 16777215);
    p.sp.material.opacity = p.inv > 0 ? 0.5 + 0.5 * Math.sin(t * 30) : 1;
    p.sp.scale.set(2.4 * sx * (p.fx < 0 ? -1 : 1), 2.4 * sy, 1);
    p.sp.position.set(p.x, 1.2 * sy + jump + (rid(p) ? 1.1 : 0), p.z);
    p.sh.position.x = p.x;
    p.sh.position.z = p.z;
    const el = $("b" + p.id);
    p.say -= 1 / 60;
    if (p.say > 0) {
      const v = new THREE.Vector3(p.x, 3.6, p.z).project(cam);
      el.style.display = "block";
      el.style.left = (v.x + 1) / 2 * innerWidth + "px";
      el.style.top = (1 - v.y) / 2 * innerHeight + "px";
    } else el.style.display = "none";
  });
  E.forEach((e) => {
    e.m.position.set(e.x, 0.8 + Math.abs(Math.sin(t * 6 + e.x)) * 0.12 + (e.stun > 0 ? 0.5 : 0), e.z);
    e.m.rotation.y = Math.atan2(e.vx, e.vz);
    e.m.rotation.z = e.stun > 0 ? Math.sin(t * 22) * 0.35 : 0;
  });
  I.forEach((it) => {
    it.m.position.set(it.x, it.h / 2 + it.y, it.z);
    if (it.thr > 0) it.m.rotation.y += 0.4;
  });
}
let last = 0;
function loop(n) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (n - last) / 1e3 || 0);
  last = n;
  if (st == "play") {
    upd(dt);
    net_(dt);
  }
  if (st == "dlg") {
    cin(dt);
    if (tw) {
      tw.t += dt;
      $("dt").textContent = tw.s.slice(0, tw.t * 45 | 0);
    }
  }
  cv.style.display = st == "dlg" ? "block" : "none";
  if (P.length) sync();
  ren.render(scene, cam);
}
function pause(o) {
  if (o && st != "play" || !o && st != "pause") return;
  st = o ? "pause" : "play";
  $("pause").style.display = o ? "flex" : "none";
}
function onKey(c) {
  if (st == "dlg" && (c == "Space" || c == "Enter")) return nextDlg();
  if (c == "Escape" || c == "KeyP") {
    if (mode != "guest") pause(st == "play");
    return;
  }
  if (c == "KeyR" && st == "play" && mode != "guest") {
    send({ t: "rs" });
    return load(li);
  }
  if (st != "play") return;
  if (mode == "local") KM.forEach((m, i) => {
    if (c == m.a) attack(P[i]);
    if (c == m.i) interact(P[i]);
  });
  else {
    const k = c == KM[0].a || c == KM[1].a ? "a" : c == KM[0].i || c == KM[1].i ? "i" : 0;
    if (k) {
      if (mode == "guest") send({ t: "ev", k });
      else (k == "a" ? attack : interact)(P[0]);
    }
  }
}
addEventListener("keydown", (e) => {
  K[e.code] = 1;
  if (e.code.startsWith("Arrow") || e.code == "Space") e.preventDefault();
  if (!e.repeat) onKey(e.code);
});
addEventListener("keyup", (e) => K[e.code] = 0);
$("dlg").onclick = nextDlg;
$("vol").oninput = (e) => vol = e.target.value / 100;
$("rp").onclick = () => pause(false);
$("rs").onclick = () => {
  $("pause").style.display = "none";
  send({ t: "rs" });
  load(li);
};
const nst = (s) => $("ns").textContent = s, inp = (i, a) => mode == "local" ? K[KM[i][a]] : i == me ? K[KM[0][a]] || K[KM[1][a]] : RK[a], r2 = (v) => Math.round(v * 100) / 100;
function send(m) {
  if (ws && ws.readyState == 1) ws.send(JSON.stringify(m));
}
function startGame() {
  TX = TX || [tex(1), tex(0)];
  $("menu").style.display = $("ed").style.display = $("lst").style.display = "none";
  if (CLD) {
    L = [mkCL(CLD)];
    showDlg([[2, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0438\u0433\u0440\u043E\u043A\u0430: " + (CLD.n || "\u041C\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C") + ". \u0423\u0434\u0430\u0447\u0438!"]], () => load(0), 0, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0438\u0433\u0440\u043E\u043A\u0430");
  } else {
    L = L0;
    showDlg(L[0].d, () => load(0), 0);
  }
}
function lost(m) {
  mode = "local";
  nst(m);
  if (st != "win") {
    st = "menu";
    $("menu").style.display = "flex";
    $("dlg").style.display = "none";
  }
}
function conn(f) {
  let ok = 0;
  try {
    ws = new WebSocket((location.protocol == "https:" ? "wss://" : "ws://") + location.host);
  } catch (e) {
    return lost("\u041E\u043D\u043B\u0430\u0439\u043D \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0438\u0433\u0440\u0443 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440 (\u0441\u043C. README).");
  }
  ws.onopen = () => {
    ok = 1;
    send(f);
  };
  ws.onerror = ws.onclose = () => lost(ok ? "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E." : "\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C. \u041E\u043D\u043B\u0430\u0439\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0447\u0435\u0440\u0435\u0437 server.js (\u0441\u043C. README).");
  ws.onmessage = (e) => onMsg(JSON.parse(e.data));
}
function onMsg(m) {
  const k = m.t;
  if (k == "code") nst("\u041A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B: " + m.c + " \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u0434\u0440\u0443\u0433\u0443 \u0438 \u0436\u0434\u0438\u0442\u0435\u2026");
  else if (k == "err") lost(m.m);
  else if (k == "ready") {
    if (mode == "host") {
      send({ t: "start", cl: CLD });
      startGame();
    } else nst("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E! \u0416\u0434\u0451\u043C \u0441\u0442\u0430\u0440\u0442\u2026");
  } else if (k == "start") {
    CLD = m.cl || null;
    startGame();
  } else if (k == "in") RK = m.k;
  else if (k == "ev") {
    if (st == "play") (m.k == "a" ? attack : interact)(P[1]);
  } else if (k == "s") app(m);
  else if (k == "say") say(m.i, m.s);
  else if (k == "fx") {
    SFX[m.k] && SFX[m.k]();
  } else if (k == "done") done();
  else if (k == "rs") load(li);
  else if (k == "bye") lost("\u041D\u0430\u043F\u0430\u0440\u043D\u0438\u043A \u0432\u044B\u0448\u0435\u043B \u0438\u0437 \u0438\u0433\u0440\u044B.");
}
function ap(b, x, z) {
  b.tx = x;
  b.tz = z;
  if (b.fr == null) {
    b.fr = 1;
    b.x = x;
    b.z = z;
  }
}
function app(s) {
  if (st != "play" || s.l != li) return;
  open = s.o;
  s.p.forEach((a, i) => {
    const p = P[i];
    ap(p, a[0], a[1]);
    p.fx = a[2];
    p.stun = a[3];
    p.hit = a[4];
    p.vx = a[5];
    p.vz = a[6];
  });
  s.e.forEach((a, i) => {
    const e = E[i];
    ap(e, a[0], a[1]);
    e.vx = a[2];
    e.vz = a[3];
    e.stun = a[4];
  });
  s.i.forEach((a, i) => {
    const it = I[i];
    ap(it, a[0], a[1]);
    it.y = a[2];
    it.thr = a[3];
    it.holder = a[4] ? P[a[4] - 1] : null;
  });
  sqp = s.x[0];
  lt = s.x[1];
  s.q.forEach((v, i) => {
    pl[i].on = v;
    pl[i].m.material.color.set(pc(i, v));
  });
}
function net_(dt) {
  if (mode == "local") return;
  if (mode == "guest") [...P, ...E, ...I].forEach((b) => {
    if (b.tx != null) {
      const k = Math.min(1, 14 * dt);
      b.x += (b.tx - b.x) * k;
      b.z += (b.tz - b.z) * k;
    }
  });
  sn -= dt;
  if (sn > 0) return;
  if (mode == "host") {
    sn = 0.05;
    send({ t: "s", l: li, o: open, p: P.map((p) => [p.x, p.z, p.fx, p.stun > 0 ? 1 : 0, p.hit > 0 ? 1 : 0, p.vx, p.vz].map(r2)), e: E.map((e) => [e.x, e.z, e.vx, e.vz, e.stun > 0 ? 1 : 0].map(r2)), i: I.map((i) => [i.x, i.z, i.y, i.thr > 0 ? 1 : 0, i.holder ? i.holder.id + 1 : 0].map(r2)), q: pl.map((p) => p.on ? 1 : 0), x: [sqp, r2(lt)] });
  } else {
    sn = 0.033;
    const k = {};
    "udlr".split("").forEach((a) => k[a] = K[KM[0][a]] || K[KM[1][a]] ? 1 : 0);
    send({ t: "in", k });
  }
}
function hud() {
  if (rem.holder) got = true;
  const c = (b, x) => '<div class="tq'.concat(b ? " ok" : "", '">').concat(x, "</div>"), n = pl.filter((p) => p.on).length;
  $("hud").innerHTML = '<div class="hh">\u0423\u0440\u043E\u0432\u0435\u043D\u044C '.concat(li + 1, " \u0438\u0437 ").concat(L.length, "<b>").concat(lv.n, "</b></div>") + c(open, lv.pz ? "\u041D\u0430\u0441\u0442\u0443\u043F\u0438\u0442\u0435 \u043D\u0430 \u043F\u043B\u0438\u0442\u044B \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443 1, 2, 3 (".concat(sqp, "/").concat(pl.length, ")") : "\u0412\u0441\u0442\u0430\u043D\u044C\u0442\u0435 \u0432\u0434\u0432\u043E\u0451\u043C \u043D\u0430 \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u043F\u043B\u0438\u0442\u044B (".concat(n, "/2)")) + c(got, "\u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0447\u0451\u0440\u043D\u044B\u0439 \u043F\u0443\u043B\u044C\u0442 (E / L)") + c(rem.x > lv.w - 2.5, "\u041E\u0442\u043D\u0435\u0441\u0438\u0442\u0435 \u043F\u0443\u043B\u044C\u0442 \u0432 \u0437\u0435\u043B\u0451\u043D\u0443\u044E \u0437\u043E\u043D\u0443 \u0441\u043F\u0440\u0430\u0432\u0430") + '<div class="hf">'.concat(lv.hint ? lv.hint + "<br>" : "").concat(gust ? "<b>\u041F\u0435\u0441\u0447\u0430\u043D\u0430\u044F \u0431\u0443\u0440\u044F!</b><br>" : "").concat(mode != "local" ? "\u0412\u044B \u0438\u0433\u0440\u0430\u0435\u0442\u0435 \u0437\u0430 " + (me ? "\u041C\u0430\u0439\u043A\u0430" : "\u0414\u0436\u0438\u043C\u0430") + ". " : "", "\u0423\u0434\u0430\u0440: F / K. \u0415\u0441\u043B\u0438 \u0432\u0430\u0441 \u043E\u0433\u043B\u0443\u0448\u0438\u043B\u0438, \u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435\u0441\u044C \u2014 \u0442\u0430\u043A \u043E\u0447\u043D\u0451\u0442\u0435\u0441\u044C \u0431\u044B\u0441\u0442\u0440\u0435\u0435.</div>");
}
$("go").onclick = () => {
  mode = "local";
  startGame();
};
$("mk").onclick = () => {
  mode = "host";
  me = 0;
  nst("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C\u2026");
  conn({ t: "create" });
};
$("jn").onclick = () => {
  const c = $("code").value.trim().toUpperCase();
  if (!c) return nst("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B");
  mode = "guest";
  me = 1;
  nst("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C\u2026");
  conn({ t: "join", c });
};
let CLD = null;
const SZ = [[18, 8], [26, 10], [34, 12]], TL = [["pl", "\u041F\u043B\u0438\u0442\u0430"], ["rm", "\u041F\u0443\u043B\u044C\u0442"], ["cr", "\u042F\u0449\u0438\u043A"], ["hv", "\u0411\u043B\u043E\u043A"], ["en", "\u0412\u0440\u0430\u0433"], ["ts", "\u0422\u0435\u0441\u043B\u0430"], ["er", "\u041B\u0430\u0441\u0442\u0438\u043A"]];
const DD = () => ({ n: "", w: 26, h: 10, th: 0, es: 3.6, ice: 0, mars: 0, pz: 0, lz: 0, pl: [], rm: null, it: [], en: [], ts: null });
let D = DD(), tool = "pl";
try {
  D = __spreadValues(__spreadValues({}, DD()), JSON.parse(localStorage.getItem("jm_draft") || "{}"));
} catch (e) {
}
function mkCL(d) {
  const b = L0[d.th] || L0[0], hs = [];
  if (d.ice) hs.push("\u041B\u0451\u0434: \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438 \u0441\u043A\u043E\u043B\u044C\u0437\u044F\u0442.");
  if (d.mars) hs.push("\u041D\u0438\u0437\u043A\u0430\u044F \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F \u0438 \u043F\u0435\u0441\u0447\u0430\u043D\u044B\u0435 \u0431\u0443\u0440\u0438.");
  if (d.pz) hs.push("\u041D\u0430\u0441\u0442\u0443\u043F\u0430\u0439\u0442\u0435 \u043D\u0430 \u043F\u043B\u0438\u0442\u044B \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0430\u043C.");
  if (d.lz) hs.push("\u041B\u0430\u0437\u0435\u0440\u044B \u043E\u0433\u043B\u0443\u0448\u0430\u044E\u0442.");
  if (d.ts) hs.push("\u0422\u0435\u0441\u043B\u0430: E \u2014 \u0441\u0435\u0441\u0442\u044C.");
  return __spreadProps(__spreadValues({}, b), { n: d.n || "\u041C\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C", w: d.w, h: d.h, N: d.en.length, es: d.es, d: [], cu: d, tesla: !!d.ts, ice: d.ice ? 1 : 0, wd: d.mars ? 1 : 0, lg: d.mars ? 1 : 0, pz: d.pz ? 1 : 0, lz: d.lz | 0, hint: hs.join(" ") });
}
const eok = (a) => a[0] <= D.w - 5.5 && a[0] >= -D.w + 3.5 && Math.abs(a[1]) <= D.h - 1.5, ens = (m) => $("ens").textContent = m;
function chk(d) {
  if (!d.rm) return "\u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u043B\u044C\u0442.";
  const n = d.pz ? 3 : 2;
  if (d.pl.length != n) return "\u041D\u0443\u0436\u043D\u043E \u043F\u043B\u0438\u0442: " + n + " (\u0441\u0435\u0439\u0447\u0430\u0441 " + d.pl.length + ").";
  return "";
}
function esv() {
  try {
    localStorage.setItem("jm_draft", JSON.stringify(D));
  } catch (e) {
  }
}
function edr() {
  const c = $("ec"), W = Math.min(innerWidth - 16, 720), w = D.w, h = D.h, k = W / (2 * w), g = c.getContext("2d"), T = L0[D.th] || L0[0];
  c.width = W;
  c.height = 2 * h * k;
  const X = (x) => (x + w) * k, Z = (z) => (z + h) * k, sq = (x, z, a, b, col) => {
    g.fillStyle = col;
    g.fillRect(X(x - a / 2), Z(z - b / 2), a * k, b * k);
    g.strokeStyle = "#000";
    g.lineWidth = 2;
    g.strokeRect(X(x - a / 2), Z(z - b / 2), a * k, b * k);
  };
  g.fillStyle = hx(T.c);
  g.fillRect(0, 0, c.width, c.height);
  g.strokeStyle = "#0002";
  g.lineWidth = 1;
  for (let x = -w; x <= w; x += 2) {
    g.beginPath();
    g.moveTo(X(x), 0);
    g.lineTo(X(x), c.height);
    g.stroke();
  }
  for (let z = -h; z <= h; z += 2) {
    g.beginPath();
    g.moveTo(0, Z(z));
    g.lineTo(c.width, Z(z));
    g.stroke();
  }
  g.fillStyle = "#0004";
  g.fillRect(0, 0, X(-w + 3.5), c.height);
  g.fillStyle = "#39ff8855";
  g.fillRect(X(w - 2.5), 0, c.width, c.height);
  g.fillStyle = "#ffd23f";
  g.fillRect(X(w - 4) - 2, 0, 4, c.height);
  g.fillStyle = "#fff";
  [-1.5, 1.5].forEach((z) => {
    g.beginPath();
    g.arc(X(-w + 2), Z(z), k * 0.8, 0, 7);
    g.fill();
  });
  D.pl.forEach((a, i) => {
    g.fillStyle = D.pz ? "#4aa8ff" : "#ff3b3b";
    g.beginPath();
    g.arc(X(a[0]), Z(a[1]), k * 1.4, 0, 7);
    g.fill();
    g.stroke();
    if (D.pz) {
      g.fillStyle = "#fff";
      g.font = "bold " + k * 1.6 + "px sans-serif";
      g.textAlign = "center";
      g.fillText(i + 1, X(a[0]), Z(a[1]) + k * 0.6);
    }
  });
  D.it.forEach((a) => a[2] ? sq(a[0], a[1], 1.8, 1.8, hx(T.hv)) : sq(a[0], a[1], 1.1, 1.1, hx(T.k)));
  D.en.forEach((a) => {
    sq(a[0], a[1], 2.2, 1.6, hx(T.ec));
    g.fillStyle = "#fff";
    g.fillRect(X(a[0]) - k * 0.6, Z(a[1]) - k * 0.3, k * 0.4, k * 0.4);
    g.fillRect(X(a[0]) + k * 0.2, Z(a[1]) - k * 0.3, k * 0.4, k * 0.4);
  });
  if (D.ts) sq(D.ts[0], D.ts[1], 2.6, 1.6, "#e31937");
  if (D.rm) {
    sq(D.rm[0], D.rm[1], 1.5, 0.7, "#222");
    g.fillStyle = "#f22";
    g.fillRect(X(D.rm[0]) - 3, Z(D.rm[1]) - 3, 6, 6);
  }
}
function eui() {
  $("en_").value = D.n;
  $("es_").selectedIndex = Math.max(0, SZ.findIndex((a) => a[0] == D.w));
  $("et_").selectedIndex = D.th;
  $("ed_").value = String(D.es);
  $("ei").checked = !!D.ice;
  $("em").checked = !!D.mars;
  $("ep").checked = !!D.pz;
  $("el").value = String(D.lz);
  $("etl").innerHTML = "";
  TL.forEach((t2) => {
    const b = document.createElement("button");
    b.textContent = t2[1];
    b.style.outline = tool == t2[0] ? "4px solid #ffd23f" : "none";
    b.onclick = () => {
      tool = t2[0];
      eui();
    };
    $("etl").appendChild(b);
  });
  edr();
}
function openEd() {
  $("menu").style.display = $("lst").style.display = "none";
  $("ed").style.display = "flex";
  if (!$("et_").options.length) L0.forEach((l, i) => $("et_").add(new Option(l.n, i)));
  eui();
  ens("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0438 \u043D\u0430\u0436\u0438\u043C\u0430\u0439\u0442\u0435 \u043D\u0430 \u043F\u043E\u043B\u0435. \u041B\u0435\u0432\u0430\u044F \u0442\u0451\u043C\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u2014 \u0441\u0442\u0430\u0440\u0442 \u0438\u0433\u0440\u043E\u043A\u043E\u0432, \u0441\u043F\u0440\u0430\u0432\u0430 \u0437\u0430 \u0436\u0451\u043B\u0442\u043E\u0439 \u043B\u0438\u043D\u0438\u0435\u0439 \u2014 \u0432\u044B\u0445\u043E\u0434.");
}
function stg() {
  D.n = $("en_").value;
  const z = SZ[$("es_").selectedIndex];
  D.w = z[0];
  D.h = z[1];
  D.th = $("et_").selectedIndex;
  D.es = +$("ed_").value;
  D.ice = +$("ei").checked;
  D.mars = +$("em").checked;
  D.pz = +$("ep").checked;
  D.lz = +$("el").value;
  D.pl = D.pl.filter(eok);
  if (!D.pz) D.pl = D.pl.slice(0, 2);
  D.it = D.it.filter(eok);
  D.en = D.en.filter(eok);
  if (D.rm && !eok(D.rm)) D.rm = null;
  if (D.ts && !eok(D.ts)) D.ts = null;
  esv();
  eui();
}
["en_", "es_", "et_", "ed_", "ei", "em", "ep", "el"].forEach((i) => $(i).onchange = stg);
$("ec").onpointerdown = (e) => {
  const r = $("ec").getBoundingClientRect(), x = Math.round((e.clientX - r.left) / r.width * 2 * D.w - D.w), z = Math.round((e.clientY - r.top) / r.height * 2 * D.h - D.h), a = [x, z];
  if (tool == "er") {
    const L2 = [D.pl, D.it, D.en], f = (arr) => {
      let bi = -1, bd = 1.8;
      arr.forEach((q2, i) => {
        const d = Math.hypot(q2[0] - x, q2[1] - z);
        if (d < bd) {
          bd = d;
          bi = i;
        }
      });
      return [bi, bd];
    };
    let best = null;
    L2.forEach((arr) => {
      const [i, d] = f(arr);
      if (i >= 0 && (!best || d < best.d)) best = { arr, i, d };
    });
    const o = [D.rm, D.ts];
    if (D.rm && Math.hypot(D.rm[0] - x, D.rm[1] - z) < 1.8 && (!best || 1.8 < best.d + 0)) D.rm = null;
    else if (D.ts && Math.hypot(D.ts[0] - x, D.ts[1] - z) < 1.8) D.ts = null;
    else if (best) best.arr.splice(best.i, 1);
    esv();
    return edr();
  }
  if (!eok(a)) return ens("\u0421\u044E\u0434\u0430 \u043D\u0435\u043B\u044C\u0437\u044F: \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043B\u0438\u0437\u043A\u043E \u043A \u0441\u0442\u0435\u043D\u0435, \u0441\u0442\u0430\u0440\u0442\u0443 \u0438\u043B\u0438 \u0432\u044B\u0445\u043E\u0434\u0443.");
  if (tool == "pl") {
    if (D.pl.length >= (D.pz ? 3 : 2)) return ens("\u041F\u043B\u0438\u0442 \u0443\u0436\u0435 " + D.pl.length + ". \u041B\u0438\u0448\u043D\u044E\u044E \u043C\u043E\u0436\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u043B\u0430\u0441\u0442\u0438\u043A\u043E\u043C.");
    D.pl.push(a);
  } else if (tool == "rm") D.rm = a;
  else if (tool == "ts") D.ts = a;
  else if (tool == "cr" || tool == "hv") {
    if (D.it.length >= 40) return ens("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432.");
    D.it.push([x, z, tool == "hv" ? 1 : 0]);
  } else if (tool == "en") {
    if (D.en.length >= 20) return ens("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0432\u0440\u0430\u0433\u043E\u0432.");
    D.en.push(a);
  }
  ens("");
  esv();
  edr();
};
const cld = () => JSON.parse(JSON.stringify(D)), enc = (d) => btoa(unescape(encodeURIComponent(JSON.stringify(d))));
function goOnline(d) {
  CLD = d;
  $("ed").style.display = $("lst").style.display = "none";
  $("menu").style.display = "flex";
  mode = "host";
  me = 0;
  nst("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C\u2026");
  conn({ t: "create" });
}
$("eb").onclick = openEd;
$("e7").onclick = () => {
  $("ed").style.display = "none";
  $("menu").style.display = "flex";
};
$("e1").onclick = () => {
  const m = chk(D);
  if (m) return ens(m);
  CLD = cld();
  mode = "local";
  startGame();
};
$("e2").onclick = () => {
  const m = chk(D);
  if (m) return ens(m);
  goOnline(cld());
};
$("e3").onclick = async () => {
  const m = chk(D);
  if (m) return ens(m);
  if (!D.n) return ens("\u0414\u0430\u0439\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u044E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435.");
  try {
    const r = await fetch("/api/levels", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(D) });
    ens(r.ok ? "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u044B\u043B\u043E\u0436\u0435\u043D! \u0415\u0433\u043E \u0443\u0432\u0438\u0434\u044F\u0442 \u0432\u0441\u0435 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \xAB\u041E\u0431\u0449\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u0438\xBB." : "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043B\u043E\u0436\u0438\u0442\u044C: " + await r.text());
  } catch (e) {
    ens("\u0412\u044B\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440.");
  }
};
$("e4").onclick = () => {
  const c = enc(D);
  try {
    navigator.clipboard.writeText(c).then(() => ens("\u041A\u043E\u0434 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D. \u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u0434\u0440\u0443\u0433\u0443."), () => prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u043A\u043E\u0434:", c));
  } catch (e) {
    prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u043A\u043E\u0434:", c);
  }
};
$("e5").onclick = () => {
  const c = prompt("\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u0434 \u0443\u0440\u043E\u0432\u043D\u044F");
  if (!c) return;
  try {
    const d = __spreadValues(__spreadValues({}, DD()), JSON.parse(decodeURIComponent(escape(atob(c.trim())))));
    if (!SZ.some((z) => z[0] == d.w && z[1] == d.h) || !Array.isArray(d.pl) || !Array.isArray(d.it) || !Array.isArray(d.en)) throw 0;
    D = d;
    stg();
    ens("\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D.");
  } catch (e) {
    ens("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434.");
  }
};
$("e6").onclick = () => {
  D = DD();
  esv();
  eui();
  ens("");
};
$("sb").onclick = async () => {
  $("menu").style.display = "none";
  $("lst").style.display = "flex";
  const ll = $("ll");
  ll.textContent = "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026";
  try {
    const a = await (await fetch("/api/levels")).json();
    ll.textContent = a.length ? "" : "\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E. \u0421\u0442\u0430\u043D\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0441\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435.";
    a.forEach((v) => {
      const r = document.createElement("div");
      r.className = "row";
      const t2 = document.createElement("span");
      t2.textContent = v.d.n + " (" + v.d.en.length + " \u0432\u0440\u0430\u0433\u043E\u0432)";
      r.appendChild(t2);
      [["\u0418\u0433\u0440\u0430\u0442\u044C", () => {
        CLD = v.d;
        mode = "local";
        startGame();
      }], ["\u041E\u043D\u043B\u0430\u0439\u043D", () => goOnline(v.d)], ["\u041F\u0440\u0430\u0432\u0438\u0442\u044C", () => {
        D = __spreadValues(__spreadValues({}, DD()), v.d);
        esv();
        $("lst").style.display = "none";
        openEd();
      }]].forEach(([n, f]) => {
        const b = document.createElement("button");
        b.textContent = n;
        b.onclick = f;
        r.appendChild(b);
      });
      ll.appendChild(r);
    });
  } catch (e) {
    ll.textContent = "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440.";
  }
};
$("lb").onclick = () => {
  $("lst").style.display = "none";
  $("menu").style.display = "flex";
};
requestAnimationFrame(loop);
