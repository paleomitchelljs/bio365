/* The BIO 365 course tree, copied verbatim from paleomitchelljs/phylo docs/js/course.js
 * (TREE_SRC), which transcribes refs/2026f_365_phylogeny.tex. Re-copy with
 * tools/sync_course_tree.py when the course tree changes; do not edit by hand.
 * Format: two spaces per level; "Name | subtitle | alias, alias"; "." unnamed;
 * "~" prefix = polytomy left open; "†" suffix = extinct; "- a, b" = example organisms. */
window.COURSE_TREE = `
Chordata
  Cephalochordata | amphioxus
  .
    Urochordata | tunicates | Tunicata
    Vertebrata
      Cyclostomata | hagfish & lampreys
        Myxini | hagfish
        Petromyzontida | lampreys
          - sea lamprey, brook lamprey
      .
        galeaspids †
        Gnathostomata | jawed vertebrates
          antiarchs †
          .
            ptyctodontids †
            .
              arthrodires †
              .
                Chondrichthyes | cartilaginous fish
                  Holocephali | chimaeras
                    - ratfish, elephant shark
                  Elasmobranchii
                    Selachii | sharks
                      Squalomorphi | dogfish sharks
                        - spiny dogfish, cookie cutter shark, frilled shark, angel shark, saw shark
                      Galeomorphi | most sharks
                        - horn shark, whale shark, wobbegong, great white shark, basking shark, goblin shark, tiger shark, hammerhead
                    Batoidea | rays
                      - skate, torpedo, sawfish, guitarfish, stingray, manta
                Osteichthyes | bony fish
                  Actinopterygii | ray-finned fish
                    Polypteriformes | bichirs
                      - bichir, reedfish
                    ~.
                      Chondrostei | sturgeons & paddlefish
                        - sturgeon, paddlefish
                      gars | Lepisosteidae
                        - longnose gar, alligator gar
                      bowfin | Amia
                      Teleostei
                        Osteoglossomorpha | bony-tongues
                          - arawana, arapaima, African knifefish, mormyrid
                        .
                          Elopomorpha | eels & tarpon
                            - tarpon, moray, American eel, gulper eel
                          .
                            .
                              Clupeomorpha | herrings
                                - herring, shad
                              Ostariophysi | catfish, minnows
                                - catfish, minnow, zebrafish, tetra, piranha, cavefish, American knifefish, electric eel
                            .
                              Lepidogalaxias | salamanderfish
                              .
                                Protacanthopterygii | salmon, pike
                                  - salmon, trout, pike, smelt
                                Acanthomorpha | spiny-rayed fish
                                  - yellow perch, walleye, largemouth bass, sunfish, seahorse, opah, cichlid, flounder, tuna, flying fish, swamp eel, anglerfish, wrasse, pufferfish
                  Sarcopterygii | lobe-finned fish
                    Actinistia | coelacanths
                    .
                      Dipnoi | lungfish
                        - Australian lungfish, African lungfish, South American lungfish
                      .
                        Eusthenopteron †
                        .
                          Tiktaalik †
                          ~.
                            Acanthostega †
                            Ichthyostega †
                            .
                              Whatcheeria †
                              Tetrapoda
                                Lissamphibia | amphibians
                                  Gymnophiona | caecilians | Apoda
                                    Rhinatrematidae | tailed caecilians
                                    .
                                      Ichthyophiidae | Asian caecilians
                                      Teresomata
                                        Scolecomorphidae | buried-eye caecilians
                                        Caeciliidae | common caecilians
                                  Batrachia
                                    Caudata | salamanders | Urodela
                                      Cryptobranchoidea
                                        Cryptobranchidae | giant salamanders
                                          - hellbender, Chinese giant salamander
                                        Hynobiidae | Asian salamanders
                                      .
                                        Sirenidae | sirens
                                        Salamandroidea | most salamanders
                                          - mudpuppy, olm, axolotl, tiger salamander, amphiuma, red-backed salamander, eastern newt
                                    Anura | frogs | Salientia
                                      Ascaphus | tailed frog
                                      .
                                        Leiopelma | New Zealand frogs
                                        .
                                          discoglossids | fire-bellied & midwife toads | Discoglossanura, Alytidae, Bombinatoridae
                                            - fire-bellied toad, midwife toad
                                          .
                                            .
                                              Pipidae | Xenopus, Pipa
                                                - African clawed frog, Surinam toad
                                              Rhinophrynidae | burrowing toad | Rhinophrynus
                                            .
                                              Pelobatoidea | spadefoots
                                              Neobatrachia | most frogs
                                                - bullfrog, leopard frog, wood frog, American toad, gray tree frog, spring peeper, poison dart frog, horned frog, glass frog, flying frog
                                Amniota
                                  Synapsida
                                    pelycosaurs † | Dimetrodon
                                    Therapsida
                                      dicynodonts † | Lystrosaurus
                                      Cynodontia
                                        non-mammal cynodonts †
                                        Mammalia | mammals
                                          Monotremata | monotremes
                                            - platypus, echidna
                                          Theria
                                            Metatheria | marsupials | Marsupialia
                                              - opossum, kangaroo, koala, wombat, Tasmanian devil
                                            Eutheria | placentals | Placentalia
                                              . | | Atlantogenata
                                                Xenarthra | armadillos, sloths
                                                  - armadillo, sloth, anteater
                                                Afrotheria | elephants, aardvark
                                                  - elephant, manatee, hyrax, aardvark, golden mole
                                              Boreoeutheria
                                                Laurasiatheria
                                                  Eulipotyphla | shrews, moles
                                                    - shrew, mole, hedgehog
                                                  .
                                                    Chiroptera | bats
                                                      - fruit bat, vampire bat
                                                    .
                                                      Cetartiodactyla | even-toed & whales | Artiodactyla
                                                        camel
                                                        .
                                                          ruminants | Ruminantia
                                                            - cow, deer
                                                          . | | Whippomorpha
                                                            hippo
                                                            whale
                                                      .
                                                        Perissodactyla | odd-toed
                                                          - horse, rhino, tapir
                                                        . | | Ferae
                                                          Pholidota | pangolins
                                                          Carnivora | carnivorans
                                                            - dog, cat, bear, seal
                                                Euarchontoglires
                                                  Archonta | primates, tree shrews | Euarchonta
                                                    - human, monkey, tree shrew, colugo
                                                  Glires | rodents, rabbits
                                                    - mouse, squirrel, beaver, rabbit, pika
                                  Diapsida | reptiles | Sauria
                                    Lepidosauria
                                      Sphenodon | tuatara
                                      Squamata | lizards & snakes
                                        Dibamidae | blind lizards
                                        .
                                          Gekkota | geckos
                                            - leopard gecko, tokay gecko
                                          .
                                            Scincoidea | skinks
                                              - five-lined skink, blue-tongued skink
                                            .
                                              Lacertoidea | tegus, amphisbaenians
                                                - tegu, amphisbaenian, wall lizard
                                              Toxicofera
                                                Iguania | iguanas, chameleons
                                                  - green iguana, chameleon, anole, bearded dragon
                                                .
                                                  Anguimorpha | monitors
                                                    - Komodo dragon, Gila monster, glass lizard
                                                  Serpentes | snakes
                                                    Scolecophidia | blind snakes
                                                    .
                                                      boas & pythons | Booidea
                                                        - boa, python
                                                      .
                                                        Viperidae | vipers
                                                          - rattlesnake, copperhead
                                                        .
                                                          Elapidae | cobras
                                                            - cobra, coral snake
                                                          Colubridae | racers
                                                            - racer, garter snake, kingsnake
                                    . | | Archelosauria
                                      Testudines | turtles
                                        Pleurodira | side-necked turtles
                                          - matamata
                                        Cryptodira
                                          Trionychidae | soft-shells
                                          .
                                            Testudinoidea | tortoises, pond turtles
                                              - box turtle, painted turtle, desert tortoise
                                            feisty water turtles | snapping, musk, sea | Americhelydia
                                              - snapping turtle, musk turtle, sea turtle
                                      .
                                        phytosaurs †
                                        Archosauria
                                          ~Crurotarsi | crocodile line | Pseudosuchia
                                            aetosaurs †
                                            rauisuchians †
                                            Crocodylomorpha
                                              sphenosuchians †
                                              Crocodylia | crocodylians
                                                - alligator, caiman, crocodile, gharial
                                          Ornithodira | bird line | Avemetatarsalia
                                            pterosaurs †
                                            Dinosauria | dinosaurs
                                              Ornithischia † | bird-hipped
                                                - Triceratops, Stegosaurus, hadrosaur, ankylosaur
                                              Saurischia
                                                Sauropodomorpha † | long-necked giants
                                                  - Brachiosaurus, Diplodocus
                                                Theropoda
                                                  non-bird theropods † | T. rex, Velociraptor
                                                  Aves | birds
                                                    Palaeognathae | ratites, tinamous
                                                      - ostrich, emu, kiwi, tinamou
                                                    Neognathae
                                                      Galloanserae
                                                        Galliformes | landfowl
                                                          - chicken, peacock, turkey
                                                        Anseriformes | waterfowl
                                                          - duck, goose
                                                      ~Neoaves
                                                        loon
                                                        pelican
                                                        kingfishers
                                                          - kookaburra, belted kingfisher
                                                        .
                                                          parrot
                                                          Passeriformes | perching birds
                                                            - crow, tyrant flycatcher, robin
`;
