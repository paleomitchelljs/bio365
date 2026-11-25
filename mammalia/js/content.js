/* Lecture 5 of 5: Mammalia. From lectures/outlines/L5_Mammalia.md in the comparative repo.
 * One lecture for all mammals: the toolkit (jaw–ear–teeth, trunk, reproduction, heat), then one
 * anatomical hero per clade. Tier 2 holds the outline's cuttable (⏩) blocks.
 * On screen: clade names, anatomy, a few numbers. Everything else is in notes (S). */
(function () {
  'use strict';
  const K = window.Kit, I = K.img, M = K.sf;
  const SF = (name, by, lic) => `"${name}" by ${by} · Sketchfab · ${lic || 'CC BY 4.0'}`;
  const SHORTEN = '*red* = shortening';

  const MAMMALIA = `
Mammalia
  Monotremata | platypus, echidnas
  Theria
    Metatheria | marsupials
    Eutheria | placentals
      Atlantogenata
        Xenarthra | armadillos, sloths, anteaters
        Afrotheria | elephants, sirenians, golden moles
      Boreoeutheria
        Laurasiatheria | bats, whales, carnivorans
        Euarchontoglires | primates, rodents, rabbits`;
  const mm = (hi) => ({ src: MAMMALIA, hi });

  const PRACTICE = `
Mammalia
  echidna
  Theria
    kangaroo
    Eutheria
      Atlantogenata
        armadillo
        Afrotheria
          .
            aardvark
            golden mole
          elephant
      Boreoeutheria
        Laurasiatheria
          mole
          rhinoceros
        Euarchontoglires
          Archonta
            tree shrew
            human
          porcupine`;

  const PRACTICE2 = `
Gnathostomata
  great white
  Osteichthyes
    lizardfish
    Amniota
      Mammalia
        Monotremata
          platypus
          echidna
        Theria
          Metatheria
            kangaroo
            opossum
          Eutheria
            Atlantogenata
              Xenarthra
                armadillo
                anteater
              Afrotheria
                manatee
                aardvark
            Boreoeutheria
              Laurasiatheria
                bat
                .
                  dolphin
                  pangolin
              Euarchontoglires
                human
                mouse
      Diapsida
        Lepidosauria
          _Sphenodon_
          Squamata
            gecko
            .
              chameleon
              cobra
        Archosauria
          crocodile
          dove`;

  const segments = [
    K.cover('Mammalia', {
      sub: 'mammals',
      pic: 'img/ph_Didelphis.jpg', cap: '_Didelphis virginiana_, the Virginia opossum · iNaturalist · CC0',
      notes: [
        'Past runs gave mammals 6–8 lectures. This run has one: organized around the mammal toolkit, with one anatomical hero per clade.',
        'Tier 2 (L to switch) holds the cuttable blocks. If you can steal minutes from review day, spend them on reproduction: the most-asked mammal topic on past exams.'
      ]
    }),

    K.plate('trunk-hook', 'The elephant trunk', {
      min: 3,
      head: { name: 'The trunk is a face', facts: 'Sprinz 1951' },
      panels: [
        I('ph_Loxodonta.jpg', '_Loxodonta cyclotis_ · pfaucher · iNaturalist · CC BY-NC', { label: 'forest elephant' }),
        M('d982240ed37d429bbcf5953f0212cf70', SF('African Forest Elephant skull', 'University of Dundee Museum Collections'), { label: 'skull: where is the trunk?', aspect: 4 / 3 })
      ],
      foot: [{ text: 'muscles: VII' }, { text: 'sensory: V₂', at: 1 }, { text: 'V₂ > V₁ + V₃', at: 2 }],
      notes: [
        'Motor: the trunk\'s muscles are facial (second-arch) muscles, VII. Sensory: the maxillary division of V. In the trigeminal ganglion V₂ is "larger than both [V₁ and V₃] put together".',
        'Vibrissae cluster on the ventral trunk tip.',
        'Payoff of L1\'s facial-nerve paradox: the sphincter colli is a throat sheet in salamanders; in mammals it spreads forward into the muscles of facial expression, and in elephants into a 100,000-fascicle hand (fascicle count commonly quoted: check).'
      ]
    }),

    K.path('where', 'Where we are', {
      min: 1, root: 'Amniota', to: 'Mammalia', fossils: true,
      steps: [{}, { hi: ['Synapsida'] }, { hi: ['Mammalia'] }],
      marks: [{ on: 'Mammalia', text: 'dentary–squamosal joint', at: 2 }],
      notes: ['Synapsids: the mammal line, with its fossil stem (pelycosaurs, dicynodonts, non-mammal cynodonts).']
    }),

    /* ------------------------------------------------------------ toolkit */
    K.part('p-kit', 'The mammal toolkit'),

    K.plate('jaw', 'Jaw and ear', {
      min: 3,
      head: { name: 'Jaw joint and ear' },
      panels: [
        M('21c78923560f487db9eebe483bddbb14', SF('Thrinaxodon liorhinus', 'Adam Worthington'), { label: 'cynodont', aspect: 4 / 3 }),
        I('J7_bobcat_jaw.gif', '_Lynx rufus_ · OUVC 9576 · Witmer Lab · MorphoSource 000067572 + 000067597', { label: 'mammal', at: 1 })
      ],
      foot: [{ text: 'dentary–squamosal', at: 1 }, { text: 'articular + quadrate → malleus + incus', at: 2 }, { text: 'chorda tympani', at: 3 }, { text: '_Morganucodon_: both joints', at: 3 }],
      legend: SHORTEN,
      notes: [
        'The old articular–quadrate joint became the malleus and incus. The chorda tympani still threads between them, marking the old joint.',
        '_Morganucodon_ has both joints at once.',
        'The GIF: temporalis, masseter, digastric.'
      ]
    }),

    K.plate('braincase', 'Braincase', {
      min: 3,
      head: { name: 'A braincase wall built twice', facts: 'Crompton et al. 2018' },
      panels: [
        I('Crompton2018_Fig1_braincase-sidewalls.jpg', 'Crompton et al. 2018'),
        I('Crompton2018_Fig7_platypus-braincase-juv-adult.jpg', 'Platypus · Crompton et al. 2018', { at: 2 })
      ],
      foot: [{ text: '_Morganucodon_: palatine flange', at: 1 }, { text: 'monotremes: petrosal lamina', at: 2 }, { text: 'therians: alisphenoid', at: 3 }],
      notes: [
        'Non-mammaliaform cynodonts left the medial orbital wall mostly unossified; _Morganucodon_ closes it with the orbital flange of the palatine.',
        'Monotremes fill the side wall with an anterior lamina of the petrosal; therians with the alisphenoid (= epipterygoid).',
        'Callback: L2\'s cryptodire turtles also used the epipterygoid for the braincase wall. Same bone, same job, two amniote lineages.',
        'Fig 3 (_Morganucodon_ braincase) is in the outline set if you want it.'
      ]
    }),

    K.plate('teeth', 'Teeth', {
      min: 1.5,
      head: { name: 'Teeth' },
      panels: [M('03d6ce75b67042d9bcdb37716135da5d', '"Mammals displaying various types of teeth" · UQ School of the Environment · Sketchfab', { label: 'heterodont teeth across mammals', aspect: 16 / 10 })],
      foot: [{ text: 'heterodont' }, { text: 'diphyodont' }, { text: 'tribosphenic', at: 1 }, { text: 'protocone → talonid', at: 1 }],
      notes: ['One replacement. The protocone grinds in the talonid basin.', '⚠ The 440 notes wrote "trigonospheric". The term is *tribosphenic*.']
    }),

    K.plate('trunk', 'Trunk', {
      min: 3,
      head: { name: 'Trunk' },
      panels: [I('D10_spine_flexion.gif', 'Schematic')],
      foot: [{ text: 'muscular diaphragm' }, { text: 'phrenic nerve: C3–C5', at: 1 }, { text: 'no lumbar ribs', at: 2 }, { text: '7 cervicals', at: 3 }],
      side: true,
      legend: SHORTEN,
      notes: [
        'Muscular diaphragm: mammals only. Supplied by the phrenic nerve, C3–C5, because it forms in the neck and migrates down. "C3, 4, 5 keeps the diaphragm alive."',
        'Contrast the two non-homologous "diaphragmaticus" muscles in L2.',
        'No lumbar ribs: the spine can flex up and down when bounding. Whales inherited the up-and-down stroke for their flukes.',
        'Seven cervicals almost without exception; the exceptions are sloths and manatees.'
      ]
    }),

    K.grid('skin-heat', 'Skin and heat', {
      min: 3, reveal: 'row',
      head: ['', ''],
      rows: [
        ['hair', 'began as whiskers'],
        ['milk', 'modified skin glands · prolactin'],
        ['UCP1 brown fat', 'eutherians'],
        ['no brown fat', 'marsupials'],
        ['UCP1 broken', 'pigs · horses · whales · elephants · sirenians'],
        ['loop of Henle', 'best developed in mammals']
      ],
      notes: [
        '"Mammal milk is just better sweat." Prolactin: in L4 pigeon crop milk used the same hormone.',
        'Marsupials heat by a higher proton leak in mitochondria (Legendre & Davesne 2020). UCP1 list added from Gaudry et al. 2017: that is why newborn piglets shiver.',
        '2022 exam 4: which organ controls BAT and metamorphosis? The *thyroid* (L1).',
        '⚠ The loop of Henle is not "no other vertebrate": birds have loops too (L4).'
      ]
    }),

    K.plate('posture', 'Posture', {
      min: 3,
      head: { name: 'Posture', facts: 'Bishop & Pierce 2024 · Fahn-Lai et al. 2020' },
      panels: [
        I('BishopPierce2024_Fig1_synapsid-hindlimb-models.jpg', 'Bishop & Pierce 2024'),
        I('FahnLai2020_Fig1_tegu-Massetognathus-opossum.jpg', 'Fahn-Lai, Biewener & Pierce 2020', { at: 2 })
      ],
      foot: [{ text: 'erect hindlimb: late' }, { text: 'force peaked in cynodonts', at: 1 }, { text: '13 of 18 shoulder muscles', at: 2 }],
      notes: [
        'Fully erect, therian-like hindlimb function arrives late: even _Vincelestes_ sits outside it. Hindlimb force capacity peaked in cynodonts and then declined.',
        'Shoulder conservative: 13 of 18 muscles homologous between a tegu and an opossum, ~320 Myr.'
      ]
    }),

    K.plate('forelimb', 'Forelimb', {
      tier: 2, min: 1.5,
      head: { name: 'Mammal forelimb' },
      panels: [
        I('F5_mammal_forelimb.gif', '_Lenothrix canus_ · AMNH M-240359 · MorphoSource 000602402'),
        I('D09_sprawl_to_erect.gif', 'Schematic', { at: 1 })
      ],
      legend: SHORTEN,
      notes: ['Ground-force moment arm, sprawling to erect.']
    }),

    /* ------------------------------------------------------------ tree */
    K.tree('tree', 'Mammalia', {
      min: 4, src: MAMMALIA, subs: true,
      steps: [{}, { hi: ['Monotremata'] }, { hi: ['Metatheria'] }, { hi: ['Atlantogenata'] }, { hi: ['Boreoeutheria'] }],
      notes: ['From the 365 phylogeny §12. Four placental superorders.', 'Where Xenarthra goes is debated: test only the four superorders and Boreoeutheria.']
    }),

    K.grid('converge', 'Convergence', {
      min: 2, reveal: 'col', px: 25,
      head: ['', 'Monotremata', 'Metatheria', 'Xenarthra', 'Afrotheria', 'Laurasiatheria'],
      rows: [['ant-eater', 'echidna', 'numbat', 'anteaters', 'aardvark', 'pangolin'], ['"mole"', '', 'marsupial mole', '', 'golden mole', 'true mole']],
      notes: ['Keeps the five "moles" and four "anteaters" straight. Ant-eaters: long sticky tongue on a sternoglossus.']
    }),

    /* ------------------------------------------------------------ monotremes */
    K.part('p-mono', 'Monotremata'),

    K.plate('mono-shoulder', 'Monotreme shoulder', {
      min: 4, mini: mm('Monotremata'),
      head: { name: 'A cynodont shoulder', facts: 'Gambaryan et al. 2015 · Regnault & Pierce 2018' },
      panels: [
        I('ph_Tachyglossus.jpg', '_Tachyglossus aculeatus_ · John Sear · iNaturalist · CC BY-NC', { label: 'short-beaked echidna' }),
        M('5d6bb0834d934fcdb7c61f84640e6b44', SF('Echidna (Tachyglossus Aculeatus)', 'The University of Edinburgh Open.Ed'), { label: 'echidna skeleton', aspect: 4 / 3 }),
        I('Gambaryan2015_Fig1_Zaglossus-shoulder-girdle-CT.jpg', '_Zaglossus_ · Gambaryan et al. 2015', { at: 1 })
      ],
      foot: [{ text: 'interclavicle', at: 1 }, { text: 'coracoid + epicoracoid', at: 1 }, { text: 'pectoralis undivided', at: 2 }, { text: '~118° abduction', at: 3 }],
      notes: [
        '5 species: platypus, short-beaked echidna, *3* long-beaked echidnas (_Zaglossus_). ⚠ The 440 notes say 4.',
        'Coracoid muscles (sternocoracoideus, subcoracoideus, supracoracoideus) still present.',
        'Gambaryan et al.: "among living tetrapods, one cannot find a better model" for the mammal-like-reptile locomotor system.',
        'Scapulocoracoid–clavicle–interclavicle works as one hinge with one degree of freedom; the shoulder mostly abducts–adducts (~118°): a sprawling digger.'
      ]
    }),

    K.plate('mono-girdle', 'Echidna girdle', {
      tier: 2, min: 1, mini: mm('Monotremata'),
      head: { name: 'Echidna pectoral girdle', facts: 'Griffiths 1989' },
      panels: [I('Griffiths1989_Fig15.5_echidna-pectoral-girdle.jpg', 'Griffiths 1989')],
      notes: []
    }),

    K.plate('echidna-feed', 'Echidna feeding', {
      min: 2.5, mini: mm('Monotremata'),
      head: { name: 'Echidna feeding', facts: 'Griffiths 1989' },
      panels: [
        I('Griffiths1989_Fig15.6_echidna-sternoglossus.jpg', 'Griffiths 1989', { label: 'sternoglossus' }),
        I('Griffiths1989_Fig15.4_echidna-skull.jpg', 'Griffiths 1989', { at: 2 })
      ],
      foot: [{ text: '~180 mm · ~100 per minute', at: 1 }, { text: 'keratin "teeth"', at: 2 }],
      notes: ['Protrusion by circular muscle plus vascular stiffening; retraction by sternoglossi from the xiphisternum.', 'Keratinous palatal and lingual "teeth" grind ants, audibly.']
    }),

    K.plate('platypus', 'Monotremes', {
      min: 2, mini: mm('Monotremata'),
      head: { name: 'Monotremes' },
      panels: [I('ph_Ornithorhynchus.jpg', '_Ornithorhynchus anatinus_ · Alex Slavenko · iNaturalist · CC BY-NC', { label: 'platypus' })],
      foot: [
        { text: 'electroreception · V' }, { text: 'venom spur', at: 1 },
        { text: 'cloaca · eggs · milk patches', at: 2 }, { text: 'epipubic bones', at: 2 },
        { text: '~32 °C', at: 3 }, { text: '10 sex chromosomes', at: 3 }
      ],
      notes: [
        'Platypus: ~40,000 electroreceptors in the bill, via V, re-evolved (the lateral line was lost in amniotes).',
        'Venom spur on the male ankle (crural gland). No adult teeth; juveniles have molars.',
        'Milk patches, no nipples. Platypus males: 5 X + 5 Y, a chain at meiosis (Grützner et al. 2004).'
      ]
    }),

    /* ------------------------------------------------------------ reproduction */
    K.part('p-repro', 'Three ways to reproduce'),

    K.grid('repro', 'Reproduction', {
      min: 4, reveal: 'col', px: 24,
      head: ['', 'monotremes', 'marsupials', 'placentals'],
      rows: [
        ['young', 'eggs', 'tiny neonate → teat', 'long gestation'],
        ['female', 'cloaca · paired uteri', '2 lateral vaginae + birth canal', '1 vagina · fused uterus'],
        ['male', 'penis in cloaca', 'bifid penis · scrotum in front', 'scrotum behind'],
        ['placenta', 'none', 'yolk-sac, short-lived', 'chorioallantoic']
      ],
      notes: [
        '2018 exam 4: "explain one group\'s reproductive system in detail."',
        'Monotreme eggs incubated ~10 days (in a pouch in echidnas). Echidna penis four-headed.',
        'Marsupial median birth canal = pseudovaginal canal. Placental uterus duplex → bicornuate → simplex; testicond exceptions.',
        'Your `mammal_female_reproductiveTract.pdf` fits here.'
      ]
    }),

    K.plate('epipubic', 'Epipubic bones', {
      min: 2.5,
      head: { name: 'Epipubic bones', facts: 'Reilly & White 2003' },
      panels: [
        I('ReillyWhite2003_Fig1_epipubic-cross-couplet.jpg', 'Reilly & White 2003'),
        I('D11_epipubic_cross_couplet.gif', 'Schematic after Reilly & White 2003', { at: 1 })
      ],
      foot: [{ text: 'both sexes' }, { text: 'cross-couplet', at: 1 }, { text: 'not pouch bones', at: 2 }],
      notes: [
        'Present in both sexes of marsupials and in monotremes.',
        'Levers in a cross-couplet: pectineus and hypaxials pull diagonally from one supporting hindlimb to the opposite forelimb, stiffening the trunk in walking.',
        'Eutherians lost them, plausibly because they constrain abdominal expansion in long pregnancies.'
      ]
    }),

    K.plate('placenta', 'Placenta', {
      min: 3,
      head: { name: 'Placenta as repurposing', facts: 'Griffith & Wagner 2017' },
      panels: [
        I('GriffithWagner2017_Fig2_viviparity-origins.jpg', 'Griffith & Wagner 2017'),
        I('GriffithWagner2017_Fig3_placenta-tissues.jpg', 'Griffith & Wagner 2017', { at: 2 })
      ],
      foot: [{ text: '>137 origins of viviparity', at: 1 }, { text: 'syncytins: viral genes', at: 3 }],
      notes: [
        'Once in mammals, ~115 in squamates (L3), 23 in fishes, 8 in amphibians.',
        'Uterus and extraembryonic membranes already did gas exchange, calcium transport and signalling in egg-layers; the placenta re-used those jobs.',
        'Syncytins, which fuse placental cells into a syncytium, are captured retroviral envelope genes, captured independently by different lineages (Dupressoir, Heidmann et al.).'
      ]
    }),

    /* ------------------------------------------------------------ marsupials */
    K.plate('marsupials', 'Metatheria', {
      min: 3.5, mini: mm('Metatheria'),
      head: { name: 'Metatheria', facts: 'marsupials' },
      panels: [
        M('07cbea79fd4c4b1d84b068ae6b44a3cb', SF('Opossum Skull', 'RISD Nature Lab'), { label: '_Didelphis_: 50 teeth', aspect: 4 / 3 }),
        M('d465b1e92af54dc6a81028935585e202', SF('Kangaroo Cranium', 'Nick Wiggins', 'CC BY-NC-SA 4.0'), { label: 'diprotodont', at: 2, aspect: 4 / 3 }),
        I('ph_Macropus.jpg', '_Macropus giganteus_ · Shane Walker · iNaturalist · CC BY', { label: 'eastern grey kangaroos', at: 2 })
      ],
      foot: [{ text: 'inflected angular process', at: 1 }, { text: 'palatal vacuities', at: 1 }, { text: 'syndactyly', at: 3 }, { text: 'digit IV hop', at: 3 }],
      notes: [
        '_Didelphis_ has 50 teeth, the most of any North American land mammal. ⚠ The 440 notes say 55.',
        'Diprotodontia: two procumbent lower incisors; syndactylous digits II + III (a grooming comb). Kangaroos hop on an enlarged digit IV with tendon springs; tail as a fifth limb at slow speed.'
      ]
    }),

    K.plate('wombat', 'Wombats and koalas', {
      tier: 2, min: 2, mini: mm('Metatheria'),
      head: { name: 'More marsupials' },
      panels: [I('ph_Vombatus.jpg', '_Vombatus ursinus_ · Simon Grove · iNaturalist · CC BY-NC', { label: 'wombats' }), I('ph_Phascolarctos.jpg', '_Phascolarctos cinereus_ · KBarnes87 · iNaturalist · CC BY-NC', { label: 'koala', at: 1 })],
      foot: [{ text: 'wombat: backward pouch · cube feces' }, { text: 'koala: velar vocal folds', at: 1 }, { text: 'marsupial moles', at: 1 }, { text: 'thylacine: 1936', at: 2 }, { text: 'devil facial tumor: ~1986', at: 2 }],
      notes: [
        'Wombats: armored rump; cube-shaped feces from stiff vs. soft bands in the intestinal wall (Yang et al. 2021).',
        'Koalas: tiny brains, a large caecum, extra "velar" vocal folds for a deep bellow.',
        '⚠ Devil facial tumor disease originated ~1986, not "60 years ago".'
      ]
    }),

    /* ------------------------------------------------------------ eutherians */
    K.part('p-eu', 'Eutheria: one hero each'),

    K.plate('xenarthra', 'Xenarthra', {
      min: 2, mini: mm('Xenarthra'),
      head: { name: 'Xenarthra', facts: 'South America' },
      panels: [
        I('ph_Dasypus.jpg', '_Dasypus novemcinctus_ · Bruno Henrique Aranda · iNaturalist · CC BY', { label: 'nine-banded armadillo' }),
        M('5f5c526b2df34902afe93b721f00e360', SF('Armadillo (Dasypodidae Dasypus)', 'The University of Edinburgh Open.Ed'), { label: 'skeleton under the shell', aspect: 4 / 3 })
      ],
      foot: [{ text: 'xenarthrous vertebrae' }, { text: 'no enamel', at: 1 }, { text: 'sloths: 5–10 cervicals', at: 2 }, { text: 'identical quadruplets', at: 3 }],
      notes: [
        '"Strange-joint" lumbar vertebrae with extra articulations. Anteaters have no teeth.',
        'Sloths break the "seven" rule: _Bradypus_ 8–10, _Choloepus_ 5–7.',
        'Nine-banded armadillos always give birth to identical quadruplets (polyembryony).',
        'Evolutionary anachronisms (avocado, Joshua tree): present as hypotheses.'
      ]
    }),

    K.plate('goldenmole', 'Golden moles', {
      min: 2.5, mini: mm('Afrotheria'),
      head: { name: 'Golden moles', facts: 'Mason 2003' },
      panels: [
        I('ph_Eremitalpa.jpg', '_Eremitalpa granti_ · iNaturalist · CC0', { label: 'Grant\'s golden mole' }),
        I('Mason2003_Fig1_golden-mole-ossicles.jpg', 'Mason 2003')
      ],
      foot: [{ text: 'hypertrophied malleus' }, { text: 'largest ossicles of 126 species', at: 1 }, { text: 'seismic hearing', at: 2 }],
      side: true,
      notes: [
        'Afrotheria was found by DNA, not by looks.',
        '_Chrysochloris_, _Chrysospalax_, _Eremitalpa_: malleus head club-shaped or spherical. Relative to body size, the largest ossicles of 126 mammal species measured.',
        'Bad for airborne hearing (lowest eardrum-to-footplate ratio recorded); good for inertial bone conduction of seismic vibration: head on the sand as a seismometer. _Amblysomus_ has ordinary ossicles.'
      ]
    }),

    K.plate('elephant', 'Elephants', {
      min: 2.5, mini: mm('Afrotheria'),
      head: { name: 'Elephants', facts: 'Shoshani et al. 2006' },
      panels: [
        I('ph_Loxodonta.jpg', '_Loxodonta cyclotis_ · pfaucher · iNaturalist · CC BY-NC'),
        I('Shoshani2006_Fig2_elephant-brain.jpg', 'Shoshani et al. 2006')
      ],
      foot: [{ text: '~4.8 kg brain' }, { text: 'newborn: ~50% of adult', at: 1 }, { text: '3 temporal gyri', at: 2 }, { text: 'molar conveyor', at: 3 }],
      side: true,
      notes: ['Largest brain of any land animal. Newborn brain ~50% of adult size (~25% in humans). Three temporal gyri, as in humans. Air cells over the braincase.', 'Molar conveyor: one tooth per quadrant at a time, six sets.']
    }),

    K.plate('sirenia', 'Sirenians', {
      min: 2, mini: mm('Afrotheria'),
      head: { name: 'Sirenians' },
      panels: [
        I('ph_Trichechus.jpg', '_Trichechus manatus_ · ungerlord · iNaturalist · CC BY-NC', { label: 'West Indian manatee' }),
        M('ea26ebf0caa34fb197be68fb0f738f00', SF('Manatee Jaw', 'CTL, University of Birmingham'), { label: 'jaw', aspect: 4 / 3 })
      ],
      foot: [{ text: 'pachyostosis' }, { text: 'horizontal molar replacement', at: 1 }, { text: 'Steller\'s sea cow: 1768', at: 2 }],
      notes: [
        'Dense ballast bones. Manatee teeth march forward without limit.',
        '⚠ The 440 notes credit "rock hyraxes" with endless molars. The other infinite-molar mammal is a marsupial: the pygmy rock-wallaby (_Petrogale concinna_).',
        'Steller\'s sea cow: ⚠ Commander Islands, not "the Aleutians"; extinct by 1768. Otter → urchin → kelp cascade is a hypothesis. Your `stellarseacow.jpg` fits here.'
      ]
    }),

    K.plate('bats', 'Bats', {
      min: 3, mini: mm('Laurasiatheria'),
      head: { name: 'Bats', facts: 'Santana 2018' },
      rows: 1,
      panels: [
        I('ph_Pteropus.jpg', '_Pteropus medius_ · 360pixual · iNaturalist · CC BY-NC', { label: 'flying fox' }),
        I('Santana2018_Fig5_bat-jaw-muscles-on-tree.jpg', 'Santana 2018'),
        M('68d484d4b3ec4bd0bd36aa560fe8f148', SF('Bat skull', 'University of Dundee Museum Collections', 'CC BY-NC-SA 4.0'), { at: 2, aspect: 4 / 3 })
      ],
      foot: [{ text: 'temporalis: 4 parts' }, { text: 'same layout, different sizes', at: 1 }, { text: 'no automatic wrist', at: 2 }, { text: 'stylohyoid–tympanic', at: 3 }],
      notes: [
        'diceCT of 12 noctilionoids: temporalis superficialis, medius, profundus, suprazygomatica.',
        'Origins and insertions conserved across diets from insects to nectar to blood; the variation is in size, not layout. Contrast rodents, which rebuilt the masseter several times.',
        'Wing: no elbow–wrist coupling, many joints (L4; Chin et al. 2017). In laryngeal echolocators the stylohyoid links the larynx to the tympanic.'
      ]
    }),

    K.plate('whales', 'Cetaceans', {
      min: 3, mini: mm('Laurasiatheria'),
      head: { name: 'Cetaceans' },
      panels: [
        I('ph_Megaptera.jpg', '_Megaptera novaeangliae_ · Wayne and Pam Osborn · iNaturalist · CC BY-NC', { label: 'humpbacks' }),
        I('Chivers1980_Fig2_porpoise-stomach.jpg', 'Porpoise · Chivers & Hladik 1980', { label: 'compound stomach' }),
        I('Meshida2022_Fig1_whale-orbit-EOMs.jpg', 'Meshida et al. 2022', { label: 'palpebral bellies', at: 1 })
      ],
      foot: [{ text: 'double-pulley astragalus', at: 2 }, { text: 'tail-first birth', at: 2 }],
      notes: [
        'Compound stomach in porpoises: convergent in layout with ruminant foregut chambers.',
        'Every rectus muscle has a huge palpebral belly into the eyelids and a small scleral belly on the globe; the eyelid bellies form a fused cone in three patterns. Protects the eye and shapes the lids under pressure.',
        'The double-pulley astragalus tied fossil whales to artiodactyls (Gingerich et al. 2001). Your `anklebones.jpg` fits here.'
      ]
    }),

    K.plate('pangolin', 'Pangolins', {
      min: 2, mini: mm('Laurasiatheria'),
      head: { name: 'Pangolins' },
      panels: [
        I('ph_Smutsia.jpg', '_Smutsia temminckii_ · Bart Wursten · iNaturalist · CC BY-NC', { label: 'ground pangolin' }),
        M('2edecaaa1c7f4b27aed5647e351f1fa7', SF('African White-bellied Pangolin Skeleton', 'Holliday Lab', 'CC BY-NC 4.0'), { label: 'skeleton', aspect: 4 / 3 }),
        I('Chivers1980_Fig1_faunivore-guts-pangolin.jpg', 'Chivers & Hladik 1980', { at: 2 })
      ],
      foot: [{ text: 'keratin scales' }, { text: 'sternoglossus to the pelvis', at: 1 }, { text: 'gizzard-like stomach', at: 2 }],
      notes: ['Keratin scales: no bone, unlike armadillo osteoderms.', 'A keratin-lined muscular stomach with swallowed stones: no teeth, so the stomach chews.']
    }),

    K.plate('laura-rest', 'Other laurasiatherians', {
      tier: 2, min: 1.5, mini: mm('Laurasiatheria'),
      head: { name: 'Laurasiatheria' },
      panels: [I('ph_Condylura.jpg', '_Condylura cristata_ · ginebigkwe · iNaturalist · CC BY-NC', { label: 'star-nosed mole' })],
      foot: [{ text: 'ruminant foregut · perissodactyl hindgut' }, { text: 'carnassials P⁴/M₁', at: 1 }, { text: 'star-nosed mole', at: 2 }],
      notes: ['Star-nosed mole: 22 rays; "sniffs" bubbles underwater. ⚠ Not the "only amniote that smells underwater": water shrews do it too (Catania 2006).']
    }),

    K.plate('glires', 'Euarchontoglires', {
      min: 3, mini: mm('Euarchontoglires'),
      head: { name: 'Euarchontoglires' },
      panels: [
        I('ph_Hydrochoerus.jpg', '_Hydrochoerus hydrochaeris_ · avocat · iNaturalist · CC BY', { label: 'capybara' }),
        M('77a788c945864ec39dca84a1f56601e4', SF('Capybara - skull of the largest living rodent', 'WitmerLab at Ohio University'), { label: 'capybara skull', aspect: 4 / 3 })
      ],
      foot: [
        { text: 'ever-growing incisors' }, { text: 'enamel in front only' },
        { text: 'lagomorph peg tooth', at: 1 }, { text: 'masseter layouts', at: 1 },
        { text: 'tooth comb · tapetum', at: 2 }, { text: 'facial expression · VII', at: 3 }
      ],
      notes: [
        'Glires: >40% of mammal species. Lagomorphs have a second, small upper incisor behind the first.',
        'Sciuromorph / hystricomorph / myomorph masseters: a quick ID set for skull labs.',
        'Primates: strepsirrhine tooth comb and tapetum; tarsiers have no tapetum, giant eyes instead; platyrrhines vs. catarrhines.',
        'Facial expression muscles (VII) peak in primates. This closes the L1 → L5 thread.'
      ]
    }),

    K.grid('sea', 'Back to the sea', {
      min: 2, reveal: 'col',
      head: ['', 'tail-swimmers', 'flipper-swimmers'],
      rows: [
        ['who', 'cetaceans · sirenians', 'pinnipeds'],
        ['propulsion', 'flukes', 'flippers'],
        ['latissimus dorsi', 'reduced', 'huge'],
        ['birth', 'in water', 'on land']
      ],
      notes: ['2018 exam 4: "pick a marine mammal lineage and compare it to land relatives." Three independent returns, plus sea otters and the extinct sea sloths.']
    }),

    /* ------------------------------------------------------------ review */
    K.clues('test', 'If I tell you on a test…', {
      min: 4, px: 23,
      rows: [
        { c: ['single dentary', '3 ossicles', '2 occipital condyles', 'diaphragm', 'no RBC nuclei'], a: 'Mammalia' },
        { c: ['interclavicle + coracoid + epicoracoid', 'cloaca', 'egg'], a: 'Monotremata', more: true },
        { c: ['epipubic bones', 'inflected angular process', '2 vaginae', 'scrotum in front'], a: 'Metatheria', more: true },
        { c: ['xenarthrous vertebrae', 'no enamel'], a: 'Xenarthra', more: true },
        { c: ['huge malleus', 'blind', 'sand-swimmer', 'Africa'], a: 'golden mole', more: true },
        { c: ['double-pulley astragalus'], a: 'Cetartiodactyla', more: true },
        { c: ['carnassials P⁴/M₁'], a: 'Carnivora', more: true },
        { c: ['ever-growing incisors', 'enamel in front', 'diastema'], a: 'Glires', more: true }
      ],
      notes: ['Glires with 2 pairs of upper incisors = lagomorph.']
    }),

    K.plate('practice', 'Practice tree', {
      min: 1,
      head: { name: 'Build the tree', facts: '2018 exam 4' },
      panels: [],
      foot: ['kangaroo', 'echidna', 'porcupine', 'aardvark', 'tree shrew', 'armadillo', 'elephant', 'golden mole', 'mole', 'rhinoceros', 'human'].map((text) => ({ text }))
    }),

    K.tree('practice-a', 'Practice tree: answer', {
      min: 3, src: PRACTICE,
      steps: [{}, { hi: ['Theria'] }, { hi: ['Atlantogenata'] }, { hi: ['Boreoeutheria'] }],
      notes: ['Afrotheria splits into Afroinsectiphilia (aardvark, golden moles, tenrecs, elephant shrews) and Paenungulata (elephants, sirenians, hyraxes). Shown, not tested.']
    }),

    K.plate('practice2', 'Capstone tree', {
      tier: 2, min: 1,
      head: { name: 'Capstone tree', facts: '2022 exam 4' },
      panels: [],
      foot: ['anteater', 'kangaroo', 'chameleon', 'opossum', 'dove', 'pangolin', 'echidna', 'lizardfish', 'cobra', 'gecko', 'manatee', 'bat', 'mouse', 'crocodile', 'platypus', 'armadillo', 'great white', '_Sphenodon_', 'human', 'aardvark', 'dolphin'].map((text) => ({ text })),
      notes: ['Label Xenarthra, Squamata, Eutheria, Amniota, Mammalia. Serves as a capstone review for all five lectures.']
    }),

    K.tree('practice2-a', 'Capstone tree: answer', {
      tier: 2, min: 4, src: PRACTICE2,
      steps: [{}, { hi: ['Amniota'] }, { hi: ['Mammalia'] }, { hi: ['Eutheria'] }, { hi: ['Xenarthra'] }, { hi: ['Squamata'] }],
      notes: []
    })
  ];

  window.DECK = { title: 'Mammalia', session: 80, minutes: 60, segments };
})();
