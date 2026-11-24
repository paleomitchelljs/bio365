# BIO 365 lectures

Five lecture decks for the end of BIO 365, one per outline in
`comparative/lectures/outlines/`. Static pages, no build step: open `index.html`.

| Folder | Lecture |
|---|---|
| [`caudata/`](caudata/) | 1. Salamanders |
| [`diapsida/`](diapsida/) (was `reptiles/`, which now redirects) | 2. Diapsida: Testudines, Crocodylia, *Sphenodon* (birds and squamates have their own) |
| [`squamata/`](squamata/) | 3. Lizards and snakes |
| [`aves/`](aves/) | 4. Birds |
| [`mammalia/`](mammalia/) | 5. Mammals |

## What is on a slide, and what is not

Slides carry clade names, anatomical terms, the odd number, and pictures. The
explanation is said aloud. Press **S** for a second window with each slide's notes:
the outline's points, its ⚠ corrections, and the "verify" flags. Keys typed in the
notes window drive the deck, so it can sit on the laptop screen while the deck projects.

Other keys: → / space next, ← back, `[` `]` previous/next slide, **L** level
(1 condensed, 2 adds the outlines' optional and ⏩ blocks), **T** whiteboard/chalkboard,
**B** blank, **C** clock. The clock's plan is scaled to each outline's own timing
(`minutes` in `content.js`).

## How it is built

- `shared/`: the deck engine from the fs110 decks (`deck.js`, `parts/plate.js`,
  `parts/fig.js`, `parts/intro.js`, `parts/util.js`), plus:
  - `parts/tree.js`: trees from text in the phylo course-tree format. A "where we are"
    slide is the course tree cut down to one line, with each side branch folded into a tip
    named for its crown. Group trees light clades a build at a time and tick
    synapomorphies on stems. Plates can carry a small wordless tree in the header.
  - `coursetree.js`: the course tree, copied from `phylo/docs/js/course.js`. Re-copy
    with `python3 tools/sync_course_tree.py` when that changes.
  - `parts/extra.js`: cover, "If I tell you on a test…" clue tables, term grids.
  - `kit.js`: the builders each `content.js` uses.
- `<deck>/js/content.js`: every word on the slides and in the notes. Edit here.
- `<deck>/img/`, `<deck>/js/dims.js`: written by `python3 tools/assets.py`, which copies
  each picture `content.js` names from the outlines folder (figures to JPEG; the GIFs with
  their drawn-in title and caption cropped off). `--prune` removes unused files.
- Photos of the animals come from the old BIOL 440 PowerPoints (and the odd Wikimedia
  Commons picture): `tools/photos.tsv` lists each one, which deck and slide it came from,
  and `python3 tools/photos.py` copies them into `img/` (`ph_*.jpg`, `fig_*.jpg`). Run it
  before `assets.py`.
- 3D models are live Sketchfab viewers (`K.sf(uid, caption)` in `content.js`): drag to turn,
  scroll to zoom. A viewer loads when its slide comes up and is dropped when the slide
  goes, and needs the network. Clicking a model gives it the keyboard; moving the pointer
  back onto the slide hands the keys back to the deck.
- Plates lay their pictures out themselves: one row, two rows, or a 3D model full height
  with photos stacked beside it, whichever shows the most. `rows: 1` forces one row.
  A panel with `swap: [{src, at}]` changes picture at those builds (the turtle breathing
  stills, drawn by `python3 tools/draw_turtle_breathing.py`).

## Check before class

- **Figures are copyrighted** paper figures, published here with a citation on each, as
  in fs110. The 3D renders carry their Sketchfab licence or MorphoSource specimen line.
- **Photo credits.** Most photos from the old slides were found by web image search and
  the source was never recorded. Each slide's notes mark these with ⚑; the caption carries
  a credit only where one is known (a watermark, or the source in the slide's alt text).
  Find or replace them before the decks are public. `tools/photos.tsv` says where each came from.
- **3D models need the network.** If the room's connection is bad, the panel stays dark;
  the photos on the same slide still carry it.
- **The remaining static 3D renders are small** (450–750 px wide), so slides never enlarge
  a picture past 1.6×. Caudata uses live models instead; the other decks are next.
- **Trees are fully resolved.** Where students need not know the order inside a clade
  (Salamandroidea, Neoaves, Afroaves, Afrotheria) it is still drawn, from a current
  phylogenomic tree named in the notes (Hime et al. 2021 for salamanders, Stiller et al.
  2024 for birds), and the notes say it is not tested. L3's practice answer puts the racer
  with the cobra and coral snake (elapids sister to colubrids), as the outline's own note
  says, not with the vipers as its sketch does.
- Not used: the course-root files that were still syncing (`turtleMuscles.png`,
  `alligator_xsec.png`, `salvator_skull.png`, `stellarseacow.jpg`, `anklebones.jpg`,
  `mammal_female_reproductiveTract.pdf`), Uno et al. 2025, and the _Amphisbaena_ mesh
  whose ID is doubtful. The notes say where each would go.

## Tests

```
node tests/decks.test.js
```

Every picture named exists and is sized, every clade a tree lights or ticks is in that
tree, every path finds both ends in the course tree, and the minutes per level.

## Publishing

Push to `main`, then **Settings → Pages → Deploy from a branch**, `main`, `/ (root)`.
`.nojekyll` stays at the top so Pages serves the folders as they are.
