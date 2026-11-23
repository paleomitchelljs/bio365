/* Lecture 2 of 5: Testudines, Crocodylia, Sphenodon. From lectures/outlines/L2_Turtles_Crocodylians_Sphenodon.md.
 * On screen: clade names, anatomy, a few numbers. Everything else is in notes (S). */
(function () {
  'use strict';
  const K = window.Kit, I = K.img;
  const SF = (name, by, lic) => `"${name}" by ${by} · Sketchfab · ${lic || 'CC BY 4.0'}`;
  const SHORTEN = '*red* = shortening';

  const DIAPSIDA = `
Diapsida
  Lepidosauria
    _Sphenodon_
    Squamata
  Archelosauria
    Testudines
    Archosauria
      Crocodylia
      Aves`;

  const TESTUDINES = `
Testudines
  Pleurodira | side-necked · matamata
  Cryptodira | hidden-necked
    Trionychia | softshells, pig-nose
    Durocryptodira
      Testudinoidea | tortoises, pond and box turtles
      Americhelydia | snappers, mud and musk, sea turtles`;
  const turtle = (hi) => ({ src: TESTUDINES, hi });

  const CROCODYLIA = `
Crocodylia
  Alligatoridae
    _Alligator_
    caimans
  Longirostres
    Crocodylidae
      _Crocodylus_
      _Osteolaemus_
      _Mecistops_
    Gavialidae
      _Gavialis_
      _Tomistoma_`;

  const PRACTICE = `
Diapsida
  Lepidosauria
    tuatara
    iguana
  Archelosauria
    Testudines
      matamata
      Cryptodira
        softshell
        .
          box turtle
          .
            snapping turtle
            sea turtle
    Archosauria
      Crocodylia
        alligator
        Longirostres
          gharial
          Nile crocodile
      pigeon`;

  const segments = [
    K.cover('Turtles, crocodylians, tuatara', {
      sub: 'Testudines · Crocodylia · _Sphenodon_',
      pic: 'img/3D_MS_Sphenodon-skull-UF11978_view1_side.jpg', cap: '_Sphenodon punctatus_ · UF Herp 11978 · oVert · MorphoSource 000011003',
      notes: [
        'Three lineages, each a small living diversity, each the survivor of a big Mesozoic radiation, each with one radically odd system:',
        'turtles: the *trunk* (shell, breathing); crocodylians: the *heart and lungs*; _Sphenodon_: the *skull and teeth*.',
        'Order: Diapsida recap → turtles → crocodylians → _Sphenodon_ last, so it hands off to Squamata.'
      ]
    }),

    K.plate('hook', 'Two diapsids', {
      min: 2,
      head: { name: 'Two diapsids', facts: '_Sphenodon_ · _Chelydra_' },
      panels: [I('WerneburgPreuschoft2024_Fig1_Sphenodon-Chelydra-temporal-terms.jpg', 'Werneburg & Preuschoft 2024')],
      foot: [{ text: 'two temporal arches' }, { text: 'no temporal openings', at: 1 }, { text: 'both diapsids?', at: 2 }],
      side: true,
      notes: ['Same temporal-region terms on both skulls. One is a "perfect" diapsid with two complete arches; the other has no openings at all.', 'Ask: how can a turtle be a diapsid with *zero* holes?']
    }),

    K.path('where', 'Where we are', {
      min: 1.5, root: 'Vertebrata', to: 'Diapsida',
      steps: [{}, { hi: ['Amniota'] }, { hi: ['Diapsida'] }],
      notes: ['Diapsida = Sauria for living taxa.']
    }),

    K.tree('diapsids', 'Diapsida', {
      min: 2.5, src: DIAPSIDA,
      steps: [{}, { hi: ['Testudines'] }, { hi: ['Crocodylia'] }, { hi: ['Sphenodon'] }],
      notes: [
        'Turtles as sister to archosaurs has the most evidence. Turtles + lepidosaurs was also accepted on past tests (365 phylogeny).',
        'Crocodylia is the crocodile line (Pseudosuchia/Crurotarsi); Aves the bird line (Ornithodira), lecture 4. Squamata is lecture 3.'
      ]
    }),

    K.plate('fenestrae', 'Fenestrae', {
      min: 3,
      head: { name: 'Where the holes come from', facts: 'Werneburg & Preuschoft 2024' },
      panels: [
        I('WerneburgPreuschoft2024_Fig5_anterior-vs-posterior-bite-arcades.jpg', 'Werneburg & Preuschoft 2024'),
        I('WerneburgPreuschoft2024_Fig14_force-inputs-summary.jpg', 'Werneburg & Preuschoft 2024', { at: 2 })
      ],
      foot: [{ text: 'anterior bite → lower bar' }, { text: 'posterior bite → upper arcade', at: 1 }, { text: 'homology: bones, not holes', at: 3 }],
      side: true,
      notes: [
        'Bone is laid down where stress flows run and becomes redundant where they don\'t.',
        'Strong anterior bite builds an infratemporal (lower) bar; strong posterior bite builds a supratemporal (upper) arcade. Both together leave two unstressed windows: a diapsid skull. Weak or generalized biting: a closed skull.',
        'So homology lives in the bones, not the openings. That is why turtles can "lose" fenestrae and _Sphenodon_ can regain a bar.'
      ]
    }),

    /* ============================================================ turtles */
    K.part('p-turtles', 'Testudines'),

    K.tree('turtle-tree', 'Testudines', {
      min: 3, src: TESTUDINES, subs: true,
      steps: [{}, { hi: ['Pleurodira'] }, { hi: ['Cryptodira'] }],
      notes: ['~360 species.', 'Pleurodira on the southern continents: chelids (matamata), podocnemidids, pelomedusids.', 'Trionychia: softshells + _Carettochelys_. Americhelydia ("feisty water turtles"): Chelydridae, Kinosternidae, Chelonioidea including the leatherback.']
    }),

    K.plate('shell', 'The shell', {
      min: 5, mini: turtle('Testudines'),
      head: { name: 'A ribcage turned inside out' },
      panels: [
        I('3D_Trachemys-pond-slider-shell_sketchfab-preview.jpg', SF('Pond Slider Shell', 'RISD Nature Lab')),
        I('3D_MS_Chelydra-full-body-OUVC10681_view1_side.jpg', '_Chelydra serpentina_ · OUVC 10681 · Witmer Lab · MorphoSource 000076036', { at: 2 })
      ],
      foot: [
        { text: 'carapace: dorsal ribs + neural plates' },
        { text: 'scutes ≠ sutures', at: 1 },
        { text: 'plastron: gastralia + clavicles + interclavicle', at: 2 },
        { text: 'girdle inside the ribs', at: 3 },
        { text: 'no intercostals', at: 4 }
      ],
      notes: [
        'Carapace: broadened dorsal ribs + neural plates fused to the vertebrae + peripheral dermal bones, under keratin scutes whose seams do *not* line up with the sutures.',
        '⚠ The 440 notes say "fused to the spinal cord". It is fused to the *vertebrae*.',
        'Plastron: gastralia plus the clavicles (epiplastra) and interclavicle (entoplastron), so it holds part of the shoulder girdle.',
        'Girdle inside the ribs: in the embryo the ribs grow laterally into the carapacial ridge, out and over the scapula (Nagashima et al. 2009). "Folding, not adding" at its most extreme.',
        'No intercostal muscles: the ribs can\'t move.'
      ]
    }),

    K.plate('zhu', 'Shell reduction', {
      min: 2.5, mini: turtle('Americhelydia'),
      head: { name: 'Shell reduction', facts: 'Zhu 2011' },
      panels: [I('Zhu2011_Fig1_Chelydra-vs-Trachemys-plastron.jpg', '_Chelydra_ vs. _Trachemys_ · Zhu 2011')],
      foot: [{ text: 'cruciform plastron' }, { text: 'bigger ventral girdle muscles', at: 1 }, { text: 'pectoralis splits', at: 2 }, { text: 'more parasagittal', at: 2 }],
      notes: [
        'Shell reduction is reversible. The snapper\'s cruciform plastron frees room for adductors, ambiens, pubotibialis, puboischiofemoralis, and a more parasagittal stance.',
        'The pectoralis splits and gains an abduction role.',
        'Payoff: female snappers walk over 1 km overland to nest; snapper populations show unusually high gene flow across land barriers.'
      ]
    }),

    K.plate('breathe', 'Breathing in a box', {
      min: 3,
      head: { name: 'Breathing in a box', facts: 'Lyson et al. 2014' },
      panels: [
        I('D01_turtle_breathing.gif', 'Schematic after Lyson et al. 2014'),
        I('Lyson2014_Fig1_turtle-ventilation-muscles-CT.jpg', 'Lyson et al. 2014', { at: 1 })
      ],
      foot: [{ text: 'out: transversus thoracis + abdominis', at: 1 }, { text: 'in: obliquus abdominis + serratus', at: 2 }, { text: 'pulmonalis', at: 3 }],
      legend: SHORTEN,
      notes: [
        'Five muscles. Expiration: transversus thoracis + transversus abdominis, a sling pressing the viscera up against the lungs. Inspiration: obliquus abdominis + serratus, a cup.',
        'Plus the pulmonalis, a sheet around the lung of uncertain function.',
        'Your own file `turtleMuscles.png` at the course root fits here (not copied: it was still syncing).'
      ]
    }),

    K.plate('diaphragmaticus', '"Diaphragmaticus"', {
      min: 2,
      head: { name: 'Turtle and _Sphenodon_ hypaxials', facts: 'Lyson et al. 2014' },
      panels: [I('Lyson2014_Fig2_turtle-vs-Sphenodon-hypaxials.jpg', 'Lyson et al. 2014')],
      foot: [{ text: 'turtle "diaphragmaticus" = transversus thoracis' }],
      notes: ['The turtle "diaphragmaticus" is not a diaphragm: it is the transversus thoracis of other amniotes.', 'Same muscles in _Sphenodon_ side by side: the bridge to Part C.']
    }),

    K.plate('eunotosaurus', '_Eunotosaurus_', {
      min: 2.5,
      head: { name: '_Eunotosaurus_', facts: 'Middle Permian, ~260 Ma' },
      panels: [I('Lyson2014_Fig3_Eunotosaurus-T-ribs.jpg', 'Lyson et al. 2014')],
      foot: [{ text: '9 T-shaped ribs' }, { text: 'no intercostals', at: 1 }, { text: 'transversus sling', at: 2 }, { text: 'breathing before the shell', at: 3 }],
      side: true,
      notes: [
        'Nine broad, overlapping, stiff ribs. No intercostals: no Sharpey\'s fibers on the cranial rib edges.',
        'But the transversus sling is already present. The rigid trunk probably served digging, and abdominal breathing came along ~50 Myr before a complete shell.'
      ]
    }),

    K.plate('accessory', 'Softshells', {
      tier: 2, min: 1.5, mini: turtle('Trionychia'),
      head: { name: 'Breathing and peeing, oddly' },
      panels: [I('3D_Apalone-softshell_sketchfab-preview.jpg', SF('Florida Softshell Turtle', 'Environmental Archaeology Program'))],
      foot: [{ text: 'cloacal bursae' }, { text: '_Rheodytes_', at: 1 }, { text: 'urea out the mouth', at: 2 }],
      notes: [
        'Aquatic turtles exchange gas across vascular cloacal bursae. _Rheodytes_ (Fitzroy River turtle) gets a large share of its O₂ this way.',
        '⚠ Not "nearly entirely dependent". Say "a large fraction while resting".',
        'Chinese softshell excretes urea through its mouth, rinsing the buccal cavity while submerged (Ip et al. 2012; verify).'
      ]
    }),

    K.plate('neck', 'Neck retraction', {
      min: 4,
      head: { name: 'Hiding the head', facts: 'Werneburg & Maier 2019' },
      panels: [
        I('D02_turtle_neck_retraction.gif', 'Schematic after Werneburg & Maier 2019'),
        I('WerneburgMaier2019_Fig2_akinesis-on-turtle-tree.jpg', 'Werneburg & Maier 2019', { at: 1 })
      ],
      foot: [
        { text: 'wall: epipterygoid (cryptodires) · parietal flange (pleurodires)', at: 2 },
        { text: 'trochlea: otic · pterygoid', at: 3 }
      ],
      notes: [
        'Pleurodires fold the neck sideways under the shell rim; cryptodires pull it straight back in a vertical S.',
        'Both have an akinetic skull, built two ways. Lateral braincase wall: cryptodires use the epipterygoid (ascending process of the palatoquadrate = mammalian alisphenoid); pleurodires a descending flange of the parietal.',
        'The jaw-muscle trochlea is not homologous: otic in cryptodires, pterygoid in pleurodires. Same function, different bone.',
        'Hypothesis: how the embryo retracts its neck loads the palatoquadrate differently, and that sets which route the skull takes. Fig 2 arrow: increasing quadrate size and neck mobility, decreasing kinesis.'
      ]
    }),

    K.plate('matamata', 'Matamata', {
      min: 3, mini: turtle('Pleurodira'),
      head: { name: '_Chelus_', facts: 'matamata · Lemell et al. 2002' },
      panels: [
        I('D03_matamata_suction.gif', 'Schematic after Lemell et al. 2002'),
        I('Lemell2002_Fig5_matamata-strike-sequence.jpg', 'Lemell et al. 2002', { at: 1 })
      ],
      foot: [{ text: 'max gape: 20 ms', at: 1 }, { text: 'ram, ram, ram, suction', at: 2 }, { text: 'vestigial tongue', at: 3 }],
      notes: [
        'Slow stalk (~0.36 cm/s), then a head thrust at ~178 cm/s, maximum gape in 20 ms, a full gape cycle in 83 ms.',
        'The suction is confined to the last ~10 ms.',
        'Alligator snapping turtle: a pink worm-like tongue lure.'
      ]
    }),

    K.plate('matamata2', 'Matamata hyoid', {
      tier: 2, min: 2, mini: turtle('Pleurodira'),
      head: { name: '_Chelus_ hyoid and neck', facts: 'Lemell et al. 2002' },
      panels: [
        I('Lemell2002_Fig2_matamata-skull-hyoid-CT.jpg', 'Lemell et al. 2002', { label: 'hyoid = mouth floor' }),
        I('Lemell2002_Fig4_matamata-neck-S-curve.jpg', 'Lemell et al. 2002', { label: 'C3–C7 S-curve', at: 1 })
      ],
      notes: ['The hyoid covers the whole floor of the mouth; the tongue is vestigial so it takes up no buccal volume.', 'Neck folded C3–C7 like a spring.', 'Callback to L1: a huge hyoid was the salamander ID cue. The matamata is the exception you warned about.']
    }),

    K.plate('life', 'Life history', {
      min: 2,
      head: { name: 'Sex and age' },
      panels: [],
      foot: [{ text: 'single phallus' }, { text: 'TSD: turtles · crocodylians · tuatara', at: 1 }, { text: 'slow senescence', at: 2 }, { text: 'Jonathan: 190+ years', at: 2 }],
      notes: [
        'A single, very large phallus stored in the cloaca; the shell keeps the cloacae apart.',
        'Temperature-dependent sex determination in many turtles, all crocodylians, and the tuatara: one thread through today.',
        'Negligible or slow senescence in many turtles (da Silva et al. 2022; Reinke et al. 2022, both _Science_). Jonathan, Seychelles giant tortoise on St Helena, 190+.',
        '⚠ Drop the "Civil War musket balls dated by lead isotopes" story (no source found) and "functionally immortal".'
      ]
    }),

    K.plate('leatherback', 'Leatherback', {
      tier: 2, min: 1, mini: turtle('Americhelydia'),
      head: { name: 'Leatherback', facts: '_Dermochelys_' },
      panels: [],
      foot: [{ text: 'gigantothermy' }, { text: 'countercurrent retia' }, { text: 'insulating fat' }, { text: 'carapace of ossicles' }],
      notes: ['Countercurrent retia in the flippers; a carapace reduced to a mosaic of ossicles in leathery skin.']
    }),

    /* ============================================================ crocodylians */
    K.part('p-crocs', 'Crocodylia'),

    K.tree('croc-tree', 'Crocodylia', {
      min: 2, src: CROCODYLIA,
      steps: [{}, { hi: ['Alligatoridae'] }, { hi: ['Gavialidae'] }],
      notes: [
        '~27–28 species. _Alligator_: US + China, the same disjunct pattern as cryptobranchids (L1).',
        '⚠ The 440 notes call _Tomistoma_ "convergently narrow". Molecular data put _Tomistoma_ with _Gavialis_, so the narrow snout is probably shared. Morphology long disagreed.'
      ]
    }),

    K.plate('croc-id', 'Snouts', {
      min: 2,
      head: { name: 'Snouts' },
      panels: [
        I('3D_Alligator-skull_sketchfab-preview.jpg', SF('Alligator Skull', 'Eric Bauer'), { label: '_Alligator_' }),
        I('3D_Gavialis-gharial-skull_sketchfab-preview.jpg', SF('Gharial Skull (NHMW-ZOO-HS-40.835)', 'Natural History Museum Vienna', 'CC BY-NC 4.0'), { label: '_Gavialis_', at: 1 })
      ],
      foot: [{ text: '4th dentary tooth', at: 2 }, { text: 'narrow snout → more fish', at: 3 }],
      notes: ['Alligators hide the lower teeth when the mouth is shut (the broad snout overlaps them). Crocodiles show the 4th dentary tooth.', 'Narrower snouts eat more fish.']
    }),

    K.plate('heart', 'Heart', {
      min: 5,
      head: { name: 'Four chambers that can act like three', facts: 'Cook et al. 2017' },
      panels: [
        I('Cook2017_Fig13_three-arterial-trunks.jpg', 'Cook et al. 2017', { label: 'two aortas' }),
        I('Cook2017_Fig10_foramen-of-Panizza.jpg', 'Cook et al. 2017', { label: 'foramen of Panizza', at: 1 })
      ],
      foot: [{ text: 'left aorta ← right ventricle' }, { text: 'cog-teeth', at: 2 }, { text: 'right-to-left shunt', at: 2 }, { text: 'no oval fossa', at: 3 }],
      notes: [
        '_Crocodylus niloticus_. Fully septated ventricles; the membranous septum is probably proportionally larger than in any mammal.',
        'Left aorta arises from the *right* ventricle; right aorta from the left. They talk through the foramen of Panizza: a small window at their bases, in no other vertebrate, framed by cartilage with a crescent of smooth muscle.',
        'Toothed connective-tissue nodules ("cog-teeth") in the pulmonary outflow can partly close it, sending right-ventricle blood out the left aorta and bypassing the lungs in dives and digestion. (The gastric-acid hypothesis, Farmer et al. 2008, is contested.)',
        'No oval fossa (as in birds, monotremes, reptiles; only placentals have the two-part septum with a foramen ovale).',
        'Shared with humans: the cranial offset of the left AV orifice. A developmental program across ~300 Myr. Your `alligator_xsec.png` fits here.'
      ]
    }),

    K.plate('heart2', 'Outflow cartilages', {
      tier: 2, min: 1.5,
      head: { name: 'Outflow cartilages', facts: 'Cook et al. 2017' },
      panels: [I('Cook2017_Fig15_outflow-cartilages.jpg', 'Cook et al. 2017')],
      foot: [{ text: 'two cartilages, not one' }],
      side: true,
      notes: ['Corrects White 1956\'s one-cartilage account to two.']
    }),

    K.plate('piston', 'Hepatic piston', {
      min: 4,
      head: { name: 'Breathing', facts: 'crocodylians' },
      panels: [
        I('D04_croc_hepatic_piston.gif', 'Schematic after Farmer & Carrier 2000', { label: 'diaphragmaticus' }),
        I('3D_Alligator-skull_sketchfab-preview.jpg', SF('Alligator Skull', 'Eric Bauer'), { label: 'secondary palate', at: 2 })
      ],
      foot: [{ text: 'pubis + gastralia → liver', at: 1 }, { text: 'gular valve', at: 2 }, { text: 'one-way airflow', at: 3 }],
      legend: SHORTEN,
      notes: [
        'The diaphragmaticus runs from the pubis and gastralia to the liver and pulls it back like a piston.',
        'Contrast the turtle "diaphragmaticus" (= transversus thoracis): same name, different muscle. Best "two names, not homologous" moment of the day.',
        'Secondary palate + palatal (gular) valve: breathe with the mouth open underwater.',
        'Unidirectional airflow in alligator lungs, as in birds, with no air sacs (Farmer & Sanders 2010). Set up L4: one-way flow is probably archosaurian.'
      ]
    }),

    K.plate('gut', 'Stomach', {
      min: 2.5,
      head: { name: 'Stomach', facts: '_Crocodylus niloticus_ · Shaker & Ibrahium 2021' },
      panels: [
        I('Shaker2021_Fig1_croc-GI-in-situ.jpg', 'Shaker & Ibrahium 2021'),
        I('Shaker2021_Fig2_croc-two-sac-stomach.jpg', 'Shaker & Ibrahium 2021', { at: 1 })
      ],
      foot: [{ text: 'fundic sac: 3 muscle layers', at: 1 }, { text: 'pyloric sac', at: 1 }, { text: 'gastroliths', at: 2 }, { text: 'no caecum', at: 3 }],
      notes: [
        'Two-sac stomach: a large C-shaped fundic sac with convoluted mucosa and three muscle layers (gizzard-like), a small spherical pyloric sac, a strong sphincter between.',
        'Caimans have a single sac: not universal in the clade.',
        'Double duodenal loop with the pancreas on it (_Alligator_ single). S-shaped colorectum with chambers and sphincters.'
      ]
    }),

    K.plate('jaw', 'Crocodylian jaw', {
      tier: 2, min: 2,
      head: { name: 'Jaw', facts: 'the retroarticular lever' },
      panels: [
        I('J5_alligator_jaw.gif', '_Alligator mississippiensis_ · OUVC 10389 · Witmer Lab · MorphoSource 000542268'),
        I('3D_Crocodylus-moreletii-jaw-muscles_sketchfab-preview.jpg', SF('3D Jaw muscles of Crocodylus moreletii', 'Holliday Lab'), { at: 1 })
      ],
      legend: SHORTEN,
      notes: ['Depressor mandibulae pulls up on the retroarticular process behind the joint; the adductors close.']
    }),

    K.plate('forelimb', 'Forelimb', {
      min: 2.5,
      head: { name: 'Forelimb', facts: 'Meers 2003' },
      panels: [
        I('F3_alligator_forelimb.gif', '_Alligator mississippiensis_ · UF Herp 21461 · oVert · MorphoSource 000600642'),
        I('Meers2003_Fig2_alligator-brachial-plexus.jpg', 'Meers 2003', { label: 'spinal nerves VII–XI', at: 1 })
      ],
      legend: SHORTEN,
      notes: ['Forelimb muscles are conservative across all crocodylians. Brachial plexus from spinal nerves VII–XI (lizards ~6–10, L3).']
    }),

    K.plate('limbs', 'Gallop or grip', {
      min: 2.5,
      head: { name: 'Crocodylids vs. alligatorids', facts: 'Allen et al. 2014' },
      panels: [I('Allen2014_Fig1_croc-limb-muscles.jpg', 'Allen et al. 2014')],
      foot: [{ text: 'crocodylids: long fascicles · gallop' }, { text: 'alligatorids: big PCSA · force', at: 1 }, { text: 'caudofemoralis longus', at: 2 }],
      side: true,
      notes: [
        'Crocodylids: longer forelimb fascicles and heavier forelimbs (2.7% vs. 2.2% of body mass), built for displacement. Crocodylids gallop; alligatorids rarely do.',
        'Caudofemoralis longus, tail to femur: the largest locomotor muscle, and the one you reconstruct in theropods.',
        'For students who like hips: Wiseman et al. 2021 models Nile crocodile hindlimb leverage across postures.'
      ]
    }),

    K.plate('klink', 'Croc limbs in 3D', {
      tier: 2, min: 1.5,
      head: { name: '_Crocodylus porosus_', facts: 'Klinkhamer et al. 2017' },
      panels: [
        I('Klinkhamer2017_Fig5_croc-forelimb-3D.jpg', 'Klinkhamer et al. 2017'),
        I('Klinkhamer2017_Fig12_croc-hindlimb-3D.jpg', 'Klinkhamer et al. 2017', { at: 1 })
      ],
      foot: [{ text: 'flexor tibialis internus: 4 parts', at: 1 }, { text: 'one-headed ambiens', at: 1 }],
      notes: ['Digital dissection. The hindlimb carries most of the variation among crocodylians. Single-headed ambiens, possibly an age effect.']
    }),

    K.plate('iso', 'ISOs', {
      tier: 2, min: 1,
      head: { name: 'Integumentary sensory organs' },
      panels: [],
      foot: [{ text: 'dome pressure receptors' }, { text: 'V' }, { text: 'gentler than a fingertip', at: 1 }],
      notes: ['On the jaws (all over the body in crocodylids), innervated by V. More sensitive than a fingertip, which is how a croc carries hatchlings in its mouth (Leitch & Catania 2012).']
    }),

    /* ============================================================ Sphenodon */
    K.part('p-sphen', '_Sphenodon_'),

    K.plate('tuatara', 'Tuatara', {
      min: 2,
      head: { name: '_Sphenodon punctatus_', facts: 'tuatara' },
      panels: [I('3D_MS_Sphenodon-whole-body-UF14110_view1_side.jpg', '_Sphenodon punctatus_ · UF Herp 14110 · oVert · MorphoSource 000011010')],
      foot: [{ text: '1 species' }, { text: 'Rhynchocephalia', at: 1 }, { text: 'New Zealand islands', at: 1 }, { text: 'active at 5–12 °C', at: 2 }],
      notes: [
        'One species. "_S. guntheri_" was sunk in 2010 on genetic data (Hay et al. 2010). ⚠ The 440 notes list two.',
        'The last rhynchocephalian; the group was diverse and global in the Mesozoic.',
        '_sphēn_ wedge + _odōn_ tooth. Tuatara is Māori for "peaks on the back".'
      ]
    }),

    K.plate('sph-skull', '_Sphenodon_ skull', {
      min: 3,
      head: { name: 'The "perfect diapsid"' },
      panels: [
        I('3D_MS_Sphenodon-skull-UF11978_view1_side.jpg', '_Sphenodon punctatus_ · UF Herp 11978 · oVert · MorphoSource 000011003'),
        I('WerneburgPreuschoft2024_Fig1_Sphenodon-Chelydra-temporal-terms.jpg', 'Werneburg & Preuschoft 2024', { at: 1 })
      ],
      foot: [{ text: 'lower temporal bar: re-evolved', at: 1 }, { text: 'parietal eye', at: 2 }, { text: 'no tympanum', at: 2 }],
      notes: [
        'Complete lower temporal bar: the jugal meets the quadratojugal and squamosal.',
        '⚠ Not "the most plesiomorphic diapsid skull". Most Mesozoic rhynchocephalians had an open lower bar; _Sphenodon_ re-evolved it (Whiteside 1986; Jones 2008).',
        'Also the prediction from Werneburg & Preuschoft: a strong anterior bite builds an infratemporal bar.',
        'Parietal ("third") eye with lens and retina under the skin, most visible in hatchlings. No tympanum, no external ear opening.'
      ]
    }),

    K.plate('teeth', 'Saw and groove', {
      min: 3,
      head: { name: 'Saw and groove' },
      panels: [I('J3_Sphenodon_propalinal_shear.gif', '_Sphenodon punctatus_ · UF Herp 14110 · oVert · MorphoSource 000011010')],
      foot: [{ text: 'acrodont' }, { text: 'maxillary + palatine rows', at: 1 }, { text: 'propalinal slide', at: 2 }, { text: 'worn flat with age', at: 3 }],
      side: true,
      legend: SHORTEN,
      notes: [
        'Acrodont teeth fused to the jaw crest, not replaced in adults.',
        'Two upper rows: maxillary + palatine. ⚠ The 440 notes say the second row is pterygoid. It is the *palatine*.',
        'The dentary row closes into the groove between them, then the lower jaw slides forward: a fore-aft sawing stroke.',
        'Old adults wear the teeth flat; the front "incisors" are toothlike premaxilla projections worn down to bone.'
      ]
    }),

    K.plate('scales', 'Scales', {
      min: 1.5,
      head: { name: 'Scales', facts: 'Chang et al. 2009' },
      panels: [I('Chang2009_Fig1_reptile-scale-types.jpg', 'Chang et al. 2009')],
      foot: [{ text: 'β-keratin' }, { text: 'no follicle', at: 1 }],
      side: true,
      notes: ['All reptile scales are β-keratin over a dermal core with no follicle: the key difference from feathers and hair (L4).']
    }),

    K.grid('gastralia', 'Gastralia', {
      min: 3, reveal: 'col',
      head: ['', 'kept', 'in the plastron', 'lost'],
      rows: [['gastralia', 'crocodylians · _Sphenodon_', 'turtles', 'squamates · birds · mammals']],
      notes: [
        'Gastralia constrain breathing during locomotion (Carrier\'s constraint).',
        '_Sphenodon_ also has uncinate processes on the ribs, as in birds.',
        'No intromittent organ in _Sphenodon_: cloacal apposition. Squamates have hemipenes, so the male tuatara tells you hemipenes are a squamate novelty.'
      ]
    }),

    K.plate('sph-repro', 'No hemipenes', {
      min: 1,
      head: { name: '_Sphenodon_ trunk' },
      panels: [],
      foot: [{ text: 'uncinate processes' }, { text: 'no hemipenes', at: 1 }, { text: 'hemipenes: a squamate novelty', at: 2 }],
      notes: ['Lyson Fig 2: the _Sphenodon_ hypaxials are the comparison set for the turtle breathing muscles.']
    }),

    /* ============================================================ review */
    K.clues('test', 'If I tell you on a test…', {
      min: 4,
      rows: [
        { c: ['diapsid', 'no temporal openings', 'girdles inside the ribs', 'beak, no teeth'], a: 'Testudines' },
        { c: ['neck folds sideways'], a: 'Pleurodira', more: true },
        { c: ['leathery carapace', 'snorkel nose'], a: 'Trionychidae', more: true },
        { c: ['antorbital + mandibular fenestrae', 'thecodont', 'secondary palate', 'foramen of Panizza'], a: 'Crocodylia' },
        { c: ['4th lower tooth hidden'], a: 'Alligatoridae', more: true },
        { c: ['lower temporal bar', 'acrodont', 'palatine tooth row', 'gastralia', 'no hemipenes'], a: '_Sphenodon_' }
      ]
    }),

    K.plate('practice', 'Practice tree', {
      min: 1,
      head: { name: 'Build the tree' },
      panels: [],
      foot: ['box turtle', 'sea turtle', 'softshell', 'matamata', 'snapping turtle', 'alligator', 'gharial', 'Nile crocodile', 'tuatara', 'iguana', 'pigeon'].map((text) => ({ text })),
      notes: ['2018 exam 2 asked "river turtle, sea turtle"; 2020 exam 2 had "salamander & turtle", "lizard & turtle".']
    }),

    K.tree('practice-a', 'Practice tree: answer', {
      min: 3, src: PRACTICE,
      steps: [{}, { hi: ['Testudines'] }, { hi: ['Archosauria'] }, { hi: ['Lepidosauria'] }],
      notes: ['Turtles + lepidosaurs was also accepted on past tests.']
    })
  ];

  window.DECK = { title: 'Turtles, crocodylians, tuatara', session: 80, minutes: 55, segments };
})();
