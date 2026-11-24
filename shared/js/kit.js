/* Builders for content.js: each returns one segment (a slide and its builds).
 *
 * Every builder takes (id, title, def) where def may carry:
 *   tier    1 condensed (default), 2 expanded, 3 full; L switches level
 *   min     minutes the clock counts for the slide
 *   notes   lines for the speaker window (S). The slide itself stays words-light:
 *           names of clades and parts, and the odd number. Everything else is said.
 *
 * K.img(name, cap, extra) is a picture in img/, sized from js/dims.js, which
 * tools/assets.py writes from the names content.js uses.
 * Text style everywhere: _Genus_ italic, *word* accent.
 */
(function () {
  'use strict';
  const K = window.Kit = {};
  const STAGE = [0, 24, 1600, 846];     // the whole slide below the control bar
  const BODY = [0, 112, 1600, 758];     // below a heading
  const plain = (t) => String(t).replace(/[_*]/g, '');

  K.img = function (name, cap, extra) {
    const d = (window.DIMS || {})[name];
    if (!d) throw new Error('No size for ' + name + ': run python3 tools/assets.py');
    const p = Object.assign({ src: 'img/' + name, w: d[0], h: d[1], cap: cap || '' }, extra || {});
    /* swap: [{src, at}] puts another picture of the same size in this panel from build at */
    if (p.swap) p.swap = p.swap.map((x) => Object.assign({}, x, { src: 'img/' + x.src }));
    return p;
  };

  /* A Sketchfab model, live: drag to turn it, scroll to zoom. uid is the 32-character id at
   * the end of the model's URL. It loads only while its slide is on screen and needs the
   * network. extra.aspect (default 4/3) shapes the frame. */
  K.sf = function (uid, cap, extra) {
    const a = (extra && extra.aspect) || 4 / 3;
    const q = 'autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_controls=0&ui_stop=0&ui_inspector=0&ui_settings=0&ui_help=0&ui_vr=0&ui_ar=0&ui_annotations=0&ui_hint=2&dnt=1';
    return Object.assign({ embed: `https://sketchfab.com/models/${uid}/embed?${q}`, w: 1200, h: Math.round(1200 / a), up: 1, cap: cap || '' }, extra || {});
  };

  const seg = (id, title, def, builds, items) => ({
    id, title: plain(title), min: def.min || 1.5, tier: def.tier || 1, notes: def.notes || [],
    builds, items: (def.heading === false ? [] : def.heading ? [{ kind: 'heading', box: [40, 24, 1520, 80], text: def.heading }] : []).concat(items)
  });
  const range = (n) => Array.from({ length: Math.max(1, n) }, () => ({}));

  K.cover = (title, def) => seg('title', title, Object.assign({ min: 1 }, def), [{}],
    [{ kind: 'cover', box: [0, 0, 1600, 900], title, pic: def.pic, sub: def.sub, cap: def.cap }]);

  /* A section card: the section's name, numbered. */
  K.part = (id, text, def) => seg(id, text, Object.assign({ min: 0.3 }, def || {}), [{}],
    [{ kind: 'title', box: [100, 200, 1400, 500], n: true, text }]);

  /* Pictures with a header (head.name, head.facts) and chips (foot). Anything with at: n comes in at build n. */
  K.plate = function (id, title, def) {
    const n = Math.max(0, ...def.panels.map((p) => p.at || 0), ...(def.foot || []).map((c) => c.at || 0), def.extra || 0);
    const box = def.box || STAGE;
    /* A wide picture beside a portrait one: equal heights would shrink the portrait to a
     * stamp, so it gets the full-height column on the right instead. */
    let panels = def.panels, tall = def.tall;
    const asp = (p) => p.w / p.h;
    const portrait = panels.filter((p) => asp(p) < 0.95);
    if (!tall && !def.side && !def.between && !panels.some((p) => p.embed) && portrait.length === 1 && (panels.length === 2
      ? Math.max(...panels.map(asp)) > 1.5
      : panels.length > 2 && panels.every((p) => p === portrait[0] || asp(p) > 1.2))) {
      tall = portrait[0];
      panels = panels.filter((p) => p !== tall);
    }
    return seg(id, title, def, range(n + 1), [Object.assign({ kind: 'plate', box }, {
      head: def.head || { name: title }, panels, foot: def.foot, side: def.side, tall, mini: def.mini, legend: def.legend, between: def.between, key: def.key, rows: def.rows
    })]);
  };

  /* A figure with pills: one pill per build; a pill may light rect [x, y, w, h] (fractions) of the figure. */
  K.fig = function (id, title, def) {
    const zones = def.zones || [];
    const item = Object.assign({ kind: 'fig', box: [0, 112, 1600, 758], imgBox: [40, 8, 1010, 720] }, def.fig, { zones });
    return seg(id, title, Object.assign({ heading: title }, def), range(zones.length + 1), [item]);
  };

  /* The line from def.root down to def.to in the course tree. steps[b].hi lights clades. */
  K.path = function (id, title, def) {
    return seg(id, title, Object.assign({ heading: def.heading == null ? false : def.heading }, def), range((def.steps || []).length),
      [Object.assign({ kind: 'path', box: def.box || [60, 40, 1480, 800], px: 34 }, def)]);
  };

  /* A group's tree. steps[b].hi lights clades; marks[{on, text, at}] tick a stem from build at. */
  K.tree = function (id, title, def) {
    const n = Math.max((def.steps || []).length, ...(def.marks || []).map((m) => (m.at || 0) + 1), 1);
    return seg(id, title, def, range(n), [Object.assign({ kind: 'tree', box: def.box || (def.heading ? [60, 120, 1480, 740] : [60, 40, 1480, 810]) }, def)]);
  };

  /* "If I tell you on a test": rows [{c: [clues], a: answer, more}]; one answer per build. */
  K.clues = (id, title, def) => seg(id, title, Object.assign({ heading: title, min: 4 }, def), range(def.rows.length + 1),
    [{ kind: 'clues', box: def.box || BODY, rows: def.rows, px: def.px }]);

  /* A table of terms. reveal 'col' | 'row' adds one per build. */
  K.grid = function (id, title, def) {
    const n = def.reveal === 'col' ? def.head.length - 1 : def.reveal === 'row' ? def.rows.length : 0;
    return seg(id, title, Object.assign({ heading: title }, def), range(n + 1),
      [{ kind: 'grid', box: def.box || BODY, head: def.head, rows: def.rows, reveal: def.reveal, px: def.px, cls: def.cls }]);
  };

  /* A picture and a few big numbers, one number per build. */
  K.fact = function (id, title, def) {
    const nums = def.nums.map((x, i) => Object.assign({ at: i }, x));
    const n = Math.max(0, ...nums.map((x) => x.at));
    return seg(id, title, Object.assign({ heading: title }, def), range(n + 1),
      [Object.assign({ kind: 'fact', box: [0, 100, 1600, 780] }, def.pic, { nums })]);
  };

  /* ---------- the heading part ---------- */
  window.Deck.parts.heading = function (def, host) {
    host.innerHTML = `<div class="hd">${window.Deck.fmt(def.text)}</div>`;
    return {};
  };
})();
