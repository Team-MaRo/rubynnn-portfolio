import type {L} from '~/lib/locale';

// Print / editorial showcase for S. Karger AG, ported from the design bundle's
// "Print Medien.html" (hero + brief + two numbered sections, each with a
// FeatureCard + a 4-up Masonry grid of spreads / media-sheet pages).

export interface PrintCard {
  src: string;
  alt: L<string>;
  title: L<string>;
  meta: L<string>;
}

export interface PrintSection {
  id: string;
  num: string;
  title: L<string>;
  ledes: L<string>[];
  feature: {
    src: string;
    alt: L<string>;
    tag: L<string>;
    title: L<string>;
    meta: L<string>;
  };
  cards: PrintCard[];
}

export const printHero = {
  title: {de: 'Print Medien.', en: 'Print Media.'},
  meta: [
    {label: {de: 'Bereich', en: 'Field'}, value: {de: 'Editorial · Print', en: 'Editorial · Print'}},
    {label: {de: 'Jahre', en: 'Years'}, value: {de: '2018 – 2024', en: '2018 – 2024'}},
    {label: {de: 'Kund:in', en: 'Client'}, value: {de: 'S. Karger AG', en: 'S. Karger AG'}},
  ] satisfies {label: L<string>; value: L<string>}[],
};

export const printBrief = {
  label: {de: 'Briefing', en: 'Brief'},
  lede: {
    de: 'Hier präsentiere ich eine Auswahl an Print-Produkten, die allesamt im Eigentum der S. Karger AG stehen.',
    en: 'A selection of print pieces, all owned by S. Karger AG.',
  } as L<string>,
  body: {
    de: 'Die darin geleistete Arbeit konzentriert sich vollständig auf das Format und das Layout.',
    en: 'My contribution focuses entirely on format and layout.',
  } as L<string>,
  note: {
    de: 'Die gewählten Farben und gestalterischen Elemente sind dabei meine persönliche kreative Interpretation des Corporate Designs der Firma und wurden vom Branding freigegeben. Alle Farben und Schmuckelemente sind integraler Bestandteil des Corporate Designs und wurden nicht von mir festgelegt.',
    en: 'The colours and graphic elements are my personal creative interpretation of the company\'s corporate design and were approved by the brand team. All colours and decorative elements are part of the corporate design — they were not defined by me.',
  } as L<string>,
};

export const printSections: PrintSection[] = [
  {
    id: 'katalog',
    num: '01',
    title: {de: 'Journal & Buch Katalog', en: 'Journal & Book Catalogue'},
    ledes: [
      {
        de: 'Der Journal- und Buch-Katalog erschien einmal jährlich zum neuen Publisher-Jahr. Der Katalog umfasst pro Ausgabe rund 160 Seiten mit über 100 verschiedenen Journals und mehreren Buchserien — sowohl in gedruckter Version wie auch online.',
        en: 'The journal and book catalogue was published once a year at the start of each publisher year. Each edition runs to roughly 160 pages and features over 100 journals plus several book series — in print and online.',
      },
      {
        de: 'Das Design stammt von einem externen Freelancer. Meine Aufgabe war es, dieses Design umzusetzen, einzelne Seiten zu ergänzen und die InDesign-Dokumente aufzusetzen und mithilfe von Excel abzufüllen. Diese Arbeit habe ich über mehrere Jahre ganz übernommen oder unseren Lehrlingen helfend zur Seite gestanden.',
        en: 'The design came from an external freelancer. My role was to implement it, add individual pages, set up the InDesign documents, and populate them via Excel. I owned this work for several years — sometimes solo, sometimes supporting our apprentices.',
      },
    ],
    feature: {
      src: 'assets/print/Katalog.jpg',
      alt: {
        de: 'Katalog 2024 — Mockup mit aufgeschlagenem Innenteil und Cover',
        en: 'Catalogue 2024 — mockup with an open inside spread and cover',
      },
      tag: {de: 'Cover', en: 'Cover'},
      title: {de: 'Katalog — Cover & Mockup', en: 'Catalogue — Cover & Mockup'},
      meta: {de: '2024', en: '2024'},
    },
    cards: [
      {
        src: 'assets/print/K_1.jpg',
        alt: {de: 'Katalog Innenseite — Subject Guide', en: 'Catalogue inside page — Subject Guide'},
        title: {de: 'Subject Guide', en: 'Subject Guide'},
        meta: {de: 'S. 7', en: 'p. 7'},
      },
      {
        src: 'assets/print/K_2.jpg',
        alt: {
          de: 'Katalog Innenseite — Sektions-Opener Geriatrics and Gerontology',
          en: 'Catalogue inside page — section opener, Geriatrics and Gerontology',
        },
        title: {de: 'Sektions-Opener', en: 'Section opener'},
        meta: {de: 'S. 55', en: 'p. 55'},
      },
      {
        src: 'assets/print/K_3.jpg',
        alt: {
          de: 'Katalog Innenseite — Journal European Addiction Research',
          en: 'Catalogue inside page — journal European Addiction Research',
        },
        title: {de: 'Journal-Spread', en: 'Journal spread'},
        meta: {de: 'S. 125', en: 'p. 125'},
      },
      {
        src: 'assets/print/K_4.jpg',
        alt: {
          de: 'Katalog Innenseite — Karger\'s eJournal Collections',
          en: 'Catalogue inside page — Karger\'s eJournal Collections',
        },
        title: {de: 'Collections', en: 'Collections'},
        meta: {de: 'S. 149', en: 'p. 149'},
      },
    ],
  },
  {
    id: 'media-sheet',
    num: '02',
    title: {de: 'Media Sheet', en: 'Media Sheet'},
    ledes: [
      {
        de: 'Das Media Sheet wurde erstellt, um Preise und Standorte von Inseraten darzustellen und diese Flächen an Werbeagenturen vermitteln zu können. Die Media Sheets wurden für verschiedene Journals adaptiert.',
        en: 'The media sheet presents ad prices and placements so the inventory can be pitched to ad agencies. Adapted for several different journals.',
      },
    ],
    feature: {
      src: 'assets/print/MediaSheet.jpg',
      alt: {
        de: 'Media Sheet — aufgeschlagenes Mockup mit Cover und Innenseite',
        en: 'Media Sheet — open mockup with cover and inside page',
      },
      tag: {de: 'Cover', en: 'Cover'},
      title: {de: 'Media Sheet — Cover & Mockup', en: 'Media Sheet — Cover & Mockup'},
      meta: {de: 'Liver Cancer', en: 'Liver Cancer'},
    },
    cards: [
      {
        src: 'assets/print/MS_1.jpg',
        alt: {de: 'Media Sheet — Cover Liver Cancer', en: 'Media Sheet — cover, Liver Cancer'},
        title: {de: 'Cover', en: 'Cover'},
        meta: {de: 'S. 1', en: 'p. 1'},
      },
      {
        src: 'assets/print/MS_2.jpg',
        alt: {
          de: 'Media Sheet — Option 1 Sponsored Print Edition',
          en: 'Media Sheet — Option 1, Sponsored Print Edition',
        },
        title: {de: 'Option 1 — Print', en: 'Option 1 — Print'},
        meta: {de: 'S. 2', en: 'p. 2'},
      },
      {
        src: 'assets/print/MS_3.jpg',
        alt: {
          de: 'Media Sheet — Preistabelle und Option 3 Online Banner Ad',
          en: 'Media Sheet — price table and Option 3, online banner ad',
        },
        title: {de: 'Preistabelle & Banner', en: 'Price table & banner'},
        meta: {de: 'S. 3', en: 'p. 3'},
      },
      {
        src: 'assets/print/MS_4.jpg',
        alt: {
          de: 'Media Sheet — Aims and Scope Liver Cancer Rückseite',
          en: 'Media Sheet — Aims and Scope, Liver Cancer, back page',
        },
        title: {de: 'Aims & Scope', en: 'Aims & Scope'},
        meta: {de: 'S. 4', en: 'p. 4'},
      },
    ],
  },
];
