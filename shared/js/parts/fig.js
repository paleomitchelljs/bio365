/* fig: a figure, large, with pills on the right that come in one per build. A pill can
 * light a zone of the figure (rect, fractions of the image; the rest dims) or swap the
 * figure (src). From the fs110 decks (spinos/js/parts/scene.js), unchanged. */
(function () {
  'use strict';
  const D = window.Deck;
  const ROLE = (r) => (r && D.icons[r]) || '';

  /* ---------- fig ---------- */
  D.parts.fig = function (def, host) {
    const BX = def.imgBox || [40, 8, 1010, 672];
    host.innerHTML = '<div class="fg"><div class="fg-img"><img draggable="false"><div class="fg-hole"></div></div><div class="fg-cap"></div><div class="fg-pills"></div></div>';
    const root = host.firstChild, wrap = root.querySelector('.fg-img'), img = wrap.querySelector('img'), hole = wrap.querySelector('.fg-hole');
    const cap = root.querySelector('.fg-cap'), pills = root.querySelector('.fg-pills');
    /* def.aside = [x, y, w, h]: a panel beside the figure showing the focused zone zoomed, with its own picture (zone.aside) next to it. */
    const asideEl = def.aside ? D.el('div', 'fg-aside', root) : null;
    let asideShown = [];
    function setAside(z) {
      if (!asideEl) return;
      asideEl.innerHTML = '';
      const ps = [];
      if (z && z.rect && !z.src) { const r = z.rect; ps.push({ src: def.src, w: def.w, h: def.h, crop: [r[0], r[1], r[0] + r[2], r[1] + r[3]], label: z.label }); }
      if (z && z.aside) ps.push(Object.assign({ label: z.aside.label }, z.aside));
      if (ps.length) D.plateRow(asideEl, ps, def.aside, 'col');
    }
    if (def.pills === false) pills.style.display = 'none';
    function layout(w, h, box) {
      const B = box || BX;
      const s = Math.min(B[2] / w, (B[3] - 30) / h), W = Math.round(w * s), H = Math.round(h * s);
      wrap.style.cssText = `left:${B[0] + Math.round((B[2] - W) / 2)}px;top:${B[1]}px;width:${W}px;height:${H}px;`;
      cap.style.cssText = `left:${B[0]}px;width:${B[2]}px;top:${B[1] + H + 6}px;`;
    }
    let curSrc = null;
    /* box: a zone with its own picture can have its own box (zone.imgBox) instead of the figure's. */
    function setSrc(src, w, h, c, box) {
      if (src !== curSrc) { img.src = src; curSrc = src; }
      layout(w, h, box); cap.innerHTML = D.fmt(c || '');
    }
    setSrc(def.src, def.w, def.h, def.cap); img.alt = def.alt || '';
    const from = def.from == null ? 1 : def.from;
    const zs = def.zones.map((z, i) => {
      const e = D.el('button', 'fg-pill' + (z.role ? ' r-' + z.role : ''), pills, ROLE(z.role) + (z.dot ? `<i class="dt" style="background:${z.dot}"></i>` : '') + `<span>${D.fmt(z.label)}</span>`);
      e.type = 'button';
      e.style.top = (i * (def.pitch || 78)) + 'px';
      e.addEventListener('click', (ev) => { ev.stopPropagation(); if (e.classList.contains('shown')) focus(cur === i ? -1 : i); });
      return { z, e };
    });
    let cur = -1;
    function focus(i) {
      cur = i;
      const z = i >= 0 ? def.zones[i] : null;
      if (z && z.src) setSrc(z.src, z.w, z.h, z.cap, z.imgBox); else setSrc(def.src, def.w, def.h, def.cap);
      if (!z || !z.rect) hole.style.cssText = 'left:0;top:0;width:100%;height:100%;box-shadow:0 0 0 0 transparent;';
      else {
        const r = z.rect;
        hole.style.cssText = `left:${r[0] * 100}%;top:${r[1] * 100}%;width:${r[2] * 100}%;height:${r[3] * 100}%;box-shadow:0 0 0 4000px var(--veil);`;
      }
      zs.forEach((k, j) => k.e.classList.toggle('on', j === i));
      setAside(z);
    }
    focus(-1);
    if (asideEl && def.pills === false) {
      wrap.classList.add('pick');
      wrap.addEventListener('click', (ev) => {
        const r = wrap.getBoundingClientRect(), fx = (ev.clientX - r.left) / r.width, fy = (ev.clientY - r.top) / r.height;
        const hit = (z, k) => z.rect && fx >= z.rect[0] && fx <= z.rect[0] + z.rect[2] && fy >= z.rect[1] && fy <= z.rect[1] + z.rect[3] && zs[k].e.classList.contains('shown');
        // a zone can come up twice in one figure, so a click on the zone in view always closes it
        const j = cur >= 0 && hit(def.zones[cur], cur) ? cur : def.zones.findIndex(hit);
        if (j >= 0) { ev.stopPropagation(); focus(cur === j ? -1 : j); }
      });
    }
    return {
      show(b) {
        zs.forEach((k, j) => k.e.classList.toggle('shown', b >= j + from));
        const i = b - from;
        focus(i >= 0 && i < def.zones.length ? i : -1);
      },
      reset() { focus(-1); }
    };
  };

})();
