import type {L} from '~/lib/locale';

// Bilingual copy + media for the Hochzeit (wedding) project page, ported from
// the design bundle's Hochzeit.html. Carries its own sage-green palette.

export interface HochzeitCard {
  src: string;
  alt: L<string>;
  title: L<string>;
  meta: L<string>;
}

export const hochzeitPalette = {
  light: {
    bg: '#ede6d4',
    paper: '#f3edde',
    fg: '#232a22',
    muted: 'rgba(35,42,34,.55)',
    faint: 'rgba(35,42,34,.35)',
    line: 'rgba(35,42,34,.16)',
    accent: '#6b8868',
    'accent-soft': '#c8d4be',
  },
  dark: {
    bg: '#1a1f1a',
    paper: '#222922',
    fg: '#ede6d4',
    muted: 'rgba(237,230,212,.55)',
    faint: 'rgba(237,230,212,.35)',
    line: 'rgba(237,230,212,.16)',
    accent: '#a3bf9e',
    'accent-soft': 'oklch(0.42 0.06 140)',
  },
} as const;

export const hochzeit = {
  crumbSection: {de: 'Graphic Design', en: 'Graphic Design'} as L<string>,
  crumbTitle: 'Hochzeit',

  heroTitle: {de: 'Hochzeit', en: 'Wedding'} as L<string>,
  heroSub: 'R & M.',
  heroMeta: [
    {label: {de: 'Bereich', en: 'Field'} as L<string>, value: 'Editorial · Web · Print'},
    {label: {de: 'Jahr', en: 'Year'} as L<string>, value: '2024'},
    {label: {de: 'Datum', en: 'Date'} as L<string>, value: '21·09·2024'},
  ],

  // Briefing / intro
  introLabel: {de: 'Über das Projekt', en: 'About the project'} as L<string>,
  introLede: {
    de: 'Da ich einen Programmierer geheiratet habe, haben wir es uns nicht nehmen lassen, eine eigene Website für den Anlass zu gestalten.',
    en: 'Since I married a developer, we couldn\'t resist building a dedicated website for the occasion.',
  } as L<string>,
  introBody: {
    de: 'Auf der Website konnten die Gäste die wichtigsten Infos sehen sowie ihre Menüwahl angeben. Am Tag selber konnten sie ihre Schnappschüsse von der Feier in eine gemeinsame Fotogalerie hochladen.',
    en: 'On the website, guests could see all the key information and submit their menu choice. On the day itself, they could upload their snapshots of the celebration to a shared photo gallery.',
  } as L<string>,
  introBodyMuted: {
    de: 'Neben der Website gestaltete ich auch Menükarten, Tischaufsteller und die Einladungskarten — alles aus einem stimmigen Designsystem.',
    en: 'Alongside the website I designed the menus, table cards and invitations — all from one cohesive design system.',
  } as L<string>,

  // 01 Figma
  figmaNum: '01',
  figmaTitle: {de: 'Figma Projekt', en: 'Figma project'} as L<string>,
  figmaLede: {
    de: 'Das Designsystem entstand vollständig in Figma — von der Gesamtübersicht aller Screens bis zu den einzelnen Modulen wie Menüwahl und Fotogalerie.',
    en: 'The whole design system lived in Figma — from the overall screen map down to individual modules like menu choice and photo gallery.',
  } as L<string>,
  figmaCards: [
    {
      src: 'assets/hochzeit/figma-overview.png',
      alt: {de: 'Figma Gesamtübersicht aller Screens', en: 'Figma overview of all screens'},
      title: {de: 'Gesamtübersicht', en: 'Overview'},
      meta: {de: 'Figma', en: 'Figma'},
    },
    {
      src: 'assets/hochzeit/figma-menu.png',
      alt: {de: 'Figma Modul — Menüwahl', en: 'Figma module — menu choice'},
      title: {de: 'Modul · Menüwahl', en: 'Module · Menu choice'},
      meta: {de: 'Figma', en: 'Figma'},
    },
    {
      src: 'assets/hochzeit/figma-gallerie.png',
      alt: {de: 'Figma Modul — Fotogalerie mit Upload', en: 'Figma module — photo gallery with upload'},
      title: {de: 'Modul · Fotogalerie', en: 'Module · Photo gallery'},
      meta: {de: 'Figma', en: 'Figma'},
    },
  ] as HochzeitCard[],

  // 02 Website
  webNum: '02',
  webTitle: {de: 'Finale Website', en: 'Final website'} as L<string>,
  webLede: {
    de: 'Die fertige Hochzeitswebsite — gestaltet von mir, programmiert von Manuele. Mobile-first und ohne Schnickschnack.',
    en: 'The finished wedding website — designed by me, built by Manuele. Mobile-first, no frills.',
  } as L<string>,
  webFeature: {
    src: 'assets/hochzeit/laptop-mockup.jpg',
    alt: {de: 'Hochzeitswebsite auf Laptop-Mockup', en: 'Wedding website on a laptop mockup'},
    tag: {de: 'Live', en: 'Live'} as L<string>,
    caption: {de: 'Website · Laptop-Mockup', en: 'Website · Laptop mockup'} as L<string>,
    sub: 'Sept. 2024',
  },
  webScreenshot: {
    src: 'assets/hochzeit/finale-website.jpg',
    alt: {de: 'Finale Website — Full-Page Screenshot', en: 'Final website — full-page screenshot'},
    title: {de: 'Full-Page Screenshot', en: 'Full-page screenshot'} as L<string>,
    meta: 'karger.dev',
  },

  // 03 Print
  printNum: '03',
  printTitle: {de: 'Print', en: 'Print'} as L<string>,
  printLede: {
    de: 'Begleitende Drucksachen zur Hochzeit — vom Save-the-Date über die Tischaufsteller bis hin zur Menükarte. Alles aus einem Designsystem.',
    en: 'Print accompanying the wedding — from the save-the-date through the table cards to the menu. All from one design system.',
  } as L<string>,
  printPieces: [
    {
      num: 'a.',
      heading: {de: 'Tischaufsteller', en: 'Table cards'} as L<string>,
      note: {
        de: 'Fotografische Tischnummern — jedes Tischschild zeigt einen Ort, der für uns als Paar Bedeutung hat.',
        en: 'Photographic table numbers — each card shows a place that means something to us as a couple.',
      } as L<string>,
      card: {
        src: 'assets/hochzeit/tischkarte.jpg',
        alt: {de: 'Tischaufsteller — Italien · Tisch 6', en: 'Table card — Italy · Table 6'},
        title: {de: 'Italien · Tisch 6', en: 'Italy · Table 6'},
        meta: {de: 'A6 · Acryl', en: 'A6 · Acrylic'},
      },
    },
    {
      num: 'b.',
      heading: {de: 'Menükarte', en: 'Menu'} as L<string>,
      note: {
        de: 'Schlichte, handgezeichnete Menükarte mit illustriertem Zweig und kursiver Überschrift — passend zum Setting.',
        en: 'A plain, hand-drawn menu with an illustrated branch and italic heading — fitting the setting.',
      } as L<string>,
      card: {
        src: 'assets/hochzeit/menue.jpg',
        alt: {de: 'Menükarte mit illustriertem Zweig', en: 'Menu with an illustrated branch'},
        title: {de: 'Vorspeise → Dessert', en: 'Starter → Dessert'},
        meta: {de: 'DL · Print', en: 'DL · Print'},
      },
    },
    {
      num: 'c.',
      heading: {de: 'Save the Date', en: 'Save the Date'} as L<string>,
      note: {
        de: 'Eine Polaroid-Karte als Save-the-Date — persönlich, taktil und keepsake-tauglich.',
        en: 'A polaroid card as save-the-date — personal, tactile, and keepsake-worthy.',
      } as L<string>,
      card: {
        src: 'assets/hochzeit/safe-the-date.jpg',
        alt: {de: 'Save the Date Karte — Robine & Manuele', en: 'Save the date card — Robine & Manuele'},
        title: {de: 'Robine & Manuele', en: 'Robine & Manuele'},
        meta: {de: '21·09·2024 · Polaroid', en: '21·09·2024 · Polaroid'},
      },
    },
  ],
};
