/* Lecture 1 of 5: Caudata. From lectures/outlines/L1_Caudata.md in the comparative repo.
 * On screen: clade names, anatomy, a few numbers. Everything else is in notes (S). */
(function () {
  'use strict';
  const K = window.Kit, I = K.img, SF = K.sf;
  const MS = (spec, id) => `${spec} · oVert · MorphoSource ${id}`;
  const SHORTEN = '*red* = shortening';

  const CAUDATA = `
Caudata
  Cryptobranchoidea
    Cryptobranchidae | hellbender, _Andrias_
    Hynobiidae | Asian salamanders
  Diadectosalamandroidei
    Sirenidae | sirens
    Salamandroidea
      .
        Salamandridae | newts
        .
          Ambystomatidae | mole salamanders, axolotl
          Dicamptodontidae | Pacific giant salamanders
      .
        Proteidae | mudpuppy, olm
        .
          Rhyacotritonidae | torrent salamanders
          .
            Amphiumidae | amphiumas
            Plethodontidae | lungless salamanders`;
  const at = (hi) => ({ src: CAUDATA, hi });

  const PRACTICE = `
Gnathostomata
  shark
  .
    lizard
    Lissamphibia
      caecilian
      Batrachia
        Anura
          _Ascaphus_
          .
            midwife toad
            tree frog
        Caudata
          hellbender
          .
            siren
            Salamandroidea
              newt
              .
                mudpuppy
                red-backed salamander`;

  const segments = [
    K.cover('Caudata', {
      sub: 'Urodela · salamanders',
      pic: 'img/ph_Cryptobranchus.jpg', cap: '_Cryptobranchus alleganiensis_, the hellbender',
      notes: ['Salamanders were promised as the treat for after Thanksgiving (lec24).', 'Caudata (_cauda_, tail) = Urodela (_oura_ + _dēlos_, visible tail). Interchangeable.']
    }),

    K.plate('hook', '_Homo diluvii testis_', {
      min: 2.5,
      head: { name: '_Homo diluvii testis_', facts: 'Scheuchzer 1726' },
      panels: [
        SF('2b84320f2a2b4493a9a2a8f8ffe5626b', 'The holotype, Teylers Museum · "Andrias scheuchzeri Holotype" by Olof Moleman · Sketchfab', { aspect: 16 / 10 }),
        I('ph_Andrias-held.jpg', 'Chinese giant salamander', { label: '_Andrias_ today', at: 2 })
      ],
      foot: [{ text: '"a man drowned in the Flood"', at: 0 }, { text: 'Cuvier, c. 1811', at: 1 }, { text: '_Andrias scheuchzeri_', at: 2 }],
      notes: [
        '1726: Scheuchzer describes a skeleton from Öhningen as a man drowned in Noah\'s flood. The 3D model is that slab: turn it and find the skull, the spine, the forelimbs.',
        'Cuvier (c. 1811) shows it is a giant salamander. Comparative anatomy beat the story in ~85 years.',
        'Same genus alive today in China and Japan. The fossil is Miocene European: the family once spanned Laurasia (comes back with the disjunct distribution).',
        '⚑ Photo from the 2022 slides (web image search); source not recorded.'
      ]
    }),

    K.path('where', 'Where we are', {
      min: 2, root: 'Vertebrata', to: 'Caudata',
      steps: [{}, { hi: ['Tetrapoda'] }, { hi: ['Lissamphibia'] }, { hi: ['Batrachia'] }, { hi: ['Caudata'] }],
      notes: [
        'Picks up from frogs (lec23–24). Caecilians (lec22) are the outgroup.',
        'Batrachia (_batrachos_, frog) = salamanders + frogs.',
        'Name trap: Salamandr*oidea* is the big clade; Salamandr*idae* is only the newts.',
        '~800+ species (AmphibiaWeb; old slides said ~700). About half of world diversity is in the SE US and Appalachia.'
      ]
    }),

    K.plate('bodyplan', 'Trunk muscles', {
      min: 2.5,
      head: { name: 'Epaxials and hypaxials', facts: 'three lissamphibians' },
      panels: [
        I('OReilly2000_Fig1_epaxial-muscles-3-lissamphibians.jpg', "O'Reilly, Summers & Ritter 2000"),
        SF('1484d32a04374e3d9cd718c0625d622f', '"Muscles of an adult Ambystoma mexicanum" · GigaScience · Sketchfab · CC BY', { label: 'axolotl, segmented', at: 1 })
      ],
      foot: [
        { text: 'dorsalis trunci · interspinalis · intertransversarii' },
        { text: 'subvertebralis · external oblique · internal oblique · transversus', at: 1 },
        { text: 'torsion', at: 2 }
      ],
      notes: [
        'Body plan = the generalized tetrapod run in reverse: sprawling limbs, lateral undulation, cold wet habitats, skin as a respiratory organ.',
        'Epaxials on dorsal rami; hypaxials on ventral rami. External oblique often two layers.',
        'The 3D axolotl is segmented muscle by muscle from microCT: turn it to see the myomeres above and below the horizontal septum.',
        'New land job for the hypaxials: resisting long-axis *torsion* of the trunk.'
      ]
    }),

    K.plate('waves', 'Swim and walk', {
      min: 2.5,
      head: { name: 'Water and land' },
      panels: [
        I('A1_salamander_swim_traveling.gif', '_Cryptobranchus_, dorsal · ' + MS('UF Herp 88726', '000036424'), { label: 'traveling wave' }),
        I('A1_salamander_walk_standing.gif', '_Cryptobranchus_, dorsal · ' + MS('UF Herp 88726', '000036424'), { label: 'standing wave', at: 1 })
      ],
      legend: SHORTEN,
      notes: [
        'In water the bend travels head to tail and grows toward the tail.',
        'On land: a standing wave. The spine bends side to side but hips and shoulders stay put.',
        'Embodied prompt: on all fours, elbows out, walk a standing wave.'
      ]
    }),

    K.tree('tree', 'Caudata', {
      min: 5, src: CAUDATA, subs: true,
      steps: [{}, { hi: ['Cryptobranchoidea'] }, { hi: ['Salamandroidea'] }],
      marks: [{ on: 'Cryptobranchoidea', text: 'external fertilization', at: 1 }, { on: 'Salamandroidea', text: 'spermatophore', at: 2 }],
      notes: [
        'Know which families sit in Salamandroidea; the order inside it is shown but not tested.',
        'Topology: Hime et al. 2021 (Syst. Biol. 70:49), 220 nuclear loci: Cryptobranchoidea first, then sirens sister to Salamandroidea. Inside Salamandroidea, newts + (mole + Pacific giant salamanders) vs. proteids + (torrent salamanders + (amphiumas + plethodontids)). Same as Pyron & Wiens 2011.',
        '⚠ Past lectures said all Caudata fertilize internally, and described hynobiids passing spermatophores. Only *Salamandroidea* use spermatophores. Cryptobranchoids fertilize externally (hellbender males guard a nest cavity).',
        'Siren fertilization is poorly known; no spermatophore found. Hedge.',
        'Amphibian table: caecilians internal with a phallodeum; most salamanders internal, no intromittent organ; cryptobranchoids external; frogs external except _Ascaphus_.'
      ]
    }),

    K.part('p-tour', 'Families'),

    K.plate('crypto', 'Cryptobranchidae', {
      min: 2.5, mini: at('Cryptobranchidae'),
      head: { name: 'Cryptobranchidae', facts: '_Andrias_ · _Cryptobranchus_' },
      panels: [
        I('ph_Cryptobranchus.jpg', '_Cryptobranchus alleganiensis_', { label: 'hellbender: skin folds' }),
        SF('879fc03673e84b00a788290ca835ae4e', '_Andrias japonicus_ FMNH 31356 · Blackburn Lab · Sketchfab', { label: '_Andrias_ skeleton', at: 1, aspect: 16 / 10 })
      ],
      foot: [{ text: '1 pair of gill slits' }, { text: 'E Asia + E North America', at: 1 }],
      notes: [
        '_kryptos_ hidden + _branchia_ gill. _Andrias_ to ~1.8 m; now split into several species (_A. sligoi_ 2019); wild populations mostly farm-mixed.',
        'Hellbender ("snot otter"), ~70 cm, fast cold streams of Appalachia and the Ozarks. Breathes mostly through its baggy lateral skin.',
        'Adults lose the gills but keep one pair of gill slits (Iordansky 2001).',
        'Disjunct: eastern Asia and eastern North America, nothing between. Paddlefish and _Alligator_ show the same pattern: a once-Laurasian group, relict at both ends.',
        '⚑ Hellbender photo from the 2022 slides (web image search); source not recorded.'
      ]
    }),

    K.plate('hyno', 'Hynobiidae', {
      min: 1.5, mini: at('Hynobiidae'),
      head: { name: 'Hynobiidae', facts: 'Asia' },
      panels: [
        SF('31cd72d784ae4190b1b05f2cf0a72613', '_Hynobius nebulosus_, live scan · ffish.asia / floraZia · Sketchfab · CC0', { label: '_Hynobius_', aspect: 16 / 10 }),
        I('ph_Onychodactylus.jpg', 'Tetrapod Zoology (Sci. Am. blogs) 2013', { label: '_Onychodactylus_: lungless', at: 1 }),
        I('ph_Salamandrella-ice.gif', '_Salamandrella keyserlingii_', { label: '_Salamandrella_: freezes', at: 2 })
      ],
      foot: [{ text: 'external fertilization' }, { text: 'lungs (most)' }],
      notes: [
        '~90 species, Asia. The 3D model is a photogrammetry scan of a live clouded salamander.',
        '⚠ The 440 notes call Hynobiidae lungless. Most have lungs. Only _Onychodactylus_ is lungless, independently of plethodontids (Lewis & Hanken 2017).',
        '_Salamandrella keyserlingii_ survives freezing, reportedly to −35 °C and below.',
        '⚑ _Salamandrella_ clip from the 2022 slides (web image search); source not recorded.'
      ]
    }),

    K.plate('siren', 'Sirenidae', {
      min: 2, mini: at('Sirenidae'),
      head: { name: 'Sirenidae', facts: '_Siren_ · _Pseudobranchus_' },
      panels: [
        I('ph_Siren.jpg', '_Siren_', { label: 'external gills, forelimbs only' }),
        SF('f258d5a50e8d448ab1ccb6830ae28cf0', '"Lesser Siren Skeleton" · Blackburn Lab · Sketchfab', { label: 'no hind limbs, no pelvis', aspect: 16 / 10 })
      ],
      foot: [{ text: 'horny beak' }, { text: '3 pairs of gill slits' }, { text: 'no prefrontal', at: 1 }],
      notes: [
        'SE US, permanently gilled. Keratinous beak on a toothless premaxilla (Iordansky 2001).',
        'Turn the skeleton: shoulder girdle and tiny forelimbs, then nothing behind but vertebrae.',
        'Sirens and proteids lack prefrontals, bones that normally ossify at metamorphosis.',
        'Aestivate in a mucus cocoon when ponds dry.',
        '⚑ Photo from the 2022 slides (web image search); source not recorded.'
      ]
    }),

    K.plate('proteid', 'Proteidae', {
      min: 2, mini: at('Proteidae'),
      head: { name: 'Proteidae', facts: '_Necturus_ · _Proteus_' },
      panels: [
        I('ph_Necturus.jpg', '_Necturus maculosus_', { label: 'mudpuppy' }),
        I('ph_Proteus.jpg', '_Proteus anguinus_', { label: 'olm' }),
        SF('c04e618ff93b4af18b0113f159503ed7', '"Necturus Skull (Labeled)" by jdb56 · Sketchfab · CC BY', { at: 1, aspect: 1 }),
        I('Bauer1997_Fig3_Necturus-depressors.jpg', 'Bauer 1997', { label: 'ceratomandibularis', at: 2 })
      ],
      foot: [{ text: '2 pairs of gill slits' }, { text: '3 ceratobranchials' }],
      notes: [
        'Opisthotic stays separate from the exoccipital: a larval condition (Iordansky 2001).',
        '_Necturus_ has a uniquely complex ceratomandibularis: the proteid autapomorphy (Bauer 1997).',
        'Olm: depigmented cave form, eyes under the skin, predicted lifespan >100 years (Voituron et al. 2011).',
        '⚑ Photos from the 2022 slides (web image search); sources not recorded.'
      ]
    }),

    K.plate('amphiuma', 'Amphiumidae', {
      min: 2, mini: at('Amphiumidae'),
      head: { name: 'Amphiumidae', facts: '_Amphiuma_' },
      panels: [
        I('ph_Amphiuma-eggs.jpg', '_Amphiuma means_ with its eggs', { label: '_A. means_: 2 toes' }),
        SF('95e31f7b5cc14c8fbcc71cecd6e18ac8', '"Two-Toed Amphiuma, Amphiumidae" · Florida Museum · Sketchfab', { aspect: 16 / 10 }),
        I('Iordansky2001_Fig1_Amphiuma-skull.jpg', 'Iordansky 2001', { label: 'temporal crest', at: 1 })
      ],
      foot: [{ text: '1 · 2 · 3 toes' }, { text: 'ceratomandibularis kept', at: 2 }],
      notes: [
        'Three species, told apart by toe count. One pair of gill slits. Females coil around their eggs.',
        'Adult-type skull: firm temporal crest, pinnate adductors working over a parietal "pulley" (Iordansky 2001).',
        'Keep the larval ceratomandibularis into adulthood (Bauer 1997).',
        '⚑ Photo from the 2022 slides ("Amphiuma means with egg clutch, May 2010"); photographer not recorded.'
      ]
    }),

    K.plate('rhyaco', 'Rhyacotritonidae', {
      tier: 2, min: 0.5, mini: at('Rhyacotritonidae'),
      head: { name: 'Rhyacotritonidae', facts: 'Pacific Northwest' },
      panels: [I('ph_Rhyacotriton.jpg', '_Rhyacotriton_'), I('ph_Rhyacotriton-b.jpg', '_Rhyacotriton_ · Todd Pierson')],
      foot: [{ text: '4 species' }, { text: 'no paedomorphs' }],
      notes: ['Four species, Pacific Northwest, no paedomorphic members. Cold seeps and splash zones.', '⚑ Left photo from the 2022 slides; source not recorded.']
    }),

    K.plate('ambystoma', 'Ambystomatidae', {
      min: 2, mini: at('Ambystomatidae'),
      head: { name: 'Ambystomatidae', facts: 'mole salamanders · axolotl' },
      panels: [
        I('ph_Ambystoma-tigrinum.jpg', '_A. tigrinum_', { label: 'tiger' }),
        I('ph_Ambystoma-opacum.jpg', '_A. opacum_', { label: 'marbled' }),
        I('ph_axolotl.jpg', '_A. mexicanum_', { label: 'axolotl' }),
        I('ph_Ambystoma-laterale.jpg', '_A. laterale_', { label: 'blue-spotted', at: 1 })
      ],
      foot: [{ text: 'vernal pools' }, { text: 'unisexual _Ambystoma_', at: 1 }, { text: 'kleptogenesis', at: 1 }],
      notes: [
        'Unisexual _Ambystoma_: all-female polyploids that "steal" sperm, mostly from blue-spotted and Jefferson salamanders. Lineage ~5 Myr old (Bogart et al.).',
        '⚠ Drop the 440 "natural de-extinction" framing; present it as genome-stealing.',
        '⚑ Photos from the 2022 slides (web image search); sources not recorded.'
      ]
    }),

    K.plate('dicampto', 'Dicamptodontidae', {
      tier: 2, min: 0.5, mini: at('Dicamptodontidae'),
      head: { name: 'Dicamptodontidae', facts: 'Pacific giant salamanders' },
      panels: [I('ph_Dicamptodon.jpg', '_Dicamptodon_ · Gary Nafis'), I('ph_Dicamptodon-stream.jpg', '_Dicamptodon_ larva · Todd Pierson')],
      foot: [{ text: 'facultative paedomorphs' }],
      notes: ['Some species are facultatively paedomorphic. Adults to ~35 cm; they bark.']
    }),

    K.plate('pletho', 'Plethodontidae', {
      min: 3, mini: at('Plethodontidae'),
      head: { name: 'Plethodontidae', facts: 'lungless salamanders' },
      panels: [
        I('ph_Plethodon-yonahlossee.jpg', '_Plethodon yonahlossee_', { label: 'no lungs' }),
        I('ph_Eurycea-cirri.jpg', '_Eurycea_, males', { label: 'nasolabial groove · cirri', at: 1 }),
        I('ph_Plethodon-courtship.jpg', '_Plethodon_ courtship', { label: 'mental gland', at: 1 }),
        I('ph_Plethodon-eggs.jpg', '_Plethodon_ · davehuth.com', { label: 'direct development', at: 2 })
      ],
      notes: [
        'Most species-rich family. Most are direct developers: no larva, the female guards eggs on land.',
        'Nasolabial groove: slit from lip to nostril that wicks chemicals to the vomeronasal organ. A real family synapomorphy.',
        '⚠ The 440 notes say cirri "contain vomeronasal organs". Cirri are fleshy downward extensions of the groove in males of some genera (_Eurycea_); they carry chemicals up to the VNO, they do not house it.',
        'Courtship: tail-straddling walk; male slaps or scratches pheromone from the mental (chin) gland onto the female (inset in the photo).',
        '⚑ Photos from the 2022 slides (web image search); sources not recorded except the egg photo.'
      ]
    }),

    K.plate('newt', 'Salamandridae', {
      min: 2.5, mini: at('Salamandridae'),
      head: { name: 'Salamandridae', facts: 'newts · true salamanders' },
      panels: [
        I('ph_eft.jpg', 'Red eft · Judy Gallagher · CC BY 2.0', { label: 'keratinized skin' }),
        I('ph_Notophthalmus.jpg', '_Notophthalmus viridescens_', { label: 'aquatic adult' }),
        I('Wu2012_Fig5_Pachytriton-skull-frontosquamosal-arch.jpg', 'Wu, Wang & Hanken 2012', { label: 'frontosquamosal arch', at: 1 }),
        I('ph_newt-larva.jpg', 'eastern newt larva', { label: 'larva', at: 2 })
      ],
      foot: [{ text: 'larva → eft → adult', at: 2 }],
      notes: [
        'Rough, dry, keratinized skin: the eft can wander far from water for years. Compare the slick plethodontid skin.',
        'Frontosquamosal arch: a bony bridge over the orbit, thought to protect the retracted eye (Wu, Wang & Hanken 2012).',
        '⚠ The 440 notes call it a convergent "temporal fenestra". Call it the frontosquamosal arch. Newts still lack a jugal.',
        'Three-stage life cycle: larva → terrestrial eft → aquatic adult.',
        '⚑ Adult and larva photos from the 2022 slides (web image search); sources not recorded.'
      ]
    }),

    /* ------------------------------------------------------------ skull */
    K.part('p-skull', 'Skull'),

    K.plate('schoch', 'Fewer bones', {
      min: 3,
      head: { name: 'Temnospondyl → batrachian', facts: 'Schoch 2014' },
      panels: [
        I('Schoch2014_Fig1_temnospondyl-to-batrachian-skull.jpg', 'Schoch 2014'),
        I('Schoch2014_Fig4_jaw-muscles-open-skull.jpg', 'Schoch 2014', { at: 3 })
      ],
      foot: [
        { text: '19 of 41 dermal bones' },
        { text: 'never: postfrontal · postorbital · jugal · tabular · ectopterygoid', at: 1 },
        { text: 'parietal + postparietal · squamosal + supratemporal', at: 2 }
      ],
      side: true,
      notes: [
        'Batrachian skulls keep ~19 of the 41 temnospondyl dermal bones.',
        'Never present at any stage: in branchiosaurid temnospondyls these were the *last* to ossify, so truncating the sequence removes exactly them.',
        'Fused, not lost: "salamander parietal" = parietal + postparietal; "salamander squamosal" = squamosal + supratemporal.',
        'Palatopterygoid: a toothed larval compound bone; its front part is resorbed at metamorphosis.',
        'Cheek opens into the orbit (gymnokrotaphy), which is why "no jugal" is the ID character. Fig 4: adductors bulge through the open cheek.'
      ]
    }),

    K.plate('idskull', 'Salamander skull', {
      min: 2.5,
      head: { name: 'Salamander skull', facts: '_Ambystoma_ · _Dicamptodon_' },
      panels: [
        SF('d1f2a430dd8c45ce8708d3debcbe0ba8', '"Spotted Salamander Skull Anatomy" · Blackburn Lab · Sketchfab', { label: 'bones coloured', aspect: 16 / 10 }),
        I('CT_Dicamptodon-skull.jpg', '_Dicamptodon ensatus_ · DigiMorph', { at: 1 })
      ],
      foot: [{ text: 'no jugal' }, { text: 'open cheek' }, { text: '2 occipital condyles', at: 1 }, { text: 'pedicellate teeth', at: 2 }, { text: 'vomerine teeth', at: 2 }, { text: 'big hyobranchials', at: 3 }],
      notes: [
        '2018 exam 4 Q19 asked caudate vs. squamate from photographs, all-or-nothing.',
        'Turn the spotted salamander skull to the side: no bar under the orbit, the cheek opens straight into it.',
        'Two occipital condyles: lissamphibians and mammals.',
        'Pedicellate teeth on upper *and* lower jaws (unlike most frogs).',
        'Huge hyobranchials in gilled forms.'
      ]
    }),

    K.plate('eurycea', '_Eurycea rathbuni_', {
      tier: 2, min: 1.5,
      head: { name: '_Eurycea rathbuni_', facts: 'Texas blind salamander' },
      panels: [I('Clemen2009_Fig1_Eurycea-rathbuni-skull.jpg', 'Clemen, Sever & Greven 2009')],
      foot: [{ text: 'no maxillae' }, { text: '47–49 premaxillary teeth' }, { text: '~85 dentary teeth' }],
      side: true,
      notes: ['Broad flat duck-bill skull. Teeth in a single row each.', 'The pedicel "dividing zone" barely forms, so the teeth never become fully pedicellate.']
    }),

    /* ------------------------------------------------------------ jaws */
    K.part('p-jaw', 'Opening and closing the jaw'),

    K.plate('openers', 'Jaw openers', {
      min: 2.5,
      head: { name: 'Jaw openers', facts: 'second arch' },
      panels: [
        I('J1_salamander_jaw.gif', '_Plethodon glutinosus_ · ' + MS('UF Herp 3183', '000116731')),
        I('Bauer1997_Fig1_Triturus-larva-depressors.jpg', 'Larval _Triturus_ · Bauer 1997', { at: 2 })
      ],
      foot: [{ text: 'adductor mandibulae · V₃' }, { text: 'depressor mandibulae · VII', at: 1 }, { text: 'ceratomandibularis · VII', at: 2 }],
      legend: SHORTEN,
      notes: [
        'Depressor inserts behind the jaw joint, so it opens; the adductor inserts in front, so it closes. Same rule in every jawed vertebrate.',
        'DM and CM both on the ramus jugularis of VII (Bauer 1997).',
        'Larval DM stays one muscle in most adults; divided into anterior and posterior parts in bolitoglossine plethodontids and _Amphiuma_.'
      ]
    }),

    K.plate('desmog', '_Desmognathus_', {
      min: 3.5,
      head: { name: '_Desmognathus_', facts: 'Deban & Richardson 2017' },
      panels: [
        I('ph_Desmognathus.jpg', '_Desmognathus_ · Todd Pierson'),
        I('Deban2017_Fig1_desmognathus-QP-muscle.jpg', 'Deban & Richardson 2017', { label: 'quadratopectoralis · VII', at: 1 }),
        I('Deban2017_Fig4_head-flexion-AM-ligament.jpg', 'Deban & Richardson 2017', { label: 'atlanto-mandibular ligament', at: 2 })
      ],
      foot: [{ text: 'stalked occipital condyles', at: 3 }],
      notes: [
        'Dusky salamanders: stream-side plethodontids that wedge under rocks. Note the thick neck.',
        'QP is a splinter of the interhyoideus, so a VII muscle. It pulls the back of the skull down toward the pectoral girdle.',
        'AM ligament runs from the atlas through a trochlea on the otic–parietal region to the lower jaw. Flex the head, the ligament goes taut and drags the mandible shut.',
        'Stalked condyles shorten the out-lever as the head flexes. Fig 4 is the slide: raised → resting → flexed, levers drawn.'
      ]
    }),

    K.plate('bite', 'Biting with the neck', {
      min: 2.5,
      head: { name: 'Biting with the neck', facts: '_Desmognathus_' },
      panels: [
        I('J2_desmognathine_head_flexion_bite.gif', 'Schematic on _Plethodon glutinosus_ · ' + MS('UF Herp 3183', '000116731')),
        I('Deban2017_Fig7_bite-force-traces.jpg', 'Deban & Richardson 2017', { at: 1 })
      ],
      foot: [{ text: 'QP: 73% → 85% of bite', at: 1 }, { text: '~13× _Pseudotriton_', at: 2 }, { text: 'caecilian interhyoideus posterior', at: 3 }],
      legend: SHORTEN,
      notes: [
        'QP gives 73% of bite moment at rest, 85% with the head flexed. The indirect route gives 5× the force of all three jaw levators combined.',
        '_D. quadramaculatus_ bites 8.2 N mean (max 14.3 N), ~13× a same-sized _Pseudotriton_. Lizard-class: a similar _Anolis_ bites ~11 N.',
        'Why: they wedge under rocks and burrow, so bulky dorsal adductors would widen the head.',
        'Callback to lec22: caecilians close the jaw with the interhyoideus posterior on the retroarticular process. Deban & Richardson: homologous to the QP. Two burrowing lineages recruited the same second-arch muscle.'
      ]
    }),

    K.plate('paedo', 'Paedomorphic jaws', {
      min: 3,
      head: { name: 'Paedomorphic jaws', facts: 'Iordansky 2001' },
      panels: [
        I('Iordansky2001_Fig3_axolotl-jaw-muscles.jpg', 'Iordansky 2001', { label: 'axolotl' }),
        I('Iordansky2001_Fig2_Amphiuma-jaw-muscles.jpg', 'Iordansky 2001', { label: '_Amphiuma_', at: 1 })
      ],
      notes: [
        'Paedomorphic jaws are not just big larval jaws. Simple axolotl adductors vs. complex pinnate _Amphiuma_ adductors.',
        'Neoteny (a physiological block on the thyroid signal) ≠ evolved paedomorphosis.'
      ]
    }),

    K.grid('paedo-t', 'Larval, adult, specialized', {
      tier: 2, min: 2, reveal: 'row',
      head: ['', 'larval', 'adult', 'specialized'],
      rows: [['_Siren_', '18', '8', '9'], ['_Amphiuma_', '6', '21', '9'], ['_Andrias_', '3', '23', '3'], ['axolotl', '12', '10', '*0*']],
      notes: [
        'Iordansky\'s character tallies. _Andrias_ appears as _Megalobatrachus_ in the paper.',
        'The axolotl is the only one with no specialized characters.',
        'Hyobranchial skeleton stays larval in all perennibranchiates. Ceratobranchials: 4 in _Siren_, cryptobranchids, _Amphiuma_, axolotl; 3 in proteids; 1–2 in metamorphosed salamanders.'
      ]
    }),

    /* ------------------------------------------------------------ feeding, breathing */
    K.part('p-feed', 'Tongue, throat, heart'),

    K.plate('suction', 'Suction', {
      min: 2.5,
      head: { name: '_Pachytriton_', facts: 'suction feeding' },
      panels: [I('Wu2012_Fig9-10_Pachytriton-hyobranchial.jpg', 'Wu, Wang & Hanken 2012')],
      foot: [{ text: 'ossified basibranchial' }, { text: 'ossified ceratobranchial 2' }, { text: 'bowed epibranchial', at: 1 }],
      side: true,
      notes: [
        'Chinese stout newts. Basibranchial and second ceratobranchial fully ossified; cartilage in terrestrial salamanders.',
        'A strongly bowed epibranchial wraps the neck and is pulled down and forward to expand the mouth. X-ray: ceratobranchials in yellow.'
      ]
    }),

    K.plate('ballistic', 'Ballistic tongues', {
      min: 2.5,
      head: { name: 'Ballistic tongues', facts: 'bolitoglossine plethodontids' },
      panels: [
        I('ph_Bolitoglossa.jpg', '_Bolitoglossa_', { label: 'bolitoglossine' }),
        I('fig_tongue-projection.jpg', 'tongue skeleton, 0–6 ms', { label: 'subarcualis rectus · IX' }),
        I('ph_Hydromantes-tongue.jpg', '_Hydromantes_', { label: 'elastic recoil', at: 1 })
      ],
      foot: [{ text: 'rectus cervicis: retraction', at: 2 }],
      notes: [
        'Subarcualis rectus (third arch, IX) spirals around the epibranchials and squeezes them forward like a watermelon seed.',
        'Power comes from elastic recoil of collagen in the muscle sheath; peak power well beyond muscle alone (_Hydromantes_, _Bolitoglossa_; Deban et al. 2007).',
        '⚠ Not "fastest vertebrate movement". Say "among the most powerful (power per unit mass) movements measured in vertebrates".',
        'Bolitoglossine feet: progenesis leaves fully webbed pad-like feet, useful on wet leaves.',
        'Video in the 2022 notes: youtube.com/watch?v=Fu8zrLCxiH8.',
        '⚑ The 0–6 ms figure and both photos are from the 2022 slides (web image search); sources not recorded. The figure looks like Deban et al.: check before citing.'
      ]
    }),

    K.plate('septum', 'Atrial septum', {
      min: 4,
      head: { name: 'Lungs and the atrial septum', facts: 'Lewis & Hanken 2017' },
      panels: [
        I('LewisHanken2017_Fig1_atrial-septum-schematic.jpg', 'Lewis & Hanken 2017', { label: 'AS1 · AS2' }),
        I('LewisHanken2017_Fig5_lunged-vs-lungless-atrium.jpg', 'Lewis & Hanken 2017', { label: 'lunged vs. lungless', at: 1 })
      ],
      foot: [{ text: 'no AS2: plethodontids · _Onychodactylus_', at: 2 }, { text: 'no pulmonary vein', at: 3 }],
      notes: [
        'Lungless salamanders breathe through skin plus buccopharyngeal pumping over the vascular mouth lining. Gilled forms hang gills off enlarged hyobranchials.',
        'Lunged: AS1 at ~45° to the sagittal plane; AS2 dorsoventral, the dorsal wall of the left atrium. Ancestral (cryptobranchids, hynobiids): both.',
        'Plethodontids never form AS2 at any stage: non-appearance, not regression. _Onychodactylus_, lungless independently, also lacks AS2. Two convergent losses.',
        'No pulmonary vein, no spiral valve in plethodontids. In mammals part of the septum (dorsal mesenchymal protrusion) is induced by the pulmonary vein. Lose the lung, lose the signal, lose the septum.',
        'Human parallel: atrial septal defects (Holt–Oram, _TBX5_). "Folding, not adding."'
      ]
    }),

    K.plate('boundary', 'Head–trunk boundary', {
      tier: 2, min: 3,
      head: { name: 'Head–trunk boundary', facts: 'Sefton et al. 2016' },
      panels: [I('Sefton2016_Fig6_head-trunk-boundary.jpg', 'Sefton, Bhullar, Mohaddes & Hanken 2016')],
      foot: [{ text: 'cucullaris · XI' }, { text: 'somites 1–3', at: 1 }],
      side: true,
      notes: [
        'GFP grafts in the axolotl: the cucullaris (→ trapezius and sternocleidomastoid in us, XI) and the posterior gill levators come from unsegmented cranial mesoderm next to somites 1–3.',
        'Somite 3 is the posterior limit of head mesoderm. Axolotl vs. chicken schematic.'
      ]
    }),

    K.grid('nerves', 'Nerves and arches', {
      min: 3, reveal: 'row',
      head: ['', 'nerve', 'muscles'],
      rows: [
        ['1st arch', 'V₃', 'adductor mandibulae · intermandibularis'],
        ['2nd arch', 'VII', 'depressor mandibulae · interhyoideus · QP · sphincter colli'],
        ['3rd arch', 'IX', 'subarcualis rectus']
      ],
      notes: [
        'V₁, V₂, V₃: only V₃ is motor.',
        'VII branches: ophthalmicus and buccalis (lateral line); palatinus; hyomandibularis → mandibularis internus (= chorda tympani) + jugularis (motor).',
        'The facial-nerve paradox: the sphincter colli is only a throat sheet here. In mammals it spreads forward to become the muscles of facial expression. Set it up now; it pays off in L5.'
      ]
    }),

    K.plate('brain', 'Brain', {
      tier: 2, min: 2,
      head: { name: 'Axolotl brain', facts: 'Lazcano et al. 2021' },
      panels: [
        SF('1a668bb1f4bf49cc9cf93ae6c13c0e83', '"Brain of Ambystoma mexicanum" · GigaScience · Sketchfab · CC BY', { aspect: 16 / 10 }),
        I('ph_axolotl.jpg', '_Ambystoma mexicanum_')
      ],
      foot: [{ text: 'cerebellum ~0.15 mm³' }, { text: 'myelin: posterior only', at: 1 }, { text: 'genome ~32 Gb', at: 2 }],
      notes: [
        'MRI atlas. Myelin only in medulla, cerebellum, tectum; none in olfactory bulb or telencephalon.',
        'Small brain regions track enormous genomes: axolotl ~32 Gb, ~10× ours. Big genomes make big, slow cells. (Genome figure is an addition: check.)'
      ]
    }),

    /* ------------------------------------------------------------ newts, metamorphosis */
    K.part('p-life', 'Poison, ribs, metamorphosis'),

    K.plate('ttx', 'TTX', {
      min: 1.5,
      head: { name: 'Tetrodotoxin', facts: '_Taricha_ vs. _Thamnophis_' },
      panels: [
        I('ph_Taricha-unken.jpg', '_Taricha_', { label: 'unken reflex' }),
        I('ph_Thamnophis-Taricha.jpg', '_Thamnophis sirtalis_ eating _Taricha_', { at: 1 }),
        I('fig_TTX-matching.jpg', 'Hanifin, Brodie & Brodie 2008', { label: 'toxicity ↔ resistance', at: 2 })
      ],
      notes: [
        'Unken reflex: the newt arches and flashes its orange belly. Warning colouration for TTX in the skin.',
        'TTX arms race: _Taricha_ toxicity and _Thamnophis sirtalis_ resistance match across a geographic mosaic. Poisonous vs. venomous is the exam-worthy distinction.',
        '⚑ Photos and graph from the 2022 slides (web image search). The graph matches Hanifin, Brodie & Brodie 2008 (PLoS Biol.): check before citing.'
      ]
    }),

    K.plate('ribs', '_Pleurodeles_', {
      min: 2, rows: 1,
      head: { name: '_Pleurodeles waltl_', facts: 'Iberian ribbed newt' },
      panels: [
        SF('f64efc8889934a479a1701fa4a8fb2c4', '"Pleurodeles waltl" by 3DVirtualHerp · Sketchfab · CC BY', { aspect: 16 / 10 }),
        I('fig_Pleurodeles-ribs-b.jpg', 'Heiss et al. 2010', { label: 'rib tips through the skin', at: 1 }),
        I('fig_Pleurodeles-ribs-CT.jpg', 'Heiss et al. 2010', { label: 'ribs rotate ~65°', at: 1 })
      ],
      foot: [{ text: 'poisonous → venomous?', at: 2 }],
      notes: [
        '⚠ The ribs are *not broken*. They rotate forward up to ~65° on flexible costovertebral joints and push through weak points in the skin at the poison glands. The skin heals; the defense is repeatable (Heiss et al. 2010, J. Zool. 280:156).',
        'Poison delivered by a wound the animal makes: is that venom? The exam-worthy distinction.',
        'Also _Tylototriton_ and _Echinotriton_.'
      ]
    }),

    K.grid('thyroid', 'Thyroid hormone', {
      min: 2, reveal: 'row',
      head: ['', 'metamorphosis'],
      rows: [['marbled salamander', 'always'], ['tiger salamander', 'conditional'], ['axolotl · mudpuppy', 'obligate paedomorph'], ['regeneration', 'limbs · eyes · spinal cord · heart']],
      notes: [
        'T₄/T₃ is the metamorphic switch. 2022 exam 4: which organ controls amphibian metamorphosis *and* BAT burning in mammals? The thyroid.',
        'The axolotl can still be induced with T₄ (Huxley, c. 1920).',
        'Schoch 2014 cites TH experiments that *add back* ossification centers in newts and frogs: bone loss and metamorphic timing are the same knob.'
      ]
    }),

    K.plate('regen', 'Regeneration', {
      min: 1.5,
      head: { name: 'Regeneration', facts: 'an old trait, kept' },
      panels: [
        I('ph_axolotl-regeneration.jpg', 'axolotl forelimb regrowing', { label: 'limbs · eyes · spinal cord · heart' }),
        I('fig_Micromelerpeton-regeneration.jpg', '_Micromelerpeton_ · Fröbisch, Bickelmann & Witzmann 2014', { label: 'regenerated limb, ~300 Ma', at: 1 })
      ],
      notes: [
        'Regeneration is the retained ancestral condition. Trade-off: flexibility vs. positional stability (extra limbs, digits).',
        'Permian temnospondyl _Micromelerpeton_ shows the same regeneration abnormalities as salamanders: the ability predates crown salamanders.',
        'Frogs lose regeneration after metamorphic climax.',
        '⚑ Photo from the 2022 slides (web image search); source not recorded.'
      ]
    }),

    /* ------------------------------------------------------------ review */
    K.clues('test', 'If I tell you on a test…', {
      min: 4,
      rows: [
        { c: ['no jugal', '2 occipital condyles', 'pedicellate teeth, both jaws', 'tail'], a: 'Caudata' },
        { c: ['forelimbs only', 'horny beak', 'external gills'], a: 'Sirenidae', more: true },
        { c: ['nasolabial grooves', 'no lungs', 'direct development'], a: 'Plethodontidae', more: true },
        { c: ['keratinized skin', 'frontosquamosal arch', 'eft'], a: 'Salamandridae', more: true },
        { c: ['giant', 'skin folds', 'Appalachian or Chinese stream'], a: 'Cryptobranchidae', more: true },
        { c: ['lungless', 'Asian'], a: '_Onychodactylus_' }
      ],
      notes: ['Lungless + Asian = _Onychodactylus_ (Hynobiidae), not a plethodontid.', '2022 exam 4: "Write any two real salamander genera. Spelling counts." _Plethodon, Desmognathus, Ambystoma, Notophthalmus, Necturus, Siren, Cryptobranchus, Amphiuma_.']
    }),

    K.plate('practice', 'Practice tree', {
      min: 1,
      head: { name: 'Build the tree' },
      panels: [],
      foot: ['tree frog', 'midwife toad', '_Ascaphus_', 'hellbender', 'siren', 'mudpuppy', 'red-backed salamander', 'newt', 'caecilian', 'lizard', 'shark'].map((text) => ({ text })),
      notes: ['The final\'s format, level 2.']
    }),

    K.tree('practice-a', 'Practice tree: answer', {
      min: 3, src: PRACTICE,
      steps: [{}, { hi: ['Batrachia'] }, { hi: ['Caudata'] }],
      notes: ['Order inside Salamandroidea is shown but not tested: the mudpuppy sits closer to the red-backed salamander than either does to the newt (Hime et al. 2021).', 'Midwife toad (discoglossid) is closer to tree frogs than _Ascaphus_ is.']
    })
  ];

  window.DECK = { title: 'Caudata', session: 80, minutes: 75, segments };
})();
