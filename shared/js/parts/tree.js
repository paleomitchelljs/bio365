/* Trees, drawn from text in the phylo course-tree format (see shared/js/coursetree.js).
 *
 *   path   "Where we are": the course tree cut down to the line from def.root to def.to.
 *          Every branch off that line is folded into one tip, named for its crown
 *          (fossil-only branches are dropped unless def.fossils). def.steps[b].hi lights
 *          clades on the line, one step per build.
 *   tree   A group's own tree, def.src in the same text format (or "course:Name" for a
 *          subtree of the course tree). def.steps[b].hi lights clades; def.marks put a
 *          tick and a short term on a clade's stem from build m.at.
 *   mini   D.tree.mini(host, def): a small tree with no words, one clade lit. Plates use
 *          it in the header (def.mini) to say where the animal on the slide sits.
 *
 * Text style in labels: _Genus_ italic. Names match case-insensitively, on name or alias.
 */
(function () {
  'use strict';
  const D = window.Deck;
  const T = D.tree = {};
  const NS = 'http://www.w3.org/2000/svg';
  const norm = (s) => String(s || '').replace(/[_*†]/g, '').trim().toLowerCase();

  /* ---------- parse ---------- */
  T.parse = function (src) {
    const top = { name: '', alias: [], kids: [] };
    const stack = [top];
    String(src).split('\n').forEach((raw) => {
      if (!raw.trim()) return;
      const ind = Math.floor(raw.match(/^ */)[0].length / 2);
      let line = raw.trim();
      while (stack.length > ind + 1) stack.pop();
      const parent = stack[stack.length - 1];
      if (line.startsWith('- ')) { parent.ex = line.slice(2).split(',').map((s) => s.trim()); return; }
      const poly = line.startsWith('~');
      if (poly) line = line.slice(1);
      const f = line.split('|').map((s) => s.trim());
      const extinct = /†$/.test(f[0]);
      const name = f[0].replace(/\s*†$/, '');
      const node = { name: name === '.' ? '' : name, sub: f[1] || '', alias: f[2] ? f[2].split(',').map((s) => s.trim()).filter(Boolean) : [], extinct, poly, kids: [], parent };
      parent.kids.push(node);
      stack.push(node);
    });
    const root = top.kids.length === 1 ? top.kids[0] : top;
    root.parent = null;
    return root;
  };
  let course = null;
  T.course = () => course || (course = T.parse(window.COURSE_TREE || ''));
  T.label = (n) => n.name || (n.alias && n.alias[0]) || '';
  T.matches = (n, name) => { const k = norm(name); return !!k && (norm(n.name) === k || (n.alias || []).some((a) => norm(a) === k)); };
  T.find = function (n, name) {
    if (T.matches(n, name)) return n;
    for (const c of n.kids) { const f = T.find(c, name); if (f) return f; }
    return null;
  };
  const fossilOnly = (n) => n.extinct || (n.kids.length > 0 && n.kids.every(fossilOnly));
  /* A copy with fossil-only branches dropped and single-child nodes folded (the inner keeps its name, or takes the outer's). */
  function living(n) {
    if (n.extinct) return null;
    const kids = n.kids.map(living).filter(Boolean);
    if (n.kids.length && !kids.length) return null;
    if (kids.length === 1) { const k = kids[0]; return T.label(k) ? k : Object.assign({}, k, { name: T.label(n), alias: [], src: n }); }
    return Object.assign({}, n, { kids, src: n.src || n });
  }
  /* The name a folded branch goes by: its own, or (if it has none) its parts joined. */
  function crownName(n) {
    const lv = living(n) || n;
    return T.label(lv) || lv.kids.map(crownName).join(' + ');
  }

  /* src: a string, "course:Name", or a parsed node. */
  T.get = function (src) {
    if (src && typeof src === 'object') return src;
    const m = /^course:(.+)$/.exec(src || '');
    if (m) { const n = T.find(T.course(), m[1]); if (!n) throw new Error('No ' + m[1] + ' in the course tree'); return n; }
    return T.parse(src);
  };

  /* ---------- the line from one clade to another ---------- */
  T.path = function (def) {
    const full = T.get(def.src || 'course:Chordata');
    const r = T.find(full, def.root), t = T.find(full, def.to);
    if (!r || !t) throw new Error('path: no ' + (r ? def.to : def.root));
    const line = [];
    for (let n = t; n; n = n.parent) { line.unshift(n); if (n === r) break; }
    if (line[0] !== r) throw new Error('path: ' + def.to + ' is not inside ' + def.root);
    const keep = (def.keep || []).map(norm);
    function build(n, i) {
      if (i === line.length - 1) return { name: T.label(t), alias: t.alias, kids: [], target: true, src: t };
      const kids = [];
      for (const c of n.kids) {
        if (c === line[i + 1]) kids.push(build(c, i + 1));
        else if (def.fossils || !fossilOnly(c)) kids.push({ name: def.fossils ? (T.label(c) || crownName(c)) : crownName(c), alias: [], kids: [], extinct: c.extinct, off: true, src: c });
      }
      kids.sort((a, b) => (a.off ? 0 : 1) - (b.off ? 0 : 1));
      if (kids.length === 1 && !keep.includes(norm(T.label(n)))) {
        const k = kids[0];
        if (!T.label(k) && T.label(n)) { k.name = T.label(n); k.alias = n.alias; }
        return k;
      }
      return { name: T.label(n), alias: n.alias, kids, src: n };
    }
    return build(r, 0);
  };

  /* ---------- layout: tips aligned on the right, one row each ---------- */
  T.layout = function (root) {
    const tips = [], all = [];
    (function walk(n, p) {
      n.up = p; all.push(n);
      if (!n.kids.length) { n.row = tips.length; tips.push(n); n.h = 0; return; }
      n.kids.forEach((k) => walk(k, n));
      n.h = 1 + Math.max(...n.kids.map((k) => k.h));
      n.row = (n.kids[0].row + n.kids[n.kids.length - 1].row) / 2;
    })(root, null);
    return { tips, all, H: root.h };
  };
  const inClade = (n, c) => { for (let x = n; x; x = x.up) if (x === c) return true; return false; };
  const textW = (s, px) => String(s).replace(/_/g, '').length * px * 0.52;

  function svgEl(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  /* Text with _italic_ runs, into a new text element or (runs) an existing one. */
  function runs(t, str) {
    String(str).split(/(_[^_]+_)/).forEach((part) => {
      if (!part) return;
      const it = /^_.*_$/.test(part);
      svgEl('tspan', it ? { 'font-style': 'italic' } : {}, t).textContent = it ? part.slice(1, -1) : part;
    });
  }
  function label(parent, x, y, str, cls, anchor) {
    const t = svgEl('text', { x, y, class: cls, 'text-anchor': anchor || 'start' }, parent);
    runs(t, str);
    return t;
  }

  /* Draw root into an svg of w × h. Returns { paint(hiNames, b) }. */
  T.draw = function (svg, root, w, h, opt) {
    opt = opt || {};
    const { tips, all, H } = T.layout(root);
    const pitch = h / tips.length;
    const px = opt.px || Math.max(22, Math.min(40, pitch * 0.58));
    const subPx = Math.round(px * 0.72);
    const tipText = (n) => T.label(n) + (n.extinct ? ' †' : '');
    const labW = Math.max(...tips.map((n) => textW(tipText(n), px) + (opt.subs && n.sub ? 16 + textW(n.sub, subPx) : 0)));
    /* Node labels sit above each clade's stem. Size them to the stem length (not below 19 px);
     * the root's stem is lengthened to hold its own label. */
    const named = all.filter((n) => n.kids.length && T.label(n) && opt.nodeLabels !== false);
    const longest = Math.max(1, ...named.filter((n) => n !== root).map((n) => T.label(n).replace(/_/g, '').length));
    let nodePx = Math.round(px * 0.7), stem = 40, x0, x1;
    for (let pass = 0; pass < 2; pass++) {
      const rootW = named.includes(root) && opt.rootLabel !== false ? textW(T.label(root), nodePx) + 20 : 0;
      stem = Math.max(opt.stem == null ? 40 : opt.stem, rootW);
      x0 = 10 + stem; x1 = Math.max(x0 + 120, w - labW - 24);
      const dx = H ? (x1 - x0) / H : x1 - x0;
      nodePx = Math.max(19, Math.min(Math.round(px * 0.7), Math.floor((dx - 14) / (longest * 0.52))));
    }
    const X = (n) => H ? x0 + (x1 - x0) * (H - n.h) / H : x1;
    const Y = (n) => pitch * (n.row + 0.5);
    const g = svgEl('g', { class: 'tr' }, svg);
    const els = [];
    all.forEach((n) => {
      const x = X(n), y = Y(n), px0 = n.up ? X(n.up) : x0 - stem;
      els.push({ n, e: svgEl('line', { x1: px0, y1: y, x2: x, y2: y, class: 'tr-br' }, g) });
      if (n.kids.length) els.push({ n, e: svgEl('line', { x1: x, y1: Y(n.kids[0]), x2: x, y2: Y(n.kids[n.kids.length - 1]), class: 'tr-br' }, g) });
    });
    const labs = [];
    tips.forEach((n) => {
      const t = label(g, x1 + 14, Y(n) + px * 0.35, tipText(n), 'tr-tip' + (n.target ? ' target' : '') + (n.off ? ' off' : ''));
      t.style.fontSize = px + 'px';
      if (opt.subs && n.sub) {
        const s = svgEl('tspan', { class: 'tr-sub', dx: 16 }, t);
        s.style.fontSize = subPx + 'px';
        runs(s, n.sub);
      }
      labs.push({ n, e: t });
    });
    if (opt.nodeLabels !== false) {
      all.forEach((n) => {
        if (!n.kids.length || !T.label(n) || n === root && opt.rootLabel === false) return;
        const tw = textW(T.label(n), nodePx), xr = X(n) - 6, yb = Y(n) - 9;
        const bg = svgEl('rect', { x: xr - tw - 4, y: yb - nodePx * 0.82, width: tw + 8, height: nodePx * 1.02, rx: 4, class: 'tr-nodebg' }, g);
        const t = label(g, xr, yb, T.label(n), 'tr-node', 'end');
        t.style.fontSize = nodePx + 'px';
        labs.push({ n, e: t, node: true });
        void bg;
      });
    }
    const marks = (opt.marks || []).map((m) => {
      const n = all.find((k) => T.matches(k, m.on));
      if (!n) throw new Error('mark: no ' + m.on);
      const xa = n.up ? X(n.up) : x0 - stem, xb = X(n), xm = xa + (xb - xa) * 0.3, y = Y(n);  // left of the node's own label
      const mg = svgEl('g', { class: 'tr-mark' + (m.loss ? ' loss' : '') }, g);
      svgEl('line', { x1: xm, y1: y - 5, x2: xm, y2: y + 15 }, mg);  // hangs below the stem, clear of the node label above it
      const t = label(mg, xm, y + 13 + Math.round(px * 0.8), m.text, 'tr-mtext', 'middle');
      t.style.fontSize = Math.round(px * 0.7) + 'px';
      return { m, e: mg };
    });
    return {
      paint(hi, b) {
        const cl = (hi || []).map((name) => { const c = all.find((k) => T.matches(k, name)); if (!c) throw new Error('hi: no ' + name); return c; });
        const lit = (n) => cl.some((c) => inClade(n, c));
        const any = cl.length > 0;
        els.concat(labs).forEach(({ n, e }) => {
          const on = lit(n);
          e.classList.toggle('hot', on);
          e.classList.toggle('dim', any && !on);
        });
        marks.forEach(({ m, e }) => e.classList.toggle('on', (b || 0) >= (m.at || 0)));
      },
      tips, all
    };
  };

  /* ---------- parts ---------- */
  function treePart(make) {
    return function (def, host) {
      const w = def.box[2], h = def.box[3];
      const svg = svgEl('svg', { width: w, height: h, viewBox: `0 0 ${w} ${h}`, class: 'tr-svg' }, host);
      const pad = def.pad || [0, 10, 0, 10];
      const inner = svgEl('g', { transform: `translate(${pad[0]},${pad[1]})` }, svg);
      const t = T.draw(inner, make(def), w - pad[0] - pad[2], h - pad[1] - pad[3], def);
      const steps = def.steps || [];
      const at = (b) => steps[Math.min(b, steps.length - 1)] || {};
      t.paint([], 0);
      return { show(b) { t.paint(at(b).hi || [], b); } };
    };
  }
  D.parts.path = treePart((def) => T.path(def));
  D.parts.tree = treePart((def) => T.get(def.src));

  /* ---------- mini: shape only ---------- */
  T.mini = function (host, def) {
    const w = def.w || 300, h = def.h || 76;
    const root = T.get(def.src);
    const { tips, all, H } = T.layout(root);
    const svg = svgEl('svg', { width: w, height: h, viewBox: `0 0 ${w} ${h}`, class: 'tr-mini' }, host);
    const pitch = (h - 8) / tips.length, x0 = 14, x1 = w - 14;
    const X = (n) => H ? x0 + (x1 - x0) * (H - n.h) / H : x1, Y = (n) => 4 + pitch * (n.row + 0.5);
    const c = def.hi ? all.find((k) => T.matches(k, def.hi)) : null;
    if (def.hi && !c) throw new Error('mini: no ' + def.hi);
    all.forEach((n) => {
      const on = c && inClade(n, c), cls = 'tr-br' + (on ? ' hot' : '');
      svgEl('line', { x1: n.up ? X(n.up) : 4, y1: Y(n), x2: X(n), y2: Y(n), class: cls }, svg);
      if (n.kids.length) svgEl('line', { x1: X(n), y1: Y(n.kids[0]), x2: X(n), y2: Y(n.kids[n.kids.length - 1]), class: cls }, svg);
    });
    if (c) tips.filter((n) => inClade(n, c)).forEach((n) => svgEl('circle', { cx: x1 + 1, cy: Y(n), r: 5, class: 'tr-dot' }, svg));
    return svg;
  };
})();
