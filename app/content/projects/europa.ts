import type {EditorialContent} from '~/components/project/EditorialPhoto';

// Travel-photography series, ported verbatim from the design bundle's
// Europa.html (7 series · 38 frames). Europa carries its own warm/blue palette.
export const europa: EditorialContent = {
  themeId: 'europa',
  palette: {
    light: {
      bg: '#efe8dd',
      paper: '#f5efe6',
      fg: '#1f1a14',
      muted: 'rgba(31,26,20,.55)',
      faint: 'rgba(31,26,20,.35)',
      line: 'rgba(31,26,20,.16)',
      accent: '#2c4a6b',
      'accent-soft': '#c8d4dd',
    },
    dark: {
      bg: '#14120f',
      paper: '#1c1a15',
      fg: '#efe8dd',
      muted: 'rgba(239,232,221,.55)',
      faint: 'rgba(239,232,221,.35)',
      line: 'rgba(239,232,221,.16)',
      accent: '#8fb4d6',
      'accent-soft': '#2c4a6b',
    },
  },
  pageTitle: {de: 'Europa — Reisefotografie · Robine', en: 'Europe — Travel photography · Robine'},
  crumbSection: {de: 'Fotografie', en: 'Photography'},
  crumbTitle: 'Europa',
  heroLines: [
    {text: 'Europa'},
    {text: '— in sieben', accent: true},
    {text: 'Kapiteln.', accent: true},
  ],
  heroKicker: {de: 'Sieben Reisen · Eine Landkarte des Lichts', en: 'Seven journeys · A map of light'},
  heroLead: {
    de: 'Vom nassen Stein der Highlands bis zum kalkweissen Süden Apuliens. Keine Länderübersicht — sieben Geschichten, gefunden zwischen Wetter und Licht.',
    en: 'From the wet stone of the Highlands to the chalk-white south of Puglia. Not a country index — seven stories, found between weather and light.',
  },
  heroMeta: [
    {label: {de: 'Region', en: 'Region'}, value: 'Europa'},
    {label: {de: 'Serien', en: 'Series'}, value: '07'},
    {label: {de: 'Bilder', en: 'Frames'}, value: '38'},
    {label: {de: 'Jahre', en: 'Years'}, value: '2020 — 2024'},
  ],
  index: [
    {n: '01', title: 'Highland Weather', anchor: 'highland'},
    {n: '02', title: 'Wild Edges', anchor: 'wild-edges'},
    {n: '03', title: 'Salz & Stein', anchor: 'salz-stein'},
    {n: '04', title: 'Acqua Alta', anchor: 'acqua-alta'},
    {n: '05', title: 'Über den Wolken', anchor: 'ueber-wolken'},
    {n: '06', title: 'Engadiner Jahreszeiten', anchor: 'engadin'},
    {n: '07', title: 'Normannische Gezeiten', anchor: 'normandie'},
  ],
  forewordLabel: {de: 'Vorwort', en: 'Foreword'},
  forewordLeads: [
    {
      de: 'Europa ist kein Ort. Es ist ein Wetter, das sich in der Luft umstellt, sobald man eine Landesgrenze überquert.',
      en: 'Europe isn\'t a place. It\'s a weather that re-arranges itself the moment you cross a border.',
    },
  ],
  forewordBody: {
    de: 'Diese sieben Serien sind keine Reiseberichte, sondern Stimmungsbilder — sortiert nach dem Licht, das ich gefunden habe, nicht nach dem Pass im Rucksack. Ein nasser Tag im Hochland, ein heisser Mittag in Apulien, ein Sonnenaufgang über den Wolken auf Gran Canaria. Jede Serie folgt einem Tag oder einer Woche von Morgen bis Abend.',
    en: 'These seven series aren\'t travel reports but mood pieces — sorted by the light I found, not by the passport in the bag. A wet day in the Highlands, a hot noon in Puglia, a sunrise above the clouds on Gran Canaria. Each series follows a day or a week from morning to evening.',
  },
  series: [
    {
      id: 'highland',
      num: {de: 'Serie 01 · Schottland', en: 'Series 01 · Scotland'},
      title: 'Highland Weather',
      sub: {de: 'Fünf Tage im Westen Schottlands', en: 'Five days in the Scottish west'},
      lede: {
        de: 'Vier Wetter pro Stunde. Dampf aus einem Zug, Wolken, die einen Berg verschlucken, eine Burg im grauen Mittag, ein Lichtfleck auf grünem Hang.',
        en: 'Four weathers an hour. Steam from a train, clouds swallowing a peak, a castle in grey noon, a patch of light on a green slope.',
      },
      meta: [
        {label: {de: 'Jahr', en: 'Year'}, value: '2023'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '05'},
        {label: {de: 'Kamera', en: 'Camera'}, value: 'A7 III'},
      ],
      figures: [
        {src: 'uploads/Europa/Schottland/_DSC5435.jpg', r: 'cinema', caption: 'Glenfinnan · 08:14', alt: {de: 'Glenfinnan Viaduct mit Dampfzug im Regen', en: 'Glenfinnan Viaduct with steam train in the rain'}},
        {src: 'uploads/Europa/Schottland/_DSC5498.jpg', r: 'land', caption: 'Glencoe · Mittag', alt: {de: 'Buachaille Etive Mòr in Wolken', en: 'Buachaille Etive Mòr in clouds'}},
        {src: 'uploads/Europa/Schottland/_DSC5595.jpg', r: 'land', caption: 'Isle of Skye', alt: {de: 'Berg auf Skye mit Sturmwolke', en: 'Mountain on Skye with storm cloud'}},
        {src: 'uploads/Europa/Schottland/_DSC5614.jpg', r: 'land', caption: 'Tarbat Ness · 17:42', alt: {de: 'Tarbat Ness Lighthouse', en: 'Tarbat Ness lighthouse'}},
        {src: 'uploads/Europa/Schottland/_DSC5538.jpg', r: 'land', caption: 'Eilean Donan', alt: {de: 'Eilean Donan Castle', en: 'Eilean Donan castle'}},
      ],
    },
    {
      id: 'wild-edges',
      num: {de: 'Serie 02 · Irland', en: 'Series 02 · Ireland'},
      title: 'Wild Edges',
      sub: {de: 'An den Klippen der Atlantikküste', en: 'On the cliffs of the Atlantic coast'},
      lede: {
        de: 'Wo das Land aufhört. Drei Annäherungen an die Cliffs of Moher, dann zwei Atemzüge tiefer ins Landesinnere — Connemara, sehr ruhig.',
        en: 'Where the land ends. Three approaches to the Cliffs of Moher, then two breaths inland — Connemara, very quiet.',
      },
      meta: [
        {label: {de: 'Jahr', en: 'Year'}, value: '2022'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '05'},
        {label: {de: 'Region', en: 'Region'}, value: 'Clare & Connemara'},
      ],
      figures: [
        {src: 'uploads/Europa/Irland/_DSC5718.jpg', r: 'port', caption: 'Cliffs of Moher · I', alt: {de: 'Cliffs of Moher, Weitwinkel', en: 'Cliffs of Moher, wide angle'}},
        {src: 'uploads/Europa/Irland/_DSC5722.jpg', r: 'tall', caption: 'Cliffs of Moher · II', alt: {de: 'Cliffs of Moher Nahaufnahme', en: 'Cliffs of Moher close-up'}},
        {src: 'uploads/Europa/Irland/_DSC5727.jpg', r: 'port', caption: 'Cliffs of Moher · III', alt: {de: 'Welle bricht an Klippe', en: 'Wave breaking on a cliff'}},
        {src: 'uploads/Europa/Irland/_DSC5757.jpg', r: 'tall', caption: 'Connemara · Stille', alt: {de: 'See vor Berg in Connemara', en: 'Lake before a mountain in Connemara'}},
        {src: 'uploads/Europa/Irland/_DSC5746.jpg', r: 'cinema', caption: 'Derryclare Lough', alt: {de: 'See mit Kiefern Insel', en: 'Lake with a pine island'}},
      ],
    },
    {
      id: 'salz-stein',
      num: {de: 'Serie 03 · Apulien', en: 'Series 03 · Puglia'},
      title: 'Salz & Stein',
      sub: {de: 'Eine langsame Reise durch den italienischen Süden', en: 'A slow drift through the Italian south'},
      lede: {
        de: 'Gallipoli, Alberobello, Lecce. Kalkstein, Schatten, ein Strohhut am Faden, eine Eidechse im Holz. Mittag ist Stille.',
        en: 'Gallipoli, Alberobello, Lecce. Limestone, shadow, a straw hat on a string, a lizard in the wood. Noon is silence.',
      },
      meta: [
        {label: {de: 'Jahr', en: 'Year'}, value: '2024'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '06'},
        {label: {de: 'Stationen', en: 'Stops'}, value: 'Puglia'},
      ],
      figures: [
        {src: 'uploads/Europa/Gallipoli/DSC00092.jpg', r: 'port', caption: 'Gallipoli · 16:30', alt: {de: 'Küste von Gallipoli', en: 'Coast of Gallipoli'}},
        {src: 'uploads/Europa/Gallipoli/DSC00100.jpg', r: 'port', caption: 'Alberobello · Gasse', alt: {de: 'Strohhüte über einer Gasse in Alberobello', en: 'Straw hats over an alley in Alberobello'}},
        {src: 'uploads/Europa/Gallipoli/DSC00117.jpg', r: 'port', caption: 'Trulli · Dächer', alt: {de: 'Trulli Dächer', en: 'Trulli rooftops'}},
        {src: 'uploads/Europa/Gallipoli/DSC00163-Edit.jpg', r: 'land', caption: 'Lecce · 07:55', alt: {de: 'Leerer Platz in Lecce am Morgen', en: 'Empty square in Lecce in the morning'}},
        {src: 'uploads/Europa/Gallipoli/DSC00142.jpg', r: 'tall', caption: 'Lecce · Nachmittag', alt: {de: 'Belebte Gasse in Lecce', en: 'Busy alley in Lecce'}},
        {src: 'uploads/Europa/Gallipoli/DSC00056.jpg', r: 'cinema', caption: 'Begegnung · Holz', alt: {de: 'Eidechse zwischen Holzbohlen', en: 'Lizard between wooden planks'}},
      ],
    },
    {
      id: 'acqua-alta',
      num: {de: 'Serie 04 · Venedig', en: 'Series 04 · Venice'},
      title: 'Acqua Alta',
      sub: {de: 'Vier Stunden Wasser in Venedig', en: 'Four hours of water in Venice'},
      lede: {
        de: 'Vom Strand des Lido durch den Canal Grande in einen Seitenkanal, wo die Stadt einen letzten Atemzug holt.',
        en: 'From the Lido shore through the Grand Canal into a side rio, where the city draws a last breath.',
      },
      meta: [
        {label: {de: 'Jahr', en: 'Year'}, value: '2023'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '04'},
        {label: {de: 'Stunden', en: 'Hours'}, value: '04:30 — 08:30'},
      ],
      figures: [
        {src: 'uploads/Europa/Venedig/DSC00320.jpg', r: 'cinema', caption: 'Lido · 04:42', alt: {de: 'Strand des Lido bei Dämmerung', en: 'Lido beach at dawn'}},
        {src: 'uploads/Europa/Venedig/_DSC0157.jpg', r: 'port', caption: 'Canal Grande · 06:18', alt: {de: 'Canal Grande mit Boot am frühen Morgen', en: 'Grand Canal with a boat in the early morning'}},
        {src: 'uploads/Europa/Venedig/_DSC0111.jpg', r: 'port', caption: 'Rialto · 07:32', alt: {de: 'Canal Grande mit Gondeln', en: 'Grand Canal with gondolas'}},
        {src: 'uploads/Europa/Venedig/_DSC0169.jpg', r: 'port', caption: 'Rio · 08:11', alt: {de: 'Seitenkanal mit gespiegelter Brücke', en: 'Side canal with a mirrored bridge'}},
      ],
    },
    {
      id: 'ueber-wolken',
      num: {de: 'Serie 05 · Gran Canaria', en: 'Series 05 · Gran Canaria'},
      title: 'Über den Wolken',
      sub: {de: 'Vulkanische Stunden auf den Kanaren', en: 'Volcanic hours on the Canary Islands'},
      lede: {
        de: 'Die Insel wechselt die Höhe schneller als das Auge. Dünen am Meer, Schluchten im Süden, ein Wolkenmeer auf dem Pico de las Nieves zur blauen Stunde.',
        en: 'The island changes altitude faster than the eye. Dunes at sea, canyons in the south, a sea of clouds at Pico de las Nieves at blue hour.',
      },
      meta: [
        {label: {de: 'Jahr', en: 'Year'}, value: '2024'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '07'},
        {label: {de: 'Höhe', en: 'Altitude'}, value: '0 — 1 950 m'},
      ],
      figures: [
        {src: 'uploads/Europa/Grancanaria/_DSC3847.jpg', r: 'cinema', caption: 'Maspalomas · 0 m', alt: {de: 'Dünen von Maspalomas vor dem Atlantik', en: 'Dunes of Maspalomas before the Atlantic'}},
        {src: 'uploads/Europa/Grancanaria/_DSC4316.jpg', r: 'land', caption: 'Barranco · Mittag', alt: {de: 'Bergtal im Süden', en: 'Mountain valley in the south'}},
        {src: 'uploads/Europa/Grancanaria/_DSC4229.jpg', r: 'tall', caption: 'Schlucht · Süden', alt: {de: 'Schlucht mit Vegetation', en: 'Canyon with vegetation'}},
        {src: 'uploads/Europa/Grancanaria/_DSC4272.jpg', r: 'tall', caption: 'Westküste', alt: {de: 'Klippen über dem Atlantik', en: 'Cliffs above the Atlantic'}},
        {src: 'uploads/Europa/Grancanaria/_DSC4168.jpg', r: 'land', caption: 'Pico · Aufstieg', alt: {de: 'Felsen im Wolkenmeer', en: 'Rocks in a sea of clouds'}},
        {src: 'uploads/Europa/Grancanaria/_DSC4192.jpg', r: 'land', caption: 'Pico · 19:08', alt: {de: 'Sonnenuntergang über Wolkenmeer mit Teide', en: 'Sunset over a sea of clouds with the Teide'}},
        {src: 'uploads/Europa/Grancanaria/_DSC4203.jpg', r: 'land', caption: 'Pico · 19:24', alt: {de: 'Teide Silhouette im Sonnenuntergang', en: 'Teide silhouette at sunset'}},
      ],
    },
    {
      id: 'engadin',
      num: {de: 'Serie 06 · Engadin', en: 'Series 06 · Engadin'},
      title: 'Engadiner Jahreszeiten',
      sub: {de: 'Silvaplana & Morteratsch — Herbst trifft Winter', en: 'Silvaplana & Morteratsch — autumn meeting winter'},
      lede: {
        de: 'Sechs Bilder aus mehreren Jahren am gleichen Ort. Goldene Lärchen, ein einzelnes Segel, der erste Schnee auf rotem Wald.',
        en: 'Six frames across several years in the same place. Golden larches, a single sail, first snow on red forest.',
      },
      meta: [
        {label: {de: 'Jahre', en: 'Years'}, value: 'seit 2020'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '06'},
        {label: {de: 'Höhe', en: 'Altitude'}, value: '1 800 m'},
      ],
      figures: [
        {src: 'uploads/Europa/Silvaplana/IMG_3711.jpg', r: 'land', caption: 'Morteratsch · Oktober', alt: {de: 'Wanderweg mit Lärchen vor Bernina', en: 'Hiking path with larches before the Bernina'}},
        {src: 'uploads/Europa/Silvaplana/IMG_3744.jpg', r: 'land', caption: 'Bernina · Mittag', alt: {de: 'Tal mit Gletscher zwischen Lärchen', en: 'Valley with glacier between larches'}},
        {src: 'uploads/Europa/Silvaplana/IMG_3759.jpg', r: 'cinema', caption: 'Silvaplanersee · Wind', alt: {de: 'See mit einzelnem Segel und Wald', en: 'Lake with a single sail and forest'}},
        {src: 'uploads/Europa/Silvaplana/IMG_3833.jpg', r: 'land', caption: 'Erster Schnee', alt: {de: 'Wald mit erstem Schnee', en: 'Forest with first snow'}},
        {src: 'uploads/Europa/Silvaplana/IMG_3861.jpg', r: 'land', caption: 'Sils · Übergang', alt: {de: 'Silsersee mit Schnee', en: 'Lake Sils with snow'}},
        {src: 'uploads/Europa/Silvaplana/IMG_3773.jpg', r: 'cinema', caption: 'St. Moritz · Morgen nach dem Schnee', alt: {de: 'Verschneiter See mit Bergen', en: 'Snow-covered lake with mountains'}},
      ],
    },
    {
      id: 'normandie',
      num: {de: 'Serie 07 · Normandie', en: 'Series 07 · Normandy'},
      title: 'Normannische Gezeiten',
      sub: {de: 'Mont Saint-Michel & der Kanal', en: 'Mont Saint-Michel & the Channel'},
      lede: {
        de: 'Eine Brücke, ein Hafen, ein Berg im Meer. Vier Bilder, eine kurze Reise an die Küste — die letzte Stunde Tag und die erste Stunde Nacht.',
        en: 'A bridge, a harbour, a mountain in the sea. Four frames, a short trip to the coast — the last hour of day and the first hour of night.',
      },
      meta: [
        {label: {de: 'Jahr', en: 'Year'}, value: '2022'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '04'},
        {label: {de: 'Route', en: 'Route'}, value: 'Pont de Normandie → Mont Saint-Michel'},
      ],
      figures: [
        {src: 'uploads/Europa/Frankreich/IMG_6463.jpg', r: 'tall', caption: 'Pont de Normandie', alt: {de: 'Seile der Pont de Normandie unter grauem Himmel', en: 'Cables of the Pont de Normandie under a grey sky'}},
        {src: 'uploads/Europa/Frankreich/IMG_6484.jpg', r: 'land', caption: 'Honfleur · Hafen', alt: {de: 'Hafen von Honfleur', en: 'Harbour of Honfleur'}},
        {src: 'uploads/Europa/Frankreich/IMG_6968.jpg', r: 'cinema', caption: 'Mont Saint-Michel · 21:48', alt: {de: 'Mont Saint-Michel zur blauen Stunde', en: 'Mont Saint-Michel at blue hour'}},
        {src: 'uploads/Europa/Frankreich/IMG_6981.jpg', r: 'wide', caption: 'Mont Saint-Michel · 22:14', alt: {de: 'Mont Saint-Michel am Steg, kurz nach Sonnenuntergang', en: 'Mont Saint-Michel from the causeway, just after sunset'}},
      ],
    },
  ],
  pulls: [
    {
      afterSeries: 'wild-edges',
      quote: {de: 'Der Norden lehrt einen, das Wetter zu lesen, bevor man die Kamera hebt.', en: 'The North teaches you to read the weather before you raise the camera.'},
      cite: '— Notiz, Skye · 2023',
    },
    {
      afterSeries: 'acqua-alta',
      quote: {de: 'Manche Orte muss man früh sehen, bevor sie sich selbst gehören.', en: 'Some places you have to see early, before they belong to themselves again.'},
      cite: '— Notiz, Venedig · 2023',
    },
  ],
  next: {label: 'Asien', slug: 'fotos/asien'},
};
