/* From the fs110 decks (spinos/js/parts/plate.js). Change here: pictures are not
 * enlarged past D.UPSCALE (set in util.js) times their own size.
 *
 * Plain slides: pictures laid out for you, with a few short labels.
 *
 *   plate   A header (animal name, where and when, the topic), one to four pictures
 *           in a row, each with an optional label carrying one of the five question
 *           icons, and a foot of short chips. Everything is on screen at once unless
 *           a panel or chip carries at: n (it comes on at build n).
 *           def.key puts a numbered key beside a figure that labels things by number.
 *           def.between puts one card in the gap between two figures.
 *           def.tall gives one figure its own full-height column at the right; the
 *           other pictures and the foot share the left.
 *
 * D.plateRow lays pictures out inside a box and is shared with fig (the aside).
 * A picture can carry crop: [left, top, right, bottom] as fractions of the file;
 * the crop is what is shown, edge to edge, so a zoom can never miss its target.
 * A picture can carry swap: [{src, at}]: same-size pictures that replace it at those builds.
 */
(function () {
  'use strict';
  const D = window.Deck;
  const ROLE = (r) => (r && D.icons[r]) || '';
  let LAB = 60;
  const CAPH = 28, GAP = 30, MIDGAP = 300;
  const labRaw = (p) => String(p.label).replace(/[_*=]/g, '').length * 13.5 + 80;
  const labW = (p) => Math.min(380, Math.max(200, labRaw(p)));

  /* opts.gap widens the space between pictures; opts.lab fixes the label's height. */
  D.plateRow = function (root, panels, box, dir, opts) {
    const vertical = dir === 'col';
    const G = (opts && opts.gap) || GAP;
    LAB = (opts && opts.lab) || (panels.some((p) => p.label && labRaw(p) > 380) ? 96 : 60);
    const items = panels.map((p) => {
      const c = p.crop || [0, 0, 1, 1];
      const cw = p.w * (c[2] - c[0]), ch = p.h * (c[3] - c[1]);
      return { p, c, a: cw / ch, cw, ch };
    });
    const anyLab = items.some((i) => i.p.label), anyCap = items.some((i) => i.p.cap);
    const exOf = (i) => vertical ? (i.p.label ? LAB : 0) + (i.p.cap ? CAPH : 0) : (anyLab ? LAB : 0) + (anyCap ? CAPH : 0);
    const n = items.length;
    let h = 0;
    const sizes = items.map(() => ({ w: 0, h: 0 }));
    if (!vertical) {
      const extra = exOf(items[0]);
      // never enlarge a picture past D.UPSCALE times its own size: the 3D renders are small
      const cap = Math.max(...items.map((i) => i.ch * (i.p.up || D.UPSCALE)));
      for (h = Math.min(box[3] - extra, cap); h > 60; h -= 4) {
        const tot = items.reduce((s, i) => s + (i.p.label ? Math.max(i.a * h, labW(i.p)) : i.a * h), 0) + G * (n - 1);
        if (tot <= box[2]) break;
      }
      items.forEach((i, k) => { sizes[k] = { w: i.a * h, h }; });
    } else {
      let t;
      for (t = box[3]; t > 40; t -= 4) {
        const tot = items.reduce((s, i) => s + Math.min(box[2] / i.a, (i.p.weight || 1) * t) + exOf(i), 0) + G * (n - 1);
        if (tot <= box[3]) break;
      }
      items.forEach((i, k) => { const hh = Math.min(box[2] / i.a, (i.p.weight || 1) * t); sizes[k] = { w: hh * i.a, h: hh }; });
    }
    const slotW = items.map((i, k) => vertical ? sizes[k].w : (i.p.label ? Math.max(sizes[k].w, labW(i.p)) : sizes[k].w));
    const total = vertical
      ? sizes.reduce((s, k, j) => s + k.h + exOf(items[j]), 0) + G * (n - 1)
      : slotW.reduce((s, v) => s + v, 0) + G * (n - 1);
    const out = [];
    let x = box[0] + (vertical ? 0 : Math.max(0, (box[2] - total) / 2));
    let y = box[1] + (vertical ? Math.max(0, (box[3] - total) * 0.3) : Math.max(0, (box[3] - (h + exOf(items[0]))) * 0.3));
    items.forEach((i, k) => {
      const p = i.p, sw = sizes[k].w, sh = sizes[k].h, ex = exOf(i);
      const sl = vertical ? box[2] : slotW[k];
      const e = D.el('div', 'pl2-p pl2-x', root);
      e.style.cssText = `left:${Math.round(vertical ? box[0] : x)}px;top:${Math.round(y)}px;width:${Math.round(sl)}px;height:${Math.round(sh + ex)}px;`;
      let swaps = null;
      const fr = D.el('div', 'pl2-img' + (p.embed ? ' pl2-3d' : ''), e);
      const off = Math.round((sl - sw) / 2);
      fr.style.cssText = `left:${off}px;top:0;width:${Math.round(sw)}px;height:${Math.round(sh)}px;`;
      if (p.embed) {
        /* the iframe is made by load() when the slide shows, and dropped when it leaves */
        D.el('div', 'pl2-3d-tag', fr, '3D · drag to turn');
        fr.dataset.embed = p.embed;
      } else {
        const im = D.el('img', '', fr);
        const s = sw / i.cw;
        im.draggable = false; im.alt = p.alt || ''; im.src = p.src;
        im.style.cssText = `width:${(p.w * s).toFixed(2)}px;height:${(p.h * s).toFixed(2)}px;left:${(-i.c[0] * p.w * s).toFixed(2)}px;top:${(-i.c[1] * p.h * s).toFixed(2)}px;`;
        if (p.swap) {
          swaps = [{ im, at: p.at || 0 }].concat(p.swap.map((x) => {
            const m = D.el('img', '', fr);
            m.draggable = false; m.alt = ''; m.src = x.src; m.style.cssText = im.style.cssText;
            return { im: m, at: x.at };
          }));
        }
      }
      let top = sh + 6;
      if (p.label) {
        const l = D.el('div', 'pl2-lab' + (p.role ? ' r-' + p.role : ''), e, ROLE(p.role) + `<span>${D.fmt(p.label)}</span>`);
        l.style.cssText = `top:${Math.round(top)}px;`;
        top += LAB - 4;
      }
      if (p.cap) D.el('div', 'pl2-cap', e, D.fmt(p.cap)).style.cssText = `top:${Math.round(top)}px;`;
      out.push({ e, at: p.at || 0, x: vertical ? box[0] : x, y, w: sl, h: sh, iw: sw, swaps });
      if (vertical) y += sh + ex + G; else x += slotW[k] + G;
    });
    return out;
  };

  /* ---------- plate ---------- */
  D.parts.plate = function (def, host) {
    const H = def.box[3];
    host.innerHTML = '<div class="pl2"></div>';
    const root = host.firstChild;
    const timed = [];
    let top = 0, bottom = H, right = 1560, foot = null;
    const hd = def.head;
    if (hd) {
      const h = D.el('div', 'pl2-head', root);
      if (hd.name) {
        const who = D.el('div', 'pl2-who', h, `<b>${D.fmt(hd.name)}</b>` + (hd.facts ? `<span>${D.fmt(hd.facts)}</span>` : ''));
        void who;
      }
      if (hd.topic) D.el('div', 'pl2-topic' + (hd.name ? '' : ' solo'), h, `<span>${D.fmt(hd.topic)}</span>`);
      top = 96;
    }
    let chipW = 0;
    if (def.foot && def.foot.length) {
      const f = foot = D.el('div', 'pl2-foot', root);
      def.foot.forEach((c) => {
        const e = D.el('div', 'pl2-lab big pl2-x' + (c.role ? ' r-' + c.role : ''), f, ROLE(c.role) + `<span>${D.fmt(c.text)}</span>`);
        timed.push({ e, at: c.at || 0 });
      });
      /* chips wrap: guess how many rows of them there are from their length */
      chipW = def.foot.reduce((t, c) => t + String(c.text).replace(/[_*]/g, '').length * 14 + 70, 0);
      if (def.side) { f.classList.add('side'); right = 1070; } else bottom = H - 84 * Math.ceil(chipW / 1480);
    }
    if (def.key) {
      const k = D.el('div', 'pl2-key', root);
      def.key.forEach((r) => { D.el('b', '', k, D.esc(r.n)); D.el('span', '', k, D.fmt(r.text)); });
      right = 1040;
    }
    let els = [];
    if (def.tall) {
      const t = def.tall, c = t.crop || [0, 0, 1, 1], free = H - top - 8;
      const tallH = free - (t.label ? 60 : 0) - (t.cap ? CAPH : 0);
      // the column is at least as wide as the picture's label, or plateRow shrinks the picture to fit the label
      const tallW = Math.max(Math.round(tallH * (t.w * (c[2] - c[0])) / (t.h * (c[3] - c[1]))), t.label ? Math.ceil(labW(t)) : 0);
      right -= tallW + GAP;
      els = D.plateRow(root, [t], [right + GAP, top + 8, tallW, free], 'row', { lab: 60 });
      if (foot) {
        foot.style.right = (1600 - right) + 'px';
        // the chips now share the width left of the column, so they wrap sooner
        if (!def.side) bottom = H - 84 * Math.ceil(chipW / (right - 120));
      }
    }
    els = els.concat(def.between || def.rows === 1
      ? D.plateRow(root, def.panels, [40, top + 8, right - 40, bottom - top - 8], 'row', { gap: def.between ? MIDGAP : 0 })
      : rows(root, def.panels, [40, top + 8, right - 40, bottom - top - 8], Array.isArray(def.rows) ? def.rows : null));
    if (def.between) {
      const a = els[0], b = els[1], m = def.between;
      const card = D.el('div', 'pl2-lab big pl2-x pl2-mid' + (m.role ? ' r-' + m.role : ''), root, ROLE(m.role) + `<span>${D.fmt(m.text)}</span>`);
      card.style.cssText = `left:${Math.round(a.x + a.w + 16)}px;width:${Math.round(b.x - a.x - a.w - 32)}px;top:${Math.round(a.y + a.h / 2)}px;`;
      timed.push({ e: card, at: 0 });
    }
    return {
      show(b) {
        els.concat(timed).forEach((k) => k.e.classList.toggle('shown', b >= k.at));
        els.forEach((k) => {
          if (b >= k.at) D.load3d(k.e);
          if (k.swaps) {  // the latest picture whose build has come shows; the rest hide
            const cur = k.swaps.filter((w) => b >= w.at).pop() || k.swaps[0];
            k.swaps.forEach((w) => { w.im.style.visibility = w === cur ? 'visible' : 'hidden'; });
          }
        });
      },
      hide() { root.querySelectorAll('.pl2-3d iframe').forEach((f) => f.remove()); }
    };
  };

  /* Three or four small pictures in one row leave the slide half empty. Lay the panels
   * out as one row and as every two-row split (order kept), and keep the layout that
   * shows the most picture (see the score below). */
  function rows(root, panels, box, force) {
    /* force [2, 2]: exactly these rows, no search */
    const tries = force ? [force.map((n, r) => panels.slice(force.slice(0, r).reduce((a, b) => a + b, 0)).slice(0, n))] : [[panels]];
    if (!force) for (let k = 1; k < panels.length; k++) tries.push([panels.slice(0, k), panels.slice(k)]);
    /* and, from three panels up, one panel full height on the left (the 3D model if there is
     * one, else the first) with the rest stacked in a column beside it */
    const big = panels.find((p) => p.embed) || panels[0];
    if (!force && panels.length >= 3) [0.5, 0.6, 0.7].forEach((f) => tries.push({ big, col: panels.filter((p) => p !== big), f }));
    let best = null;
    tries.forEach((t) => {
      const layer = D.el('div', 'pl2', root);
      let flat, out;
      if (t.big) {
        const lw = box[2] * t.f;
        flat = [t.big].concat(t.col);
        out = D.plateRow(layer, [t.big], [box[0], box[1], lw - GAP / 2, box[3]], 'row')
          .concat(D.plateRow(layer, t.col, [box[0] + lw + GAP / 2, box[1], box[2] - lw - GAP / 2, box[3]], 'col'));
      } else {
        const hh = (box[3] - GAP * (t.length - 1)) / t.length;
        flat = [].concat(...t);
        out = [].concat(...t.map((row, r) => D.plateRow(layer, row, [box[0], box[1] + r * (hh + GAP), box[2], hh], 'row')));
      }
      /* score: each picture's linear size (so one big and one stamp loses to two fair-sized),
       * a 3D model counting extra because it is no use small (and next to nothing when it is
       * a stamp, too small to turn), and a nudge toward one row */
      const w3d = (o) => (o.h < 160 ? 0.2 : 1.5);
      const area = out.reduce((a, o, i) => a + Math.sqrt(o.iw * o.h) * (flat[i].embed ? w3d(o) : 1), 0) * (t.length === 1 ? 1.05 : 1);
      if (!best || area > best.area) { if (best) best.layer.remove(); best = { layer, out, area }; } else layer.remove();
    });
    return best.out;
  }

  /* A Sketchfab frame comes alive when its panel first shows. */
  D.load3d = function (panel) {
    const fr = panel.querySelector('.pl2-3d');
    if (!fr || fr.querySelector('iframe')) return;
    const f = D.el('iframe', '', fr);
    f.title = '3D model'; f.allow = 'autoplay; fullscreen; xr-spatial-tracking';
    f.setAttribute('allowfullscreen', ''); f.src = fr.dataset.embed;
  };

  /* A click in a model gives the iframe the keyboard, and the deck's keys stop working.
   * Hand the keys back as soon as the pointer is over the deck again. */
  const giveBack = () => { const a = document.activeElement; if (a && a.tagName === 'IFRAME') a.blur(); };
  document.addEventListener('pointermove', giveBack);
  window.addEventListener('blur', () => setTimeout(() => {
    const a = document.activeElement;
    if (a && a.tagName === 'IFRAME' && !a.matches(':hover')) a.blur();
  }, 0));
})();
