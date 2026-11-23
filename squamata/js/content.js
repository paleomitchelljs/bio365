/* Lecture 3 of 5: Squamata. From lectures/outlines/L3_Squamata.md in the comparative repo.
 * On screen: clade names, anatomy, a few numbers. Everything else is in notes (S). */
(function () {
  'use strict';
  const K = window.Kit, I = K.img;
  const SF = (name, by, lic) => `"${name}" by ${by} · Sketchfab · ${lic || 'CC BY 4.0'}`;
  const SHORTEN = '*red* = shortening';

  const SQUAMATA = `
Squamata
  Dibamidae | blind burrowers
  .
    Gekkota | geckos, pygopodids
    .
      Scincoidea | skinks, cordylids
      .
        Lacertoidea | lacertids, teiids, amphisbaenians
        Toxicofera
          Iguania | agamids, chameleons, iguanids
          .
            Anguimorpha | monitors, Gila monster, glass lizards
            Serpentes | snakes`;
  const sq = (hi) => ({ src: SQUAMATA, hi });

  const SNAKES = `
Serpentes
  Scolecophidia | blind snakes
  .
    boas & pythons
    .
      Viperidae | vipers
      .
        Elapidae | cobras, coral snakes
        Colubridae | racers, garter snakes`;
  const sn = (hi) => ({ src: SNAKES, hi });

  const PRACTICE = `
Squamata
  gecko
  .
    skink
    .
      Lacertoidea
        .
          tegu
          whiptail
        amphisbaenian
      Toxicofera
        monitor lizard
        Serpentes
          Viperidae
            rattlesnake
            cottonmouth
          .
            Elapidae
              cobra
              coral snake
            racer`;

  const segments = [
    K.cover('Squamata', {
      sub: 'lizards · amphisbaenians · snakes',
      pic: 'img/3D_MS_Gekko-smithii-CAS9595_view1_side.jpg', cap: '_Gekko smithii_ · CAS Herp 9595 · MorphoSource 000023462',
      notes: [
        'Picks up from _Sphenodon_, the lepidosaur outgroup: everything _Sphenodon_ lacks and squamates have is a squamate novelty (hemipenes, lost lower bar, streptostyly).',
        'Thesis: squamates are the course\'s best case of evolutionary lability. Limbs lost dozens of times, viviparity ~115 times, parthenogenesis repeatedly. The skull is "a kit of loosely hinged parts".'
      ]
    }),

    K.plate('hook', 'Pod Mrčaru', {
      min: 2,
      head: { name: 'Pod Mrčaru', facts: '_Podarcis siculus_' },
      panels: [],
      foot: [{ text: '1971: 5 pairs' }, { text: '~36 years', at: 1 }, { text: 'bigger heads · harder bites', at: 2 }, { text: 'cecal valves', at: 3 }],
      notes: [
        '2018 exam 4 asked about them. Five pairs put on an Adriatic islet in 1971.',
        'Within ~36 years: bigger heads, stronger bites, and cecal valves, a new gut structure for fermenting plants, never seen in the genus (Herrel et al. 2008, _PNAS_).',
        'Squamate anatomy changes fast. That is today\'s theme.'
      ]
    }),

    K.path('where', 'Where we are', {
      min: 1, root: 'Vertebrata', to: 'Squamata',
      steps: [{}, { hi: ['Diapsida'] }, { hi: ['Lepidosauria'] }, { hi: ['Squamata'] }],
      notes: ['~11,000–12,000 species, about as many as birds; ~4,000 snakes (Reptile Database; check the current count). Old slide numbers are low.', '_squama_, scale.']
    }),

    K.plate('synapo', 'What a squamate is', {
      min: 3,
      head: { name: 'Squamata', facts: 'synapomorphies' },
      panels: [I('3D_Varanus-beccarii-skull_sketchfab-preview.jpg', SF('Skull of Varanus beccarii (Black tree monitor)', 'GigaScience'))],
      foot: [
        { text: 'hemipenes' }, { text: 'no lower temporal bar', at: 1 }, { text: 'streptostyly', at: 1 },
        { text: '1 occipital condyle', at: 2 }, { text: 'skin shed whole', at: 3 }, { text: 'vomeronasal organ', at: 3 }
      ],
      notes: [
        'Hemipenes: paired, everted from the tail base.',
        'Losing the lower temporal bar frees the quadrate; streptostyly = the quadrate swings at its upper end.',
        'Single occipital condyle: same as every amniote except mammals. Contrast L1\'s two condyles.',
        'Skin shed as a unit or in large flakes; β-keratin over a dermal core, no follicle (Chang et al. 2009).',
        'Well-developed vomeronasal (Jacobson\'s) organ opening on the palate.'
      ]
    }),

    K.tree('tree', 'Squamata', {
      min: 4, src: SQUAMATA, subs: true,
      steps: [{}, { hi: ['Gekkota'] }, { hi: ['Toxicofera'] }, { hi: ['Serpentes'] }],
      notes: [
        'From the 365 phylogeny §13.',
        'Toxicofera ("venom-bearers"). ⚠ Present the single venom origin as a *hypothesis*: many iguanian "venom" genes are ordinary salivary or body proteins (Hargreaves et al. 2014).',
        'Uncontroversial venom: front-fanged snakes (vipers, elapids), helodermatids, probably varanids (anticoagulant secretions).'
      ]
    }),

    K.grid('morph-mol', 'Morphology vs. molecules', {
      min: 3, reveal: 'col',
      head: ['', 'morphology', 'molecules'],
      rows: [['Iguania', 'sister to all other squamates', 'inside Toxicofera'], ['snakes', 'with burrowing lizards', 'with anguimorphs']],
      notes: ['Best one-slide case in the course of "the tree is a hypothesis": convergence from limb loss and burrowing misled the morphological data.']
    }),

    K.part('p-tour', 'Groups'),

    K.plate('dibamid', 'Dibamidae', {
      min: 1, mini: sq('Dibamidae'),
      head: { name: 'Dibamidae', facts: 'blind lizards' },
      panels: [],
      foot: [{ text: 'limbless burrowers' }, { text: 'hind-limb flaps (males)' }, { text: 'fused skull' }],
      notes: ['Sister to all other squamates.']
    }),

    K.plate('gekkota', 'Gekkota', {
      min: 3, mini: sq('Gekkota'),
      head: { name: 'Gekkota', facts: 'geckos · pygopodids' },
      panels: [
        I('3D_MS_Gekko-smithii-CAS9595_view1_side.jpg', '_Gekko smithii_ · CAS Herp 9595 · MorphoSource 000023462'),
        I('Gecko_appendicular_Fig1.jpg', '_Gekko gecko_ vs. _Eublepharis_ limb muscles', { at: 3 })
      ],
      foot: [{ text: 'setae' }, { text: 'spectacle', at: 1 }, { text: 'fracture planes', at: 2 }, { text: 'pygopodids', at: 4 }],
      notes: [
        'Setae: hair-like β-keratin bristles on the toe lamellae, branching into hundreds of spatulae; adhesion by van der Waals forces.',
        'Most lack eyelids and lick a fused spectacle clean; eublepharids keep eyelids. Vocal: "gecko" is onomatopoeic.',
        'Paedomorphic-looking skulls: incomplete postorbital bar, cup-shaped quadrate.',
        'Tail autotomy through pre-formed fracture planes in the caudal vertebrae; the regrown tail has a cartilage rod.',
        'Limb muscles: climber vs. ground-dweller differ in mass, fiber length, moment arms (paper in `r_papers/new/`, not yet summarized: the figure caption is unconfirmed).',
        'Pygopodids: a gecko converged on a snake. Hinged teeth for prying between skink osteoderms.'
      ]
    }),

    K.plate('scincoid', 'Scincoidea', {
      min: 2, mini: sq('Scincoidea'),
      head: { name: 'Scincoidea', facts: 'skinks · cordylids' },
      panels: [],
      foot: [{ text: 'osteoderms' }, { text: 'limb reduction ~25+ times', at: 1 }, { text: '_Mabuya_ placenta', at: 2 }],
      notes: [
        '⚠ Tone down the 440 "100+ times within skinks". Published estimates: ~25 or more independent reductions within Scincidae, _Lerista_ alone about 10 (Skinner et al. 2008; check).',
        '_Mabuya_ and kin: complex placentas with nutrient transfer comparable to mammals.'
      ]
    }),

    K.plate('amphisbaenia', 'Amphisbaenia', {
      min: 2, mini: sq('Lacertoidea'),
      head: { name: 'Amphisbaenia', facts: 'inside Lacertoidea' },
      panels: [],
      foot: [{ text: '1 median premaxillary tooth' }, { text: '_Bipes_: forelimbs only', at: 1 }, { text: '*right* lung reduced', at: 2 }, { text: 'annuli', at: 3 }],
      notes: [
        'Rigid, shovel- or keel-shaped skulls.',
        'Amphisbaenians reduce the *right* lung; snakes the *left*. Limblessness reached two ways.',
        'Scales in rings; the skin moves like a loose sleeve during concertina burrowing.',
        'The MorphoSource "_Amphisbaena vermicularis_" mesh looks teiid- or lacertid-like, so it is not used here. Verify the ID before using it.'
      ]
    }),

    K.plate('lacertoid', 'Lacertoidea', {
      min: 2, mini: sq('Lacertoidea'),
      head: { name: 'Lacertoidea', facts: 'tegus · whiptails · lacertids' },
      panels: [],
      foot: [{ text: 'tegu: seasonal endothermy' }, { text: 'whiptails: parthenogenesis', at: 1 }, { text: '_Dracaena_: crushing teeth', at: 2 }],
      notes: [
        'Tegus (_Salvator_) warm themselves to ~10 °C above ambient at night in the breeding season (Tattersall et al. 2016, _Sci Adv_).',
        'Whiptails (_Aspidoscelis_): all-female hybrid species. 2018 exam 4 included a whiptail.',
        'Caiman lizard (_Dracaena_): molariform crushing teeth. Your `salvator_skull.png` fits here.'
      ]
    }),

    K.plate('iguania', 'Iguania', {
      min: 3, mini: sq('Iguania'),
      head: { name: 'Iguania', facts: 'visual hunters' },
      panels: [
        I('A2_Draco_rib_patagium.gif', '_Draco maculatus_ · UF Herp 63893 · oVert · MorphoSource 000036116', { label: '_Draco_: rib patagium' }),
        I('3D_Chamaeleo-calyptratus-skull_sketchfab-preview.jpg', SF('Skull of Chamaeleo calyptratus (chameleon)', 'GigaScience'), { label: 'chameleon', at: 2 })
      ],
      foot: [{ text: 'hyoid frill', at: 1 }, { text: '_Anolis_ ecomorphs', at: 1 }, { text: 'acrodont (agamids)', at: 3 }],
      legend: SHORTEN,
      notes: [
        'Bright colors and display. Frilled lizard\'s frill is a hyoid-supported skin fold.',
        'Horned lizards (_Phrynosoma_) and thorny devils (_Moloch_): convergent desert ant-eaters.',
        '_Anolis_ ecomorphs replicated across the Greater Antilles.',
        'Agamid acrodont teeth: tie back to _Sphenodon_, convergent acrodonty.'
      ]
    }),

    K.plate('anguimorph', 'Anguimorpha', {
      min: 2.5, mini: sq('Anguimorpha'),
      head: { name: 'Anguimorpha', facts: 'chemical hunters' },
      panels: [I('3D_Varanus-komodoensis-UF28219_sketchfab-preview.jpg', SF('Varanus Komodoensis UF28219', 'Blackburn Lab'))],
      foot: [{ text: 'forked tongue' }, { text: 'vomeronasal organ' }, { text: 'stereo smell', at: 1 }],
      notes: [
        'Long forked tongues deliver chemicals to the VNO. Each tip samples one side, which tells the lizard trail direction (Schwenk 1994).',
        '⚠ The 440 "orders of magnitude more sensitive than mammals" is unsupported. Use the directionality argument.',
        'Monitors, Gila monster, glass lizards (legless, tail autotomy).'
      ]
    }),

    /* ------------------------------------------------------------ skull */
    K.part('p-skull', 'Skull and jaw muscles'),

    K.plate('postorbital', 'Postorbital bar', {
      min: 4,
      head: { name: 'Tegu vs. monitor', facts: 'Dutel et al. 2021' },
      panels: [
        I('Dutel2021_Fig1_tegu-vs-monitor-skull.jpg', 'Dutel et al. 2021', { label: 'bar vs. ligament' }),
        I('Dutel2021_Fig3_postorbital-bar-strain.jpg', 'Dutel et al. 2021', { at: 2 })
      ],
      foot: [{ text: 'same bite force', at: 1 }, { text: 'pterygoid: most strained', at: 2 }, { text: 'frontal subolfactory processes', at: 3 }],
      notes: [
        'Tegu has a postorbital bar; Nile monitor has a ligament instead. Same bite force at the same head size; same overall strain regime; the pterygoid is the most strained bone in both.',
        'Remove the tegu\'s bar: strain rises >50% in the frontal–parietal region. In the monitor the frontal subolfactory processes (a tube under the brain) do the bar\'s job.',
        'Two skulls, one performance, different struts.'
      ]
    }),

    K.plate('adductors', 'Snake jaw muscles', {
      min: 3,
      head: { name: 'Lizard muscles, reorganized', facts: 'Johnston 2014' },
      panels: [I('Johnston2014_Fig2_lizard-vs-python-adductors.jpg', '_Ctenosaura_ vs. _Python_ · Johnston 2014')],
      foot: [{ text: 'levator anguli oris' }, { text: 'MAMEP lost with the postorbital frame', at: 1 }, { text: 'V₃ closes · VII opens', at: 2 }],
      side: true,
      notes: [
        'The superficial rostral snake muscle over the venom-gland and rictal area is the lizard levator anguli oris.',
        'Loss of the MAMEP (adductor mandibulae externus profundus) tracks loss of the postorbital fenestra frame: bone and muscle lost together.',
        'Nerves: same rule as L1. Let students say it before you do.'
      ]
    }),

    K.plate('uromastyx', '_Uromastyx_', {
      tier: 2, min: 2,
      head: { name: '_Uromastyx_', facts: 'Herrel & De Vree 2009' },
      panels: [I('HerrelDeVree2009_Fig1_Uromastyx-jaw-muscles.jpg', 'Herrel & De Vree 2009')],
      foot: [{ text: 'pterygoideus' }, { text: '~59 N', at: 1 }, { text: 'hyoid → depressor → adductors', at: 2 }],
      side: true,
      notes: ['Hypertrophied pterygoideus; bite ~59 N, typical for its size.', 'EMG of intraoral transport: slow open I/II → fast open → close. Hyoid and tongue protractors fire first, then the depressor mandibulae, then the adductors.']
    }),

    /* ------------------------------------------------------------ tongues */
    K.plate('chameleon', 'Chameleon tongue', {
      min: 4,
      head: { name: 'Projectile tongue', facts: 'Herrel et al. 2001' },
      panels: [
        I('D07_chameleon_tongue.gif', 'Schematic after Herrel et al. 2001'),
        I('Herrel2001_Fig1_chameleon-hyolingual.jpg', 'Herrel et al. 2001', { at: 1 })
      ],
      foot: [{ text: 'entoglossal process', at: 1 }, { text: 'accelerator muscle', at: 2 }, { text: 'crossed-helical collagen', at: 2 }, { text: 'hyoglossus: retraction', at: 3 }],
      legend: SHORTEN,
      notes: [
        'The tongue slides over a long entoglossal process of the hyoid. The accelerator is a ring around it: fibers 100% fast oxidative-glycolytic, wrapped in a crossed-helical collagen sheath that stores elastic energy and limits elongation, like a catapult.',
        'Elastin-rich sheet on the entoglossal process gives recoil.',
        'The pad grabs rather than glues: its surface is *less* adhesive than agamid and iguanid pads. Later work adds very viscous mucus.',
        'Callback to L1: bolitoglossine salamanders converged on elastic-recoil projection. Different arch (IX vs. hyoid and accelerator), same physics.'
      ]
    }),

    K.plate('chameleon2', 'Chameleon tongue muscles', {
      tier: 2, min: 1.5,
      head: { name: 'Tongue muscles', facts: 'Herrel et al. 2001' },
      panels: [I('Herrel2001_Fig2_chameleon-tongue-muscles.jpg', 'Herrel et al. 2001')],
      side: true, foot: [{ text: 'accelerator · hyoglossus' }],
      notes: []
    }),

    /* ------------------------------------------------------------ limbs */
    K.part('p-limbs', 'Limbs'),

    K.plate('cham-limbs', 'Chameleon feet', {
      min: 3,
      head: { name: 'Zygodactyl feet', facts: 'Molnar et al. 2017' },
      panels: [
        I('Molnar2017_Fig1_chameleon-forelimb-skeleton.jpg', 'Molnar et al. 2017'),
        I('Molnar2017_Fig3_chameleon-hindlimb-skeleton.jpg', 'Molnar et al. 2017', { at: 1 })
      ],
      foot: [{ text: 'muscles ~unchanged', at: 2 }, { text: 'intermetacarpales: 3, not 4', at: 3 }],
      notes: [
        'Digits fused into two "super-digits".',
        'No muscle gained or lost except the intermetacarpales across the cleft. Superficial short flexors re-oriented as super-digit adductors ("adductor digiti tertii/quarti", named in 1870).',
        'Skeletons can be remodelled radically while the muscle list stays conservative.'
      ]
    }),

    K.plate('varanid', 'Big monitors', {
      min: 3,
      head: { name: 'Staying sprawled', facts: 'Dick & Clemente 2016' },
      panels: [
        I('DickClemente2016_Fig2_varanid-hindlimb-muscles.jpg', 'Dick & Clemente 2016'),
        I('D09_sprawl_to_erect.gif', 'Schematic', { at: 2 })
      ],
      foot: [{ text: '~5,000× mass range' }, { text: 'positive allometry', at: 1 }],
      notes: [
        'Across a ~5,000-fold mass range varanids do *not* become more upright, unlike mammals and birds.',
        'Femoral adductors, knee flexors and ankle plantarflexors scale with positive allometry: more mass, more pennation, more PCSA.',
        'Climbers are more sprawled than ground species. The diagram: ground-force moment arm, sprawling to erect.'
      ]
    }),

    K.plate('komodo', 'Komodo forelimb', {
      min: 2.5,
      head: { name: '_Varanus komodoensis_', facts: 'Kepa et al. 2023' },
      panels: [
        I('Kepa2023_Fig1_Komodo-forelimb-xray.jpg', 'Kepa et al. 2023'),
        I('Kepa2023_Fig4_Komodo-forelimb-muscles.jpg', 'Kepa et al. 2023', { at: 1 })
      ],
      foot: [{ text: 'synsarcosis' }, { text: '3-headed triceps', at: 1 }, { text: '"ulnar patella"', at: 2 }],
      notes: [
        'Scapula and coracoid joined by cartilage (synchondrosis); the girdle attaches to the trunk by muscle only (synsarcosis).',
        '"Ulnar patella": an elastic-cartilage sesamoid at the elbow. Very wide diaphyses: the signature of a giant.'
      ]
    }),

    K.plate('shoulder', 'Shoulder', {
      min: 3,
      head: { name: 'Tegu and opossum', facts: 'Fahn-Lai, Biewener & Pierce 2020' },
      panels: [
        I('FahnLai2020_Fig2_tegu-vs-opossum-shoulder.jpg', 'Fahn-Lai, Biewener & Pierce 2020'),
        I('F2_lizard_forelimb.gif', '_Varanus prasinus_ · UF Herp 71411 · oVert · MorphoSource 000600648', { at: 2 })
      ],
      foot: [{ text: '13 of 18 shoulder muscles', at: 1 }],
      legend: SHORTEN,
      notes: ['13 of 18 shoulder muscles homologous between the tegu and the opossum, across ~320 Myr. Pennation and PCSA conserved; mass and fiber length differ. Reused in L5.']
    }),

    K.plate('plexus', 'Brachial plexus', {
      tier: 2, min: 1,
      head: { name: 'Brachial plexus', facts: 'Navarro et al. 2023' },
      panels: [I('Navarro2023_Fig1_Liolaemus-brachial-plexus.jpg', '_Liolaemus_ · Navarro et al. 2023')],
      foot: [{ text: 'spinal nerves ~6–10' }],
      side: true,
      notes: ['Numbering varies by convention. Crocodylians 7–11 (L2). Also Arantes et al. 2017.']
    }),

    /* ------------------------------------------------------------ snakes */
    K.part('p-snakes', 'The snake kit'),

    K.tree('snake-tree', 'Serpentes', {
      min: 1.5, src: SNAKES, subs: true,
      steps: [{}, { hi: ['Viperidae'] }, { hi: ['Elapidae', 'Colubridae'] }],
      notes: ['In molecular trees Elapidae is sister to Colubridae, and vipers are outside both.', 'Scolecophidians (blind snakes) are sister to the rest.']
    }),

    K.plate('ratchet', 'Skull ratchet', {
      min: 3, mini: sn('Serpentes'),
      head: { name: 'Swallowing by ratchet' },
      panels: [
        I('D06_snake_pterygoid_walk.gif', 'Schematic'),
        I('3D_Python-regius-skull_sketchfab-preview.jpg', SF('Skull of Python regius (ball python)', 'GigaScience'), { at: 1 })
      ],
      foot: [{ text: 'no mandibular symphysis', at: 1 }, { text: 'streptostylic quadrate', at: 1 }, { text: 'pterygoid walk', at: 2 }],
      notes: [
        'No symphysis: an elastic ligament only.',
        'The palatine–pterygoid bars walk forward on alternate sides; recurved teeth ratchet the prey in.',
        '⚠ The 440 notes call it the "maxillary walk". In most snakes the palatopterygoid bar walks; the maxilla goes along.'
      ]
    }),

    K.plate('trunk', 'Snake trunk', {
      min: 2.5, mini: sn('Serpentes'),
      head: { name: 'Trunk' },
      panels: [I('3D_MS_Naja-nigricollis-UMMZ203814_view1_side.jpg', '_Naja nigricollis_ · UMMZ Herps 203814 · MorphoSource 000039470')],
      foot: [{ text: '200–400+ vertebrae' }, { text: 'zygosphene–zygantrum', at: 1 }, { text: '_Hox_: all thorax', at: 2 }, { text: '*left* lung reduced', at: 3 }, { text: 'cloacal spurs', at: 4 }],
      notes: [
        'Extra pair of joints (zygosphene–zygantrum) stops twisting.',
        '_Hox_ expression extended along the body, so the trunk reads as "all thorax" (Cohn & Tickle 1999).',
        'Pythons and boas keep a pelvic vestige and femur; the tips show as cloacal spurs, used by males in courtship. ⚠ The 440 notes say no external hind limbs: correct that.'
      ]
    }),

    K.grid('pits', 'Three heat sensors', {
      min: 3, reveal: 'row',
      head: ['', 'who', 'where'],
      rows: [
        ['labial pits', 'boas, pythons', 'between labial scales'],
        ['loreal pit', 'pit vipers', 'eye to nostril'],
        ['supranasal sac', '_Bitis_', 'supranasal–nasal scales']
      ],
      notes: [
        'Three organs, three origins, one nerve. None homologous to the others (York, Silver & Smith 1998).',
        'Loreal pit: a membrane suspended over an air space.'
      ]
    }),

    K.plate('bitis', 'Supranasal sac', {
      min: 2,
      head: { name: '_Bitis_ supranasal sac', facts: 'York, Silver & Smith 1998' },
      panels: [I('York1998_Fig1_Bitis-supranasal-sac.jpg', 'York, Silver & Smith 1998')],
      foot: [{ text: 'V₁' }, { text: 'TRPA1', at: 1 }],
      side: true,
      notes: [
        'All three heat organs are supplied by V (V₁ for the supranasal sac); nerve endings penetrate the basement membrane.',
        'Detector: TRPA1, the "wasabi receptor" retuned to heat (Gracheva et al. 2010).',
        '⚠ Not "the spatial resolution of normal vision". Pit images are blurry and overlaid on the visual map in the optic tectum.'
      ]
    }),

    K.plate('fangs', 'Fangs', {
      min: 3, mini: sn('Viperidae'),
      head: { name: 'Fangs' },
      panels: [
        I('D05_viper_fang_erection.gif', 'Schematic'),
        I('3D_Crotalus-rattlesnake-skull_sketchfab-preview.jpg', SF('Rattlesnake (Crotalus sp.) skull', 'LJMUZoology'), { at: 1 })
      ],
      foot: [{ text: 'rotating maxilla' }, { text: 'solenoglyphous', at: 1 }],
      notes: ['Hinged front fangs on a rotating maxilla. Venom glands are modified oral glands; in front-fanged snakes jaw muscles compress them (tie to Johnston\'s LAO).']
    }),

    K.grid('fang-t', 'Fang types', {
      min: 2, reveal: 'row',
      head: ['', 'fang', 'who'],
      rows: [
        ['opisthoglyphous', 'rear, grooved', 'many "colubrids"'],
        ['proteroglyphous', 'front, fixed, hollow', 'elapids'],
        ['solenoglyphous', 'front, hinged', 'vipers'],
        ['none', '', 'boas · pythons']
      ],
      notes: ['⚠ The 440 table lists boas and pythons as "mild venom, rear fang". They are non-venomous constrictors with no fangs.']
    }),

    K.plate('scoleco', 'Blind snakes', {
      tier: 2, min: 1, mini: sn('Scolecophidia'),
      head: { name: 'Scolecophidia', facts: 'blind snakes' },
      panels: [],
      foot: [{ text: 'UV fluorescence' }, { text: 'barn owl nests', at: 1 }],
      notes: ['Barn owls carry live blind snakes to their nests, and the snakes may eat nest parasites (Gehlbach & Baldridge 1987: one study, flag it).']
    }),

    /* ------------------------------------------------------------ reproduction */
    K.plate('repro', 'Reproduction', {
      min: 4,
      head: { name: 'Reproduction', facts: 'lability' },
      panels: [I('GriffithWagner2017_Fig2_viviparity-origins.jpg', 'Griffith & Wagner 2017', { at: 1 })],
      foot: [{ text: 'hemipenes' }, { text: '~115 origins of viviparity', at: 1 }, { text: 'parthenogenesis: not clones', at: 2 }],
      notes: [
        'Hemipenes: paired, one used per mating; spines and calyces, species-specific, used in taxonomy.',
        'Viviparity: ~115 origins in squamates alone, of ~137+ across vertebrates. Some reversals proposed. Same figure returns in L5.',
        'Parthenogenesis: obligate in whiptails and some geckos (hybrid origin); facultative in Komodo dragons, boas, pythons. Offspring are not clones: meiosis still happens.'
      ]
    }),

    /* ------------------------------------------------------------ review */
    K.clues('test', 'If I tell you on a test…', {
      min: 4, px: 23,
      rows: [
        { c: ['diapsid', 'no lower temporal bar', 'streptostylic quadrate', 'hemipenes'], a: 'Squamata' },
        { c: ['toe pads', 'no eyelids', 'fracture planes'], a: 'Gekkota', more: true },
        { c: ['ringed body', '1 median premaxillary tooth', '*right* lung reduced'], a: 'Amphisbaenia', more: true },
        { c: ['zygodactyl feet', 'entoglossal process', 'independent eyes'], a: 'Chamaeleonidae', more: true },
        { c: ['forked tongue', 'ligament, not postorbital bar'], a: 'Varanidae', more: true },
        { c: ['no symphysis', 'zygosphenes', '*left* lung reduced'], a: 'Serpentes', more: true },
        { c: ['hinged front fang', 'loreal pit'], a: 'Crotalinae', more: true }
      ]
    }),

    K.plate('practice', 'Practice tree', {
      min: 1,
      head: { name: 'Build the tree', facts: '2018 exam 4' },
      panels: [],
      foot: ['gecko', 'tegu', 'monitor lizard', 'cobra', 'coral snake', 'rattlesnake', 'cottonmouth', 'racer', 'skink', 'amphisbaenian', 'whiptail'].map((text) => ({ text }))
    }),

    K.tree('practice-a', 'Practice tree: answer', {
      min: 3, src: PRACTICE,
      steps: [{}, { hi: ['Lacertoidea'] }, { hi: ['Toxicofera'] }, { hi: ['Elapidae'] }],
      notes: ['Elapids (cobra, coral snake) are sister to colubrids (racer); vipers (rattlesnake, cottonmouth) branch earlier.', 'The outline\'s answer sketch put the racer with the vipers; that contradicts its own note and the course tree. This slide follows the course tree.']
    })
  ];

  window.DECK = { title: 'Squamata', session: 80, minutes: 68, segments };
})();
