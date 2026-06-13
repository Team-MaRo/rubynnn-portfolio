import type {EditorialContent} from '~/components/project/EditorialPhoto';

// Travel-photography page ported from the design bundle's Asien.html.
// The prototype ships as a placeholder layout (SVG stand-in shots + bracketed
// intro copy) carrying its own warm Japanese palette in the inline <style>
// :root — reproduced verbatim below for palette.light, with a matching dark set.
// The nine "Best Shots" become a single editorial series; their on-image labels
// become the frame captions, wired to the uploads/Asien/… paths the prototype
// implies (same relative-path convention as Europa).
export const asien: EditorialContent = {
  themeId: 'asien',
  palette: {
    light: {
      bg: '#efe8dd',
      paper: '#f4ece0',
      fg: '#221c14',
      muted: 'rgba(34,28,20,.55)',
      faint: 'rgba(34,28,20,.35)',
      line: 'rgba(34,28,20,.16)',
      accent: '#b94432',
      'accent-soft': '#e8c7b6',
    },
    dark: {
      bg: '#181208',
      paper: '#221a0f',
      fg: '#efe8dd',
      muted: 'rgba(239,232,221,.55)',
      faint: 'rgba(239,232,221,.35)',
      line: 'rgba(239,232,221,.16)',
      accent: '#e8775f',
      'accent-soft': '#7a3526',
    },
  },
  pageTitle: {de: 'Asien — Reisefotografie · Robine', en: 'Asia — Travel photography · Robine'},
  crumbSection: {de: 'Fotografie', en: 'Photography'},
  crumbTitle: 'Asien 2024',
  heroLines: [
    {text: 'Asien'},
    {text: '— Reise.', accent: true},
  ],
  heroKicker: {de: '日本 · 2024', en: '日本 · 2024'},
  heroLead: {
    de: 'Drei Wochen zwischen Kirschblüte, Neonlicht und stillen Tempelhöfen. Eine fotografische Reise von Tokio bis Kyoto.',
    en: 'Three weeks between cherry blossoms, neon lights and quiet temple courtyards. A photo journey from Tokyo to Kyoto.',
  },
  heroMeta: [
    {label: {de: 'Land', en: 'Country'}, value: 'Asien 🇯🇵'},
    {label: {de: 'Jahr', en: 'Year'}, value: '2024'},
    {label: {de: 'Stationen', en: 'Stops'}, value: 'Tokio, Kyoto, Osaka, Nara'},
    {label: {de: 'Kamera', en: 'Camera'}, value: '35mm Film & Digital'},
  ],
  index: [{n: '01', title: 'Best Shots', anchor: 'best-shots'}],
  forewordLabel: {de: 'Über die Reise', en: 'About the trip'},
  forewordLeads: [
    {
      de: 'Manche Reisen verändern den Blick — Asien hat meinen geschärft.',
      en: 'Some journeys change the way you see — Asia sharpened mine.',
    },
  ],
  forewordBody: {
    de: 'Vom Tempo Tokios zur Stille der Tempel in Kyoto, von den Lichtern Shinjukus zur kulinarischen Welt Osakas: drei Wochen lang habe ich nach Kontrasten gesucht — alter Stein neben Neon, Hektik neben Andacht, das laute Japan und das leise. Diese Auswahl verbindet die Aufnahmen, die diesen Wechsel am ehrlichsten festgehalten haben.',
    en: 'From the pace of Tokyo to the stillness of Kyoto’s temples, from the lights of Shinjuku to the food world of Osaka: for three weeks I went looking for contrasts — old stone beside neon, rush beside reverence, the loud Japan and the quiet one. This selection gathers the frames that held that shift most honestly.',
  },
  series: [
    {
      id: 'best-shots',
      num: {de: 'Serie 01 · Japan', en: 'Series 01 · Japan'},
      title: 'Best Shots',
      sub: {de: 'Tokio · Kyoto · Osaka · Nara', en: 'Tokyo · Kyoto · Osaka · Nara'},
      lede: {
        de: 'Eine Auswahl der schönsten Aufnahmen — von der ersten Kirschblüte am frühen Morgen bis zu den letzten Lichtern in Shinjuku.',
        en: 'A selection of the finest frames — from the first cherry blossom at early morning to the last lights in Shinjuku.',
      },
      meta: [
        {label: {de: 'Jahr', en: 'Year'}, value: '2024'},
        {label: {de: 'Bilder', en: 'Frames'}, value: '09'},
        {label: {de: 'Kamera', en: 'Camera'}, value: '35mm Film & Digital'},
      ],
      figures: [
        {src: 'uploads/Asien/placeholder.svg', r: 'wide', caption: 'Tokio · Shibuya', alt: {de: 'Strassenszene in Shibuya, Tokio', en: 'Street scene in Shibuya, Tokyo'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'tall', caption: 'Kyoto · Tempel', alt: {de: 'Tempel in Kyoto', en: 'Temple in Kyoto'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'land', caption: 'Kirschblüte', alt: {de: 'Kirschblüte am frühen Morgen', en: 'Cherry blossom in the early morning'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'square', caption: 'Nara · Park', alt: {de: 'Park in Nara', en: 'Park in Nara'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'land', caption: 'Osaka · Street', alt: {de: 'Strassenszene in Osaka', en: 'Street scene in Osaka'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'wide', caption: 'Mt. Fuji', alt: {de: 'Berg Fuji', en: 'Mount Fuji'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'tall', caption: 'Neonlicht', alt: {de: 'Neonlichter bei Nacht', en: 'Neon lights at night'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'land', caption: 'Tradition', alt: {de: 'Traditionelle japanische Architektur', en: 'Traditional Japanese architecture'}},
        {src: 'uploads/Asien/placeholder.svg', r: 'cinema', caption: 'Küste', alt: {de: 'Japanische Küste', en: 'Japanese coastline'}},
      ],
    },
  ],
  pulls: [
    {
      afterSeries: 'best-shots',
      quote: {
        de: 'Manche Reisen verändern den Blick — Asien hat meinen geschärft.',
        en: 'Some journeys change the way you see — Asia sharpened mine.',
      },
      cite: '— Reisenotiz, Kyoto · 2024',
    },
  ],
  next: {label: 'Europa', slug: 'fotos/europa'},
};
