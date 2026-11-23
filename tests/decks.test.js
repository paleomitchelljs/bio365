/* Content checks for every deck, no browser needed:  node tests/decks.test.js
 *
 * Loads each deck's content.js the way the page does, then checks that every picture
 * it names is in img/ and sized in dims.js, that every clade a tree lights, ticks or
 * minis names is in that tree, that path slides find both ends in the course tree,
 * that ids are unique, and prints the minutes at each level. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const DECKS = ['caudata', 'reptiles', 'squamata', 'aves', 'mammalia'];
let checks = 0, fails = 0;
const check = (name, ok, detail) => { checks++; if (!ok) { fails++; console.log(`FAIL  ${name}${detail ? '  ' + detail : ''}`); } };

function load(deck) {
  const window = { Deck: { parts: {}, fmt: (s) => s } };
  const ctx = vm.createContext({ window, console, document: undefined });
  const run = (f) => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  ['shared/js/coursetree.js', 'shared/js/parts/tree.js', 'shared/js/kit.js', `${deck}/js/dims.js`, `${deck}/js/content.js`].forEach(run);
  return window;
}

for (const deck of DECKS) {
  if (!fs.existsSync(path.join(ROOT, deck, 'js', 'content.js'))) { check(`${deck}: content.js exists`, false); continue; }
  let w;
  try { w = load(deck); } catch (e) { check(`${deck}: loads`, false, e.stack); continue; }
  const T = w.Deck.tree, segs = w.DECK.segments;
  const ids = new Set();
  const mins = { 1: 0, 2: 0, 3: 0 };
  for (const s of segs) {
    check(`${deck}/${s.id}: unique id`, !ids.has(s.id)); ids.add(s.id);
    for (const l of [1, 2, 3]) if ((s.tier || 1) <= l) mins[l] += s.min || 1;
    const text = JSON.stringify(s);
    for (const m of text.matchAll(/"(?:src|pic)":"img\/([^"]+)"/g)) {
      check(`${deck}/${s.id}: img/${m[1]} exists`, fs.existsSync(path.join(ROOT, deck, 'img', m[1])));
      check(`${deck}/${s.id}: img/${m[1]} sized`, !!w.DIMS[m[1]]);
    }
    for (const it of s.items) {
      try {
        if (it.kind === 'tree' || it.kind === 'path') {
          const root = it.kind === 'path' ? T.path(it) : T.get(it.src);
          const all = T.layout(root).all;
          const has = (name) => all.some((n) => T.matches(n, name));
          (it.steps || []).forEach((st) => (st.hi || []).forEach((h) => check(`${deck}/${s.id}: lights ${h}`, has(h))));
          (it.marks || []).forEach((m) => check(`${deck}/${s.id}: mark on ${m.on}`, has(m.on)));
          check(`${deck}/${s.id}: tree has tips`, T.layout(root).tips.length >= 2);
        }
        if (it.kind === 'plate' && it.mini) {
          const all = T.layout(T.get(it.mini.src)).all;
          check(`${deck}/${s.id}: mini lights ${it.mini.hi}`, all.some((n) => T.matches(n, it.mini.hi)));
        }
        if (it.kind === 'clues') check(`${deck}/${s.id}: clue rows`, it.rows.every((r) => r.c.length && r.a));
        if (it.kind === 'grid') check(`${deck}/${s.id}: grid rows match head`, it.rows.every((r) => r.length === it.head.length));
      } catch (e) { check(`${deck}/${s.id}: ${it.kind}`, false, e.message); }
    }
    check(`${deck}/${s.id}: has builds`, s.builds.length >= 1);
  }
  const imgs = fs.readdirSync(path.join(ROOT, deck, 'img')).filter((f) => !f.startsWith('.'));
  const named = new Set([...JSON.stringify(segs).matchAll(/img\/([^"]+)/g)].map((m) => m[1]));
  const stray = imgs.filter((f) => !named.has(f));
  check(`${deck}: no unused pictures`, stray.length === 0, stray.join(', ') + ' (python3 tools/assets.py --prune)');
  console.log(`${deck}: ${segs.length} slides; minutes at levels 1/2/3: ${[1, 2, 3].map((l) => Math.round(mins[l])).join(' / ')}`);
}
console.log(`${checks - fails}/${checks} checks passed`);
process.exit(fails ? 1 : 0);
