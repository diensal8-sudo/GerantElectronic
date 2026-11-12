import { publicAsset } from '../utils/publicAsset.js';

export const INITIAL_PRODUCTS = [
  {
    id: 'drone-1',
    name: 'Drone FPV SkyPhantom 4K Pro',
    category: 'Droni',
    price: 349.99,
    originalPrice: 429.99,
    rating: 4.9,
    reviewsCount: 128,
    stock: 14,
    badge: 'Più Venduto',
    featured: true,
    shortDesc: 'Gimbal a 3 assi, sensore 4K HDR a 60fps, 38 minuti di volo e trasmissione fino a 10 km.',
    description: 'Il Drone SkyPhantom 4K Pro è progettato per creator e appassionati di riprese aeree e volo FPV. Dotato di sensori anti-collisione omnidirezionali, GPS dual-band e funzione Return-to-Home automatica. Include controller ergonomico con supporto smartphone e custodia rigida impermeabile.',
    images: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Risoluzione Video', value: '4K Ultra HD @ 60fps' },
      { label: 'Autonomia di Volo', value: '38 minuti per batteria' },
      { label: 'Raggio di Controllo', value: 'Fino a 10 Km (OcuLink HD)' },
      { label: 'Peso', value: '249g (No patentino obbligatorio)' },
      { label: 'Sensori Ostacoli', value: '360° Omnidirezionali' },
      { label: 'Garanzia', value: '2 Anni Ufficiale Italia' }
    ]
  },
  {
    id: 'ssd-1',
    name: 'SSD NVMe PCIe 4.0 HyperBlade 2TB',
    category: 'Hard Disk & Storage',
    price: 149.50,
    originalPrice: 189.00,
    rating: 4.8,
    reviewsCount: 94,
    stock: 22,
    badge: 'Offerta Lampo',
    featured: true,
    shortDesc: 'Velocità di lettura fino a 7450 MB/s, dissipatore in grafene in alluminio e DRAM cache dedicata.',
    description: 'Velocità pura per PC da gaming, workstation e console PS5. Il controller flash Gen 4 di ultima generazione offre tempi di caricamento istantanei e gestione termica avanzata che impedisce il thermal throttling anche sotto sforzo intenso.',
    images: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Interfaccia', value: 'PCIe Gen 4.0 x4, NVMe 2.0' },
      { label: 'Lettura Sequenziale', value: 'Fino a 7.450 MB/s' },
      { label: 'Scrittura Sequenziale', value: 'Fino a 6.900 MB/s' },
      { label: 'Compatibilità', value: 'PC Desktop, Notebook & PS5' },
      { label: 'Resistenza TBW', value: '1200 TBW' },
      { label: 'Dissipatore', value: 'Incluso in grafene / lega aeronautica' }
    ]
  },
  {
    id: 'powerbank-1',
    name: 'PowerBank TitanVolt 27.000mAh 140W GaN',
    category: 'Power Bank',
    price: 89.90,
    originalPrice: 119.99,
    rating: 4.9,
    reviewsCount: 215,
    stock: 19,
    badge: 'Top Ricarica',
    featured: true,
    shortDesc: 'Uscita PD 3.1 fino a 140W, ricarica MacBook Pro, laptop e smartphone contemporaneamente con display TFT a colori.',
    description: 'La powerbank definitiva per chi viaggia e lavora in mobilità. Con 27.000mAh è la capacità massima consentita a bordo degli aerei (normativa IATA). Il display intelligente a colori mostra tensione, amperaggio, potenza erogata e tempo residuo di ricarica in tempo reale.',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618410320928-25228d811631?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Capacità Reale', value: '27.000 mAh / 99.9 Wh' },
      { label: 'Potenza Massima', value: '140W Power Delivery 3.1' },
      { label: 'Porte', value: '2x USB-C PD, 1x USB-A QC 4.0' },
      { label: 'Display', value: 'TFT HD a colori con telemetria' },
      { label: 'Tempo di ricarica interna', value: 'Solo 50 minuti con caricatore 100W' },
      { label: 'Approvazione Volo', value: 'Ammessa in cabina aerea (TSA / IATA)' }
    ]
  },
  {
    id: 'cuffie-1',
    name: 'Cuffie Wireless PulsePro ANC Hi-Res Audio',
    category: 'Cuffie & Audio',
    price: 179.00,
    originalPrice: 229.00,
    rating: 4.9,
    reviewsCount: 167,
    stock: 8,
    badge: 'Qualità Premium',
    featured: true,
    shortDesc: 'Driver al titanio da 40mm, cancellazione attiva del rumore ibrida (-45dB) e 60 ore di batteria.',
    description: 'Immergiti nella musica senza distrazioni. Le PulsePro combinano cuscinetti memory foam traspiranti in ecopelle con una cancellazione attiva del rumore adattiva che analizza i suoni circostanti 1000 volte al secondo. Supporto codec LDAC, AAC e connettività multi-point.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Cancellazione Rumore', value: 'Ibrida ANC a 4 microfoni (-45dB)' },
      { label: 'Autonomia', value: '60 ore (ANC spento) / 45 ore (ANC attivo)' },
      { label: 'Ricarica Rapida', value: '10 min di carica = 5 ore di riproduzione' },
      { label: 'Codec Supportati', value: 'LDAC, aptX HD, AAC, SBC' },
      { label: 'Connettività', value: 'Bluetooth 5.3 + Jack audio 3.5mm dorato' },
      { label: 'Microfono', value: 'Algoritmo AI per chiamate cristalline' }
    ]
  },
  {
    id: 'drone-2',
    name: 'Mini Drone Voyager GPS 4K Ultralight',
    category: 'Droni',
    price: 199.00,
    originalPrice: 249.00,
    rating: 4.7,
    reviewsCount: 76,
    stock: 11,
    badge: 'Novità',
    featured: false,
    shortDesc: 'Drone tascabile pieghevole con posizionamento ottico e GPS, decollo e atterraggio automatico a un tasto.',
    description: 'Il compagno di viaggio ideale. Pesa meno di 249 grammi e si ripiega nelle dimensioni di uno smartphone. Include funzioni di tracciamento intelligente (Follow Me), volo circolare orbitale e scatto gestuale.',
    images: [
      'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Camera', value: '4K Ultra HD con stabilizzazione elettronica' },
      { label: 'Autonomia', value: '28 minuti (2 batterie incluse)' },
      { label: 'Distanza FPV', value: 'Fino a 3.000 metri' },
      { label: 'Funzioni Intelligenti', value: 'Follow Me, Waypoint, Orbit Mode' }
    ]
  },
  {
    id: 'hdd-rugged',
    name: 'Hard Disk Esterno Rugged Armor 5TB USB-C',
    category: 'Hard Disk & Storage',
    price: 129.90,
    originalPrice: 159.00,
    rating: 4.8,
    reviewsCount: 112,
    stock: 17,
    badge: 'Antiurto',
    featured: false,
    shortDesc: 'Guscio corazzato in silicone antiurto grado militare, certificazione IP54 resistente a polvere e pioggia.',
    description: 'Proteggi i tuoi dati più preziosi in qualsiasi condizione. Progettato per fotografi, videomaker e professionisti sul campo. Resiste a cadute fino a 2 metri e include crittografia hardware AES 256-bit.',
    images: [
      'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Capacità', value: '5 Terabyte' },
      { label: 'Connessione', value: 'USB 3.2 Gen 1 Type-C' },
      { label: 'Grado di Protezione', value: 'IP54 + Certificazione Militare MIL-STD' },
      { label: 'Crittografia', value: 'Hardware AES a 256 bit' }
    ]
  },
  {
    id: 'powerbank-solar',
    name: 'Solar PowerBank Explorer 30.000mAh con Torcia LED',
    category: 'Power Bank',
    price: 49.99,
    originalPrice: 69.90,
    rating: 4.6,
    reviewsCount: 88,
    stock: 25,
    badge: 'Outdoor',
    featured: false,
    shortDesc: 'Pannello solare integrato per emergenza, 4 cavi di ricarica integrati e torcia campeggio ultra potente.',
    description: 'Il compagno di avventure indispensabile per escursioni, campeggio e blackout. Dotato di 4 cavi integrati (Lightning, Type-C, Micro-USB, USB-A) e una torcia a 32 LED con modalità SOS.',
    images: [
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Capacità', value: '30.000 mAh' },
      { label: 'Ricarica Solare', value: 'Pannello monocristallino di emergenza' },
      { label: 'Cavi Integrati', value: 'USB-C, Lightning, Micro-USB, USB' },
      { label: 'Illuminazione', value: 'Torcia camping LED 3W con SOS' }
    ]
  },
  {
    id: 'earbuds-tws',
    name: 'Auricolari TWS AeroPods Gaming 40ms Bassa Latenza',
    category: 'Cuffie & Audio',
    price: 59.90,
    originalPrice: 79.90,
    rating: 4.8,
    reviewsCount: 97,
    stock: 30,
    badge: 'Gaming',
    featured: false,
    shortDesc: 'Modalità gioco ultra-low latency a 40ms, illuminazione RGB Cyberpunk e audio posizionale 3D.',
    description: 'Sincronizzazione audio-video perfetta per gaming mobile e streaming. Design futuristico con custodia ad apertura ad ala di gabbiano e LED RGB dinamici.',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: [
      { label: 'Latenza', value: 'Ultra-bassa 40 millisecondi' },
      { label: 'Autonomia', value: '7 ore auricolari + 28 ore custodia' },
      { label: 'Impermeabilità', value: 'Certificazione IPX5 contro sudore e schizzi' },
      { label: 'Driver', value: '13mm Boro-Neodimio ad alta fedeltà' }
    ]
  },
  {
    id: 'pc-ram-ddr5',
    name: 'Memoria RAM DDR5 per PC',
    category: 'Componenti PC',
    price: 89.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Componente PC',
    featured: false,
    shortDesc: 'Modulo di memoria per aggiornare computer desktop compatibili.',
    description: 'Esempio di scheda prodotto per componenti PC. Prima della vendita, specifica capacità, frequenza, formato, compatibilità, marca e disponibilità effettive.',
    images: ['https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Categoria', value: 'Memoria per computer' },
      { label: 'Compatibilità', value: 'Da verificare con la scheda madre' }
    ]
  },
  {
    id: 'phone-accessories',
    name: 'Accessori e ricambi per smartphone',
    category: 'Telefoni & Accessori',
    price: 19.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Accessori mobile',
    featured: false,
    shortDesc: 'Cavi, adattatori, custodie e ricambi per telefoni.',
    description: 'Esempio di scheda per accessori e componenti per telefoni. Indica marca, modello compatibile, caratteristiche e contenuto della confezione prima della vendita.',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Utilizzo', value: 'Smartphone e dispositivi mobili' },
      { label: 'Compatibilità', value: 'Specificare il modello supportato' }
    ]
  },
  {
    id: 'electronics-starter',
    name: 'Kit base per prototipazione elettronica',
    category: 'Componenti Elettronici',
    price: 34.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Maker',
    featured: false,
    shortDesc: 'Scheda, breadboard, cavi e componenti per iniziare a sperimentare.',
    description: 'Esempio di kit per prototipazione e didattica. Verifica la scheda e il contenuto reale del kit e aggiungi foto, video e specifiche prima di metterlo in vendita.',
    images: ['https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Categoria', value: 'Elettronica e prototipazione' },
      { label: 'Contenuto', value: 'Da specificare in base al kit' }
    ]
  },
  {
    id: 'breadboard-jumper-kit',
    name: 'Breadboard e set di cavi jumper',
    category: 'Componenti Elettronici',
    price: 9.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Prototipazione',
    featured: false,
    shortDesc: 'Piastra millefori senza saldatura e cavi per prototipi elettronici.',
    description: 'Set dimostrativo per assemblare circuiti temporanei e sperimentare con componenti elettronici. Verifica dimensioni, numero di contatti e quantità dei cavi nella confezione reale.',
    images: ['https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Utilizzo', value: 'Prototipazione senza saldatura' },
      { label: 'Contenuto', value: 'Da confermare in base al prodotto' }
    ]
  },
  {
    id: 'electronics-sensor-kit',
    name: 'Set di sensori per progetti elettronici',
    category: 'Componenti Elettronici',
    price: 18.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Sensori',
    featured: false,
    shortDesc: 'Moduli sensore per misurazioni ambientali e sperimentazione.',
    description: 'Esempio di set di sensori per prototipi e progetti didattici. Specifica il modello e la quantità di ogni sensore, i collegamenti e le schede compatibili.',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Categoria', value: 'Moduli e sensori elettronici' },
      { label: 'Compatibilità', value: 'Da verificare per ciascun modulo' }
    ]
  },
  {
    id: 'electronics-component-kit',
    name: 'Kit componenti: LED, resistenze e condensatori',
    category: 'Componenti Elettronici',
    price: 12.50,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Componenti',
    featured: false,
    shortDesc: 'Componenti essenziali per circuiti, riparazioni e prototipi.',
    description: 'Kit dimostrativo di componenti passivi e LED per esercitazioni e circuiti elettronici. Prima della vendita, indica valori, tolleranze e quantità effettivamente incluse.',
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Componenti', value: 'LED e componenti passivi' },
      { label: 'Quantità e valori', value: 'Da specificare in base alla confezione' }
    ]
  },
  {
    id: 'electronics-power-module',
    name: 'Moduli alimentazione e convertitori DC-DC',
    category: 'Componenti Elettronici',
    price: 14.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Alimentazione',
    featured: false,
    shortDesc: 'Moduli per regolare la tensione nei circuiti e nei prototipi.',
    description: 'Esempio di moduli di alimentazione per progetti elettronici. Verifica intervallo di ingresso e uscita, corrente massima e polarità prima di collegare un carico.',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Categoria', value: 'Alimentazione per circuiti' },
      { label: 'Tensione e corrente', value: 'Da verificare sul modulo reale' }
    ]
  },
  {
    id: 'electronics-proto-board',
    name: 'Basetta millefori per circuiti elettronici',
    category: 'Componenti Elettronici',
    price: 4.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Circuiti',
    featured: false,
    shortDesc: 'Basetta forata per saldare e realizzare circuiti permanenti.',
    description: 'Piastra millefori dimostrativa per prototipi saldati e piccole riparazioni. Specifica dimensioni, passo dei fori e materiale della basetta venduta.',
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Utilizzo', value: 'Assemblaggio di circuiti saldati' },
      { label: 'Dimensioni', value: 'Da verificare sul prodotto reale' }
    ]
  },
  {
    id: 'desktop-processor',
    name: 'Processore per computer desktop',
    category: 'Chip & Microcontrollori',
    price: 159.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Chip',
    featured: false,
    shortDesc: 'Processore per PC desktop; verifica socket e compatibilità prima dell’acquisto.',
    description: 'Esempio di scheda per processori e chip. Inserisci marca, modello esatto, socket, numero di core, frequenze e compatibilità con la scheda madre del prodotto reale.',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Categoria', value: 'Processore per computer' },
      { label: 'Compatibilità', value: 'Da verificare in base a socket e scheda madre' }
    ]
  },
  {
    id: 'microcontroller-module',
    name: 'Modulo microcontrollore per prototipi',
    category: 'Chip & Microcontrollori',
    price: 12.90,
    originalPrice: null,
    rating: 0,
    reviewsCount: 0,
    stock: 1,
    badge: 'Maker',
    featured: false,
    shortDesc: 'Modulo elettronico programmabile per prototipazione e progetti embedded.',
    description: 'Esempio di scheda per chip e microcontrollori. Specifica il modello del chip, la memoria, le interfacce disponibili, la tensione di alimentazione e la compatibilità effettiva.',
    images: ['https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'],
    specs: [
      { label: 'Categoria', value: 'Microcontrollore e prototipazione' },
      { label: 'Specifiche', value: 'Da completare con i dati del prodotto reale' }
    ]
  }
];

const EXTRA_PRODUCT_DETAILS = [
  ['ssd-sata-1tb', 'SSD SATA 2,5 pollici 1 TB', 'Hard Disk & Storage', 74.90, 'SSD per aggiornare computer desktop e notebook con interfaccia SATA. Verifica formato e compatibilità.', 'Storage'],
  ['memory-card-128', 'Scheda di memoria microSD 128 GB', 'Hard Disk & Storage', 16.90, 'Scheda di memoria per telefoni, videocamere e dispositivi compatibili. Verifica velocità e standard.', '128 GB'],
  ['usb-drive-256', 'Chiavetta USB 256 GB USB 3.0', 'Hard Disk & Storage', 22.90, 'Memoria portatile per trasferire file tra dispositivi. Capacità e velocità da verificare.', '256 GB • USB'],
  ['nvme-enclosure', 'Box esterno USB-C per SSD NVMe', 'Hard Disk & Storage', 24.90, 'Contenitore esterno per SSD M.2 NVMe; controlla formato e interfaccia supportati.', 'M.2 NVMe'],
  ['motherboard-atx', 'Scheda madre ATX per PC desktop', 'Componenti PC', 129.90, 'Scheda madre per assemblaggio PC. Verifica socket, chipset, RAM e formato prima dell’acquisto.', 'Formato ATX'],
  ['cpu-cooler', 'Dissipatore ad aria per processore', 'Componenti PC', 34.90, 'Dissipatore per CPU con ventola. Verifica compatibilità con socket e spazio nel case.', 'Raffreddamento CPU'],
  ['pc-power-supply', 'Alimentatore PC 650 W 80 Plus', 'Componenti PC', 74.90, 'Alimentatore per computer desktop. Verifica potenza, connettori e certificazione del modello.', '650 W • ATX'],
  ['pc-case', 'Case mid-tower per computer', 'Componenti PC', 64.90, 'Case per assemblaggio PC con pannello laterale. Controlla schede madri supportate e dimensioni.', 'Mid-tower'],
  ['pc-fans', 'Set di 3 ventole PWM per PC', 'Componenti PC', 19.90, 'Ventole per il flusso d’aria del computer. Verifica dimensioni, connettori e velocità.', '3 ventole'],
  ['ram-ddr4', 'Memoria RAM DDR4 per PC desktop', 'Componenti PC', 39.90, 'Modulo RAM per computer compatibili. Verifica capacità, frequenza, formato e scheda madre.', 'DDR4 • DIMM'],
  ['chip-logic', 'Circuito integrato logico per prototipi', 'Chip & Microcontrollori', 3.90, 'Chip logico per circuiti e progetti elettronici. Inserisci sigla, piedinatura e tensione del componente reale.', 'Circuito integrato'],
  ['chip-mosfet', 'Transistor MOSFET per circuiti', 'Chip & Microcontrollori', 2.50, 'Transistor per commutazione e controllo dei circuiti. Specifica codice, polarità e valori massimi.', 'Componente discreto'],
  ['chip-driver', 'Driver per motori DC e stepper', 'Chip & Microcontrollori', 7.90, 'Modulo driver per pilotare motori nei prototipi. Verifica tensione, corrente e compatibilità.', 'Driver motori'],
  ['chip-microcontroller', 'Scheda microcontrollore USB-C', 'Chip & Microcontrollori', 14.90, 'Scheda programmabile per prototipi e applicazioni embedded. Specifica modello e interfacce disponibili.', 'USB-C • GPIO'],
  ['phone-display', 'Display LCD di ricambio per smartphone', 'Telefoni & Accessori', 39.90, 'Ricambio display per smartphone. Seleziona il ricambio solo dopo aver verificato marca e modello esatti.', 'Ricambio display'],
  ['phone-battery', 'Batteria di ricambio per telefono', 'Telefoni & Accessori', 24.90, 'Batteria compatibile con modelli specifici. Specifica il codice ricambio e le avvertenze di installazione.', 'Batteria mobile'],
  ['phone-charging-port', 'Connettore USB-C di ricarica per smartphone', 'Telefoni & Accessori', 9.90, 'Ricambio per porta di ricarica. Compatibilità e tipo di scheda flat variano in base al modello del telefono.', 'USB-C'],
  ['phone-camera', 'Modulo fotocamera per smartphone', 'Telefoni & Accessori', 29.90, 'Modulo fotocamera di ricambio. Verifica codice componente, fotocamera anteriore o posteriore e modello.', 'Ricambio fotocamera'],
  ['phone-flex-cable', 'Cavo flat flex per componenti smartphone', 'Telefoni & Accessori', 8.90, 'Cavo flessibile di collegamento per telefoni. Compatibilità da verificare usando il codice ricambio esatto.', 'Cavo flex'],
  ['phone-speaker', 'Modulo altoparlante per telefono', 'Telefoni & Accessori', 11.90, 'Altoparlante di ricambio per dispositivi mobili. Indica il modello compatibile e il codice ricambio.', 'Modulo audio'],
  ['powerbank-10000', 'Power bank USB-C da 10.000 mAh', 'Power Bank', 24.90, 'Batteria portatile per ricaricare dispositivi compatibili. Controlla capacità e potenza di uscita reali.', '10.000 mAh • USB-C'],
  ['powerbank-slim', 'Power bank compatta con ricarica rapida', 'Power Bank', 34.90, 'Caricatore portatile compatto per telefoni e accessori. Verifica capacità, porte e protocolli supportati.', 'Ricarica portatile'],
  ['drone-propellers', 'Set eliche di ricambio per drone', 'Droni', 12.90, 'Eliche di ricambio per modelli di drone compatibili. Verifica modello, rotazione e dimensioni prima dell’uso.', 'Ricambio drone'],
  ['audio-microphone', 'Microfono lavalier USB-C per smartphone', 'Cuffie & Audio', 18.90, 'Microfono compatto per registrazioni e video con dispositivi compatibili. Verifica connessione e supporto software.', 'USB-C • Audio'],
  ['jumper-wire-set', 'Set di cavi jumper per circuiti elettronici', 'Componenti Elettronici', 5.90, 'Cavi di collegamento per prototipi su breadboard. Specifica quantità, lunghezze e connettori del set.', 'Cavi prototipo'],
  ['resistor-kit', 'Assortimento di resistenze elettroniche', 'Componenti Elettronici', 7.90, 'Set di resistenze per circuiti ed esercitazioni. Elenca i valori ohm e le quantità incluse.', 'Resistenze'],
  ['digital-multimeter', 'Multimetro digitale per misure elettriche', 'Componenti Elettronici', 19.90, 'Strumento per misure elettriche di base. Specifica funzioni, portate e categoria di sicurezza del modello.', 'Strumento di misura'],
  ['soldering-kit', 'Kit saldatore per elettronica con supporto', 'Componenti Elettronici', 24.90, 'Kit per saldature elettroniche e riparazioni. Controlla potenza, regolazione della temperatura e accessori inclusi.', 'Saldatura'],
  ['relay-module', 'Modulo relè per controllo di carichi', 'Componenti Elettronici', 4.90, 'Modulo relè per commutare circuiti di controllo. Verifica tensione bobina e isolamento elettrico.', 'Modulo relè'],
  ['oled-display', 'Display OLED compatto per prototipi', 'Componenti Elettronici', 8.90, 'Display per visualizzare dati nei progetti elettronici. Specifica dimensione, risoluzione e interfaccia.', 'Display OLED'],
  ['ultrasonic-sensor', 'Sensore a ultrasuoni per misurazione distanza', 'Componenti Elettronici', 3.90, 'Sensore per misurazioni di distanza in prototipi e sistemi embedded. Verifica alimentazione e portata.', 'Sensore distanza'],
  ['electronics-led-kit', 'Assortimento LED per circuiti elettronici', 'Componenti Elettronici', 5.50, 'LED di vari colori per circuiti e prototipi. Indica colori, diametri e quantità effettivamente incluse.', 'LED assortiti']
];

const EXTRA_PRODUCT_IMAGES = {
  'ssd-sata-1tb': ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80'],
  'memory-card-128': ['https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80'],
  'usb-drive-256': ['https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=1000&q=80'],
  'nvme-enclosure': ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80'],
  'motherboard-atx': ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'],
  'cpu-cooler': ['https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80'],
  'pc-power-supply': ['https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1000&q=80'],
  'pc-case': ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80'],
  'pc-fans': ['https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80'],
  'ram-ddr4': ['https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&w=1000&q=80'],
  'chip-logic': ['https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1000&q=80'],
  'chip-mosfet': ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80'],
  'chip-driver': ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'],
  'chip-microcontroller': ['https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'],
  'phone-display': ['https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=80'],
  'phone-battery': ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80'],
  'phone-charging-port': ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80'],
  'phone-camera': ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80'],
  'phone-flex-cable': ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'],
  'phone-speaker': ['https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80'],
  'powerbank-10000': ['https://images.unsplash.com/photo-1618410320928-25228d811631?auto=format&fit=crop&w=1000&q=80'],
  'powerbank-slim': ['https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1000&q=80'],
  'drone-propellers': ['https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=1000&q=80'],
  'audio-microphone': ['https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80'],
  'jumper-wire-set': ['https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'],
  'resistor-kit': ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'],
  'digital-multimeter': ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'],
  'soldering-kit': ['https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1000&q=80'],
  'relay-module': ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'],
  'oled-display': ['https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80'],
  'ultrasonic-sensor': ['https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'],
  'electronics-led-kit': ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80']
};

const CATEGORY_DEFAULT_PHOTOS = {
  'Droni': 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
  'Hard Disk & Storage': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
  'Power Bank': 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
  'Cuffie & Audio': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
  'Componenti PC': 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&w=1000&q=80',
  'Chip & Microcontrollori': 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80',
  'Telefoni & Accessori': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
  'Componenti Elettronici': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
};

const EXTRA_PRODUCTS = EXTRA_PRODUCT_DETAILS.map(([id, name, category, price, description, badge]) => ({
  id,
  name,
  category,
  price,
  originalPrice: null,
  stock: 1,
  badge,
  featured: false,
  shortDesc: description,
  description: `Scheda dimostrativa di catalogo. ${description} Aggiorna foto, specifiche, prezzo e disponibilità con i dati del prodotto reale prima di pubblicarlo.`,
  images: EXTRA_PRODUCT_IMAGES[id] || [CATEGORY_DEFAULT_PHOTOS[category] || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'],
  specs: [
    { label: 'Categoria', value: category },
    { label: 'Nota', value: 'Esempio dimostrativo: verificare dati e compatibilità' }
  ]
}));

INITIAL_PRODUCTS.push(...EXTRA_PRODUCTS);

export const CATEGORIES = [
  'Tutti i Prodotti',
  'Droni',
  'Hard Disk & Storage',
  'Componenti PC',
  'Chip & Microcontrollori',
  'Telefoni & Accessori',
  'Power Bank',
  'Cuffie & Audio',
  'Componenti Elettronici'
];
