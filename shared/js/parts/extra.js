/* Parts written for the BIO 365 decks.
 *
 *   cover   (replaces intro.js's) title, a picture, an optional small sub line and credit.
 *   clues   "If I tell you on a test…": rows of clue chips, every row on screen at once,
 *           one answer revealed per build. A row with more: true continues the one above.
 *   grid    A small table of key terms. reveal: 'col' or 'row' brings in one column or
 *           row per build after the first (the header row and first column stay up).
 *
 * Plates (plate.js) also take def.mini, a wordless tree in the header with one clade lit,
 * and def.legend, a short key under the pictures. GIF panels restart when their slide
 * comes up, so the animation starts from the beginning each time.
 */
(function () {
  'use strict';
  const D = window.Deck;

  D.parts.cover = function (def, host) {
    const d = (window.DIMS || {})[String(def.pic).replace(/^img\//, '')];
    host.innerHTML = '<div class="cover">' +
      `<div class="cv-title">${D.fmt(def.title)}</div>` +
      (def.sub ? `<div class="cv-sub">${D.fmt(def.sub)}</div>` : '') +
      `<figure class="cv-fig"><img src="${D.esc(def.pic)}" alt="" draggable="false">` +
      (def.cap ? `<figcaption>${D.fmt(def.cap)}</figcaption>` : '') + '</figure></div>';
    if (d) { const im = host.querySelector('.cv-fig img'); im.style.maxWidth = Math.round(d[0] * 2) + 'px'; im.style.maxHeight = Math.round(d[1] * 2) + 'px'; }
    return {};
  };

  D.parts.clues = function (def, host) {
    const root = D.el('div', 'cl', host);
    if (def.px) root.style.fontSize = def.px + 'px';
    const rows = def.rows.map((r) => {
      const e = D.el('div', 'cl-row' + (r.more ? ' more' : ''), root);
      const c = D.el('div', 'cl-clues', e);
      if (r.more) D.el('span', 'cl-plus', c, '+');
      r.c.forEach((t) => D.el('span', 'cl-chip', c, D.fmt(t)));
      D.el('div', 'cl-arrow', e, '<svg viewBox="0 0 24 24"><path d="M4 12h15M14 6l6 6-6 6"/></svg>');
      const a = D.el('div', 'cl-ans', e, `<span>${D.fmt(r.a)}</span>`);
      return a;
    });
    return {
      show(b, how) {
        rows.forEach((a, i) => {
          const on = b >= i + 1, was = a.classList.contains('on');
          a.classList.toggle('on', on);
          if (on && !was && how === 'step') D.replay(a, 'play');
        });
      }
    };
  };

  D.parts.grid = function (def, host) {
    const t = D.el('table', 'gd' + (def.cls ? ' ' + def.cls : ''), host);
    if (def.px) t.style.fontSize = def.px + 'px';
    const cells = [];
    const all = [def.head].concat(def.rows);
    all.forEach((row, r) => {
      const tr = D.el('tr', r === 0 ? 'gd-h' : '', t);
      row.forEach((txt, c) => {
        const td = D.el(r === 0 || c === 0 ? 'th' : 'td', '', tr, D.fmt(txt == null ? '' : txt));
        cells.push({ e: td, r, c });
      });
    });
    return {
      show(b) {
        cells.forEach(({ e, r, c }) => {
          let on = true;
          if (def.reveal === 'col' && c > 0) on = b >= c;
          if (def.reveal === 'row' && r > 0) on = b >= r;
          e.classList.toggle('gd-off', !on);
        });
      }
    };
  };

  /* ---------- plate additions: mini tree, legend, GIF restart ---------- */
  const plate = D.parts.plate;
  D.parts.plate = function (def, host, seg) {
    const api = plate(def, host, seg);
    const root = host.firstChild;
    if (!def.panels.length) root.classList.add('pl2-nopic');
    if (def.mini) {
      const head = root.querySelector('.pl2-head') || D.el('div', 'pl2-head', root);
      const m = D.el('div', 'pl2-mini');
      head.insertBefore(m, head.firstChild);
      D.tree.mini(m, Object.assign({ w: 150, h: 72 }, def.mini));
    }
    if (def.legend) D.el('div', 'pl2-legend', root, D.fmt(def.legend));
    const gifs = Array.from(root.querySelectorAll('img')).filter((im) => /\.gif$/i.test(im.getAttribute('src')));
    let was = false;
    return {
      show(b, how) {
        if (!was && gifs.length) gifs.forEach((im) => { const s = im.getAttribute('src'); im.src = ''; im.src = s; });
        was = true;
        api.show(b, how);
      },
      hide() { was = false; }
    };
  };
})();
