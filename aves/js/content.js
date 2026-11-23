/* Lecture 4 of 5: Aves. From lectures/outlines/L4_Aves.md in the comparative repo.
 * On screen: clade names, anatomy, a few numbers. Everything else is in notes (S). */
(function () {
  'use strict';
  const K = window.Kit, I = K.img;
  const SF = (name, by, lic) => `"${name}" by ${by} · Sketchfab · ${lic || 'CC BY 4.0'}`;
  const SHORTEN = '*red* = shortening';

  const AVES = `
Aves
  Palaeognathae | ratites, tinamous
  Neognathae
    Galloanserae
      Galliformes | landfowl
      Anseriformes | waterfowl
    ~Neoaves
      Strisores | nightjars, swifts, hummingbirds
      Columbaves | pigeons, cuckoos, bustards
      Gruiformes | rails, cranes
      Aequorlitornithes | waterbirds
      Telluraves | landbirds`;
  const av = (hi) => ({ src: AVES, hi });

  const PALAEO = `
Palaeognathae
  ostrich
  .
    rheas
    .
      .
        tinamous
        moa †
      .
        emu, cassowary
        .
          kiwi
          elephant bird †`;

  const LAND = `
Telluraves | landbirds
  ~Afroaves
    hawks, eagles
    owls
    kingfishers, woodpeckers
  Australaves
    seriemas
    .
      falcons
      .
        parrots
        Passeriformes | passerines`;

  const PRACTICE = `
Aves
  ostrich
  Neognathae
    Galloanserae
      Galliformes
        chicken
        peacock
      Anseriformes
        mallard
        goose
    ~Neoaves
      loon
      pelican
      kookaburra
      .
        parrot
        Passeriformes
          tyrant flycatcher
          crow`;

  const segments = [
    K.cover('Aves', {
      sub: 'birds',
      pic: 'img/3D_MS_Struthio-ostrich-skull-OUVC10636_view1_side.jpg', cap: '_Struthio camelus_ · OUVC 10636 · Witmer Lab · MorphoSource 000542253',
      notes: [
        'Birds are theropod dinosaurs, so start from what was *already there*: feathers, air sacs and pneumatic bones, one-way lung airflow (seen in crocodylians, L2), the furcula, bipedal hindlimbs, brooding. Then what flight remodeled.',
        'Thesis: "Most of what makes a bird a bird evolved before birds."',
        'Use crocodylians as the bracket all lecture: if crocs and birds share it, assume it is archosaurian.'
      ]
    }),

    K.plate('moa', 'The moa', {
      min: 3,
      head: { name: 'Moa', facts: 'Huynen et al. 2014' },
      panels: [
        I('3D_Dinornis-giant-moa_sketchfab-preview.jpg', SF('Giant Moa (Dinornis robustus)', 'Museo [UV] Historia Natural')),
        I('Huynen2014_Fig1_moa-wing-and-tbx5-network.jpg', 'Huynen et al. 2014', { at: 1 }),
        I('Huynen2014_Fig4_moa-tbx5-chick-hindlimb.jpg', 'Huynen et al. 2014', { at: 2 })
      ],
      foot: [{ text: 'no humerus · no hand' }, { text: '_Tbx5_ still works', at: 1 }, { text: 'moa _Tbx5_ → feathered chick leg', at: 2 }],
      notes: [
        'Not reduced wings: no humerus, no hand; only a tiny vestigial scapulocoracoid.',
        'Yet _Tbx5_, the forelimb-identity switch, recovered from ~600-year-old bone, is fully functional: it activates target promoters as well as chicken _Tbx5_.',
        'In a chick *hindlimb* it makes the leg sprout feathers and turns digit IV toward a wing digit. The wing was lost *downstream* of the switch.',
        'Theme: development keeps machinery long after the structure is gone (Dollo\'s law, reconsidered).'
      ]
    }),

    K.path('where', 'Where we are', {
      min: 1, root: 'Vertebrata', to: 'Aves',
      steps: [{}, { hi: ['Archosauria'] }, { hi: ['Aves'] }],
      notes: ['~11,000 species: the largest group of "reptiles".']
    }),

    K.path('dinos', 'Birds are dinosaurs', {
      min: 2.5, root: 'Archosauria', to: 'Aves', fossils: true, px: 38,
      steps: [{}, { hi: ['Dinosauria'] }, { hi: ['Theropoda'] }, { hi: ['Aves'] }],
      marks: [
        { on: 'Dinosauria', text: 'perforate acetabulum · erect limbs', at: 1 },
        { on: 'Theropoda', text: 'furcula · hollow bones · feathers', at: 2 }
      ],
      notes: [
        'Archosauria → Ornithodira → Dinosauria → Saurischia → Theropoda → Paraves → Aves (365 phylogeny §14).',
        'Kept from dinosaurs: perforate acetabulum, erect limbs under the body, digitigrade feet, furcula (already in theropods), hollow pneumatic bones, feathers, brooding posture.'
      ]
    }),

    K.tree('tree', 'Aves', {
      min: 4, src: AVES, subs: true,
      steps: [{}, { hi: ['Palaeognathae'] }, { hi: ['Galloanserae'] }, { hi: ['Neoaves'] }],
      notes: [
        'Condensed from the 2018 Aves I and II decks (Prum et al. 2015-style backbone).',
        'Targets: palaeognaths sister to all other birds; Galloanserae sister to Neoaves.',
        '⚠ The Neoaves backbone still shifts between genomic studies (Jarvis 2014; Prum 2015; Stiller et al. 2024). Test only the robust nodes.',
        'Aequorlitornithes: flamingos + grebes, shorebirds, loons, tubenoses, penguins, storks, pelicans, cormorants.'
      ]
    }),

    K.tree('land', 'Landbirds', {
      min: 1.5, src: LAND,
      steps: [{}, { hi: ['falcons'] }],
      notes: ['Falcons are closer to parrots and passerines than to hawks: not raptor kin. A robust molecular result.', 'Passeriformes: NZ wrens (rifleman) | Tyranni (suboscines) | Passeri (oscines).']
    }),

    K.tree('palaeo', 'Palaeognathae', {
      min: 2.5, src: PALAEO,
      steps: [{}, { hi: ['tinamous'] }, { hi: ['kiwi', 'elephant bird'] }],
      notes: [
        'Ratites are not a clade: flighted tinamous nest inside them.',
        'The kiwi\'s closest relative is the extinct Madagascan elephant bird, not the moa (Mitchell et al. 2014, _Science_).',
        'So flightlessness evolved several times in palaeognaths: back to the moa hook.',
        'Placement of rheas varies between studies; the ostrich-first split and the two pairings shown are the points to teach.'
      ]
    }),

    /* ------------------------------------------------------------ feathers */
    K.plate('feathers', 'Feathers', {
      min: 4,
      head: { name: 'Feathers', facts: 'Chang et al. 2009' },
      panels: [I('Chang2009_Fig1_reptile-scale-types.jpg', 'Chang et al. 2009')],
      foot: [
        { text: 'follicle' },
        { text: 'calamus → rachis → barbs → barbules → hooklets', at: 1 },
        { text: 'dermis: where · epidermis: what', at: 2 },
        { text: 'leg scales from feathers', at: 3 }
      ],
      side: true,
      notes: [
        'Hooklets (hamuli) zip the vane; down lacks them.',
        'Feathers grow from a follicle, proximal to distal from a dermal papilla. Scales have no follicle. Feather β-keratins appeared ~150–180 Ma in archosaurs.',
        'Dhouailly\'s recombination: lizard epidermis + chick dermis gives scales in a feather-like pattern. The dermis sends the "where"; the epidermis decides the "what".',
        'Bird leg (scutate) scales are secondarily derived from feathers, not retained reptile scales. Feathered-foot pigeons flip the switch back (Dhouailly 2009).'
      ]
    }),

    /* ------------------------------------------------------------ flight skeleton */
    K.part('p-flight', 'The flight skeleton'),

    K.plate('bone', 'Wing bones', {
      min: 2.5,
      head: { name: 'Light bones', facts: 'Chin et al. 2017' },
      panels: [I('Chin2017_Fig2_wing-bone-loading.jpg', 'Chin et al. 2017')],
      foot: [{ text: 'pneumatic foramina' }, { text: 'thin walls · wide diameter', at: 1 }, { text: 'laminar bone', at: 2 }],
      side: true,
      notes: [
        'Air sacs invade vertebrae, humerus, sometimes femur through pneumatic foramina.',
        'Bird and bat bones save weight by thin walls and large diameter plus ~3% lower mineralization, *not* lower bone density.',
        'Bird wing bones are often laminar with circular canals, resisting torsion. Bat wing bones are not.'
      ]
    }),

    K.plate('shoulder', 'Shoulder', {
      min: 4,
      head: { name: 'Shoulder and keel', facts: 'Suzuki et al. 2014' },
      panels: [
        I('Suzuki2014_Fig4_tinamou-sternum-keel.jpg', 'Tinamou · Suzuki et al. 2014'),
        I('Suzuki2014_Fig1_tinamou-scapula-coracoid.jpg', 'Tinamou · Suzuki et al. 2014', { at: 1 })
      ],
      foot: [{ text: 'coracoid strut', at: 1 }, { text: 'furcula', at: 1 }, { text: 'triosseal canal', at: 2 }, { text: 'supracoracoideus raises', at: 2 }, { text: 'acrocoracohumeral ligament', at: 3 }],
      notes: [
        'Coracoid: a strut from sternum to shoulder (a process on the scapula in mammals). Furcula = fused clavicles, a spring.',
        'Supracoracoideus pulley: it sits under the pectoralis on the keel; its tendon runs through the triosseal canal (coracoid + scapula + furcula) and inserts on top of the humerus, so a ventral muscle raises the wing.',
        'Tinamous (flying palaeognaths) have a keel and the two muscles act as antagonists. Ratites keep both but they no longer oppose each other.',
        'Acrocoracohumeral ligament: taut through the downstroke and most of the upstroke, a passive stabilizer.'
      ]
    }),

    K.plate('hand', 'Hand', {
      min: 2,
      head: { name: 'Hand' },
      panels: [I('3D_Tinamus-great-tinamou_sketchfab-preview.jpg', SF('Great Tinamou - Tinamus major', 'MooreLab'))],
      foot: [{ text: 'carpometacarpus' }, { text: 'alula + 2 digits', at: 1 }, { text: 'II–III–IV or I–II–III?', at: 2 }, { text: 'frame shift', at: 3 }],
      notes: [
        'Embryos form digits in positions II–III–IV, but they look like I–II–III. A frame shift is the leading explanation, which matters for the theropod link (Tamura et al. 2011, via Suzuki et al. 2014).',
        'Propatagium: its tensor muscle has multiple developmental origins (Uno et al. 2025, _J Anat_). The PDF was still syncing when the outline was written: read it before using.'
      ]
    }),

    K.plate('coupling', 'Automatic wrist', {
      min: 4,
      head: { name: 'Elbow and wrist move together', facts: 'Chin et al. 2017' },
      panels: [
        I('F4_bird_wing_coupling.gif', '_Larus brachyrhynchus_ · KU Birds 67424 · MorphoSource 000476291'),
        I('Chin2017_Fig3_wing-muscles-EMG.jpg', 'Chin et al. 2017', { at: 2 })
      ],
      foot: [{ text: 'radius: tension · ulna: compression', at: 1 }, { text: 'bats lack it', at: 2 }, { text: 'ECR fires in extension', at: 3 }],
      legend: SHORTEN,
      notes: [
        'Radius and ulna lie parallel with an offset. Extending the elbow drives the radius along the ulna and extends the wrist automatically: the distal wing under proximal muscle control.',
        'Bats lack it: more skeletal degrees of freedom, fingers reshape the membrane.',
        '⚠ Anatomy can mislead: extensor carpi radialis "should" flex the elbow by its attachments, yet EMG shows it fires only during extension. The linkage changes what a muscle does.'
      ]
    }),

    K.plate('flight-tree', 'Flight, three times', {
      tier: 2, min: 1.5,
      head: { name: 'Birds and bats', facts: 'Chin et al. 2017' },
      panels: [I('Chin2017_Fig1_bird-bat-flight-phylogeny.jpg', 'Chin et al. 2017')],
      notes: []
    }),

    K.plate('leg', 'Trunk and leg', {
      min: 3,
      head: { name: 'Trunk, hip, leg' },
      panels: [I('H3_bird_ankle.gif', '_Anseranas semipalmata_ · NHMUK 1852.7.22.1 · MorphoSource 000083602')],
      foot: [
        { text: 'notarium · synsacrum · pygostyle' },
        { text: 'tibiotarsus · tarsometatarsus', at: 1 },
        { text: 'knee does the work', at: 2 },
        { text: 'anisodactyl · zygodactyl · didactyl', at: 3 }
      ],
      side: true,
      legend: SHORTEN,
      notes: [
        'Notarium = fused thoracic vertebrae. Uncinate processes too.',
        'The femur is held near-horizontal, so the knee does most of the stride work.',
        'Zygodactyl: parrots, woodpeckers, cuckoos; owls and ospreys semi-zygodactyl (reversible 4th toe). Didactyl: ostrich.',
        'Lab: `Labs/PoultryAnatomyandPhysiologyPres.pdf`; the pigeon dissection handout.'
      ]
    }),

    /* ------------------------------------------------------------ breathing, heat */
    K.part('p-inside', 'Lungs, heart, heat'),

    K.plate('air', 'Air sacs', {
      min: 5,
      head: { name: 'A lung that doesn\'t move' },
      panels: [I('D08_bird_air_sacs.gif', 'Schematic')],
      foot: [{ text: 'air sacs: bellows' }, { text: 'two breaths, one bolus', at: 1 }, { text: 'cross-current', at: 2 }, { text: 'one-way flow: alligators, monitors', at: 3 }],
      side: true,
      notes: [
        'Rigid parabronchial lungs; the air sacs are the bellows.',
        '⚠ Gas exchange is *cross-current*, not countercurrent. Capillaries run perpendicular to parabronchial airflow. Still beats alveoli: arterial PO₂ can exceed exhaled PO₂. Save "countercurrent" for fish gills.',
        'Archosaur bracket: one-way flow also in alligators (L2) and monitor lizards (L3), with no air sacs (Farmer & Sanders 2010; Schachner et al. 2014). Older than birds, maybe older than archosaurs.',
        'Uncinate processes lever the ribs and sternum. Bar-headed geese over the Himalayas.'
      ]
    }),

    K.grid('heat', 'Heart and heat', {
      min: 5, reveal: 'col',
      head: ['', 'birds', 'mammals'],
      rows: [
        ['4 chambers', 'yes', 'yes, independently'],
        ['aortic arch', 'right', 'left'],
        ['UCP1 brown fat', 'none', 'eutherians'],
        ['heat from', 'muscle: sarcolipin', 'brown fat'],
        ['loop of Henle', 'some nephrons', 'yes']
      ],
      notes: [
        'Crocodylians keep both aortas (L2): the archosaur outgroup condition. Birds lost the left.',
        'Birds have no UCP1; it was lost in the reptile stem. Heat from skeletal muscle: ANT-mediated uncoupling and sarcolipin-driven futile Ca²⁺ cycling. The same trick as the billfish heater organ (modified eye muscle), independently.',
        'Legendre & Davesne 2020: avian endothermy partly a by-product of large theropod and flight muscles.',
        'Chick limb mesenchyme can still be driven to make brown-fat-like cells with PGC-1α in culture (Mezentseva et al. 2008).',
        'Kidney: uric acid as a paste. Birds also have loops of Henle in "mammalian-type" nephrons. ⚠ In L5 don\'t call the loop "mammal-only".'
      ]
    }),

    /* ------------------------------------------------------------ feeding */
    K.part('p-feed', 'Feeding without teeth'),

    K.plate('hyoid', 'Tongue skeleton', {
      min: 4,
      head: { name: 'Tongue skeleton', facts: 'Johnston 2014' },
      panels: [
        I('Johnston2014_Fig2_chicken-hyoid.jpg', 'Chicken · Johnston 2014'),
        I('Johnston2014_Fig3_swan-hyoid-horns.jpg', 'Swan · Johnston 2014', { at: 2 }),
        I('Johnston2014_Fig4_kestrel-tongue.jpg', 'Kestrel · Johnston 2014', { at: 3 })
      ],
      foot: [{ text: 'up to 9 bones' }, { text: 'parrots: intrinsic muscles', at: 1 }, { text: 'horns around the skull', at: 2 }, { text: 'papillae grip', at: 3 }],
      notes: [
        'Hyoid: paraglossal/entoglossum, basihyale, urohyale, ceratobranchiale, epibranchiale. Johnston 2014 is a non-peer-reviewed review drawing on Gardner 1925, Lucas 1895, Homberger.',
        'Most birds have only extrinsic tongue muscles. Parrots have intrinsic ones: part of why they manipulate food (and maybe sound) so well.',
        'Woodpeckers and hummingbirds: hyoid horns wrap around the braincase. Flickers: they end at the right nostril; _Picus_: loop around the right eye. Herons: short low horns widen the gap for swallowing fish.',
        'Duck lamellae filter. Kestrel papillae point backward and grip.'
      ]
    }),

    K.plate('humming', 'Hummingbird tongue', {
      min: 2,
      head: { name: 'Hummingbird tongue' },
      panels: [I('3D_Archilochus-ruby-throated-hummingbird_sketchfab-preview.jpg', SF('Ruby-throated Hummingbird, WY Game and Fish', 'University of Wyoming Libraries'))],
      foot: [{ text: 'lamellae unfurl' }, { text: 'elastic micropump', at: 1 }],
      notes: ['⚠ Not "a passive capillary trap". The forked tip\'s lamellae unfurl in nectar and trap it by changing shape (Rico-Guevara & Rubega 2011). Later: an elastic micropump (Rico-Guevara et al. 2015).']
    }),

    K.plate('kinesis', 'Skull kinesis', {
      min: 2,
      head: { name: 'The upper bill moves' },
      panels: [
        I('J6_ostrich_cranial_kinesis.gif', '_Struthio camelus_ · OUVC 10636 · Witmer Lab · MorphoSource 000542253'),
        I('3D_Anas-mallard-skull-joints_sketchfab-preview.jpg', SF('Mallard duck skull joints', 'Holliday Lab'), { at: 1 })
      ],
      legend: SHORTEN,
      notes: ['Cranial kinesis: the upper bill rotates on a flexible zone as the quadrate swings.']
    }),

    K.plate('gut', 'Gut', {
      min: 2,
      head: { name: 'Gut' },
      panels: [],
      foot: [{ text: 'crop' }, { text: 'proventriculus + gizzard', at: 1 }, { text: 'croc two-sac stomach', at: 2 }, { text: 'crop milk · prolactin', at: 3 }],
      notes: [
        'Crop: an esophageal pouch. Proventriculus glandular; gizzard muscular, with grit.',
        'Matches the croc\'s two-sac stomach (L2, Shaker & Ibrahium 2021): another archosaur echo.',
        'Pigeon crop milk is made by both parents\' crop lining under prolactin, the same hormone as mammalian milk. Sets up L5.'
      ]
    }),

    /* ------------------------------------------------------------ voice, brain, reproduction */
    K.part('p-rest', 'Voice, brain, eggs'),

    K.plate('syrinx', 'Syrinx', {
      min: 3,
      head: { name: 'Syrinx' },
      panels: [],
      foot: [{ text: 'tracheobronchial junction' }, { text: 'two notes at once', at: 1 }, { text: 'oscines: many syringeal muscles', at: 2 }, { text: 'echolocation: oilbird · swiftlets', at: 3 }],
      notes: ['Paired sound sources. Suboscines have few intrinsic syringeal muscles.', '⚠ The oilbird is *not* the only echolocating bird: swiftlets (_Aerodramus_) click in caves too.']
    }),

    K.plate('brain', 'Brain', {
      min: 3,
      head: { name: 'Bird brains' },
      panels: [],
      foot: [{ text: 'pallium' }, { text: 'nidopallium caudolaterale', at: 1 }, { text: 'nuclei, not layers', at: 2 }, { text: 'more neurons per gram', at: 3 }],
      notes: [
        '⚠ The 440 framing said bird intelligence routes "through the thalamus, not the cerebrum". The integrative work is in the pallium, especially the nidopallium caudolaterale (functionally like prefrontal cortex).',
        'Corvid and parrot forebrains pack more neurons per gram than primate cortex (Olkowicz et al. 2016, _PNAS_). The "bird brain" error came from looking for layers.',
        'Corvids: hook-bending New Caledonian crows (also in the wild); traffic-light nut-cracking in Japanese crows (anecdotal).',
        '⚠ Cache-protection deception experiments are on western scrub-jays (Emery & Clayton), not crows.'
      ]
    }),

    K.plate('repro', 'Reproduction', {
      min: 4,
      head: { name: 'Reproduction' },
      panels: [],
      foot: [{ text: 'left ovary only' }, { text: 'phallus: palaeognaths · ducks · cracids', at: 1 }, { text: 'chicken: _Bmp4_ removes it', at: 2 }, { text: 'kiwi egg ~20% of mass', at: 3 }],
      notes: [
        'The right ovary and oviduct regress in development.',
        'Most birds have no phallus ("cloacal kiss"). Present, lymph-inflated, in palaeognaths, Anseriformes, some galliforms (cracids).',
        'In chickens the phallus starts to form and is removed by programmed cell death (_Bmp4_); turn that off and one grows back (Herrera et al. 2013).',
        'Duck genital arms race: counter-spiralling vaginae with blind pouches.',
        'Callback: the moa, _Tbx5_, the chicken phallus: loss by a downstream "off" switch with the upstream program intact.',
        'Altricial vs. precocial. Grebes carry chicks in a feather "pouch".'
      ]
    }),

    /* ------------------------------------------------------------ review */
    K.clues('test', 'If I tell you on a test…', {
      min: 4,
      rows: [
        { c: ['archosaur', 'toothless beak', 'furcula', 'carpometacarpus', 'pygostyle'], a: 'Aves' },
        { c: ['no keel', 'palaeognathous palate', 'but flies'], a: 'tinamou', more: true },
        { c: ['lymphatic phallus', 'lamellate bill'], a: 'Anseriformes', more: true },
        { c: ['hyoid horns around the skull'], a: 'woodpecker or hummingbird', more: true },
        { c: ['zygodactyl', 'intrinsic tongue muscles', 'hooked bill'], a: 'parrot', more: true },
        { c: ['right aortic arch', 'nucleated RBCs', 'uric acid', 'air sacs'], a: 'bird, not mammal' }
      ]
    }),

    K.plate('practice', 'Practice tree', {
      min: 1,
      head: { name: 'Build the tree', facts: '2018 exam 4' },
      panels: [],
      foot: ['ostrich', 'chicken', 'loon', 'peacock', 'mallard', 'parrot', 'goose', 'pelican', 'kookaburra', 'crow', 'tyrant flycatcher'].map((text) => ({ text }))
    }),

    K.tree('practice-a', 'Practice tree: answer', {
      min: 3, src: PRACTICE,
      steps: [{}, { hi: ['Galloanserae'] }, { hi: ['Neoaves'] }],
      notes: ['The 2018 answer paired loon + pelican; the current course tree leaves Neoaves open except parrots + passerines. This slide follows the course tree.']
    })
  ];

  window.DECK = { title: 'Aves', session: 80, minutes: 55, segments };
})();
