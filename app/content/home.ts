import type {L} from '~/lib/locale';

export type TileArtKind
  = | 'loops' | 'ribbon' | 'rings' | 'type' | 'award' | 'book'
    | 'wedding' | 'flyer' | 'icons' | 'journal' | 'thai' | 'japan';

export interface WorkItem {
  id: string;
  title: L<string>;
  meta: [L<string>, string];
  span: number;
  art: TileArtKind;
  slug?: string;
}
export interface WorkSection {id: string; num: string; title: L<string>; count: L<string>; items: WorkItem[]}

export const HERO = {
  now: {de: 'Verfügbar für Projekte', en: 'Available for projects'} as L<string>,
  role: {de: 'Grafik & Motion', en: 'Graphic & Motion'} as L<string>,
  loc: 'Basel, CH',
  titleLines: {
    de: ['Robine', 'macht alles', 'in Bewegung'],
    en: ['Robine', 'makes things', 'move'],
  } as L<string[]>,
  bio: {
    de: 'Ich bin eine Visual Designerin mit Fokus auf <b>Motion Design</b>, <b>Graphik Design</b> und <b>Illustration</b>. Neun Jahre bei S. Karger AG, ein Jahr unterwegs, jeden Tag etwas Neues entdecken.',
    en: 'Visual designer focused on <b>Motion</b>, <b>Editorial</b> and <b>Illustration</b>. Eight years at S. Karger AG, one year on the road, drawing every day.',
  } as L<string>,
  stats: [
    {num: '08+', lbl: {de: 'Jahre Praxis', en: 'Years experience'} as L<string>},
    {num: '120', lbl: {de: 'Projekte', en: 'Projects'} as L<string>},
    {num: '32', lbl: {de: 'Länder', en: 'Countries'} as L<string>},
  ],
  marquee: 'Motion · Editorial · Illustration · Photography · Branding',
};

export const SECTIONS: WorkSection[] = [
  {
    id: 'motion', num: '01', title: {de: 'Motion Design', en: 'Motion Design'}, count: {de: '03 Projekte', en: '03 Works'},
    items: [
      {id: 'karger', title: {de: 'S. Karger AG — Animations Lead', en: 'S. Karger AG — Animation Lead'}, meta: [{de: 'Motion', en: 'Motion'}, '2024–2025'], span: 7, art: 'loops', slug: 'motion/s-karger'},
      {id: 'ofg', title: {de: 'OfG Kurs — Abschlussarbeit', en: 'OfG Course — Final piece'}, meta: [{de: 'Motion', en: 'Motion'}, '2021'], span: 5, art: 'ribbon', slug: 'motion/ofg'},
      {id: 'ben', title: {de: 'Ben Marriott Kurse — Studien', en: 'Ben Marriott Courses — Studies'}, meta: [{de: 'Motion', en: 'Motion'}, '2022'], span: 12, art: 'rings', slug: 'motion/ben'},
    ],
  },
  {
    id: 'graphic', num: '02', title: {de: 'Graphic Design', en: 'Graphic Design'}, count: {de: '05 Projekte', en: '05 Works'},
    items: [
      {id: 'print', title: {de: 'Print Medien', en: 'Print Media'}, meta: [{de: 'Editorial', en: 'Editorial'}, '2018–2024'], span: 6, art: 'type', slug: 'graphic/print-medien'},
      {id: 'via', title: {de: 'VIA Award', en: 'VIA Award'}, meta: [{de: 'Branding', en: 'Branding'}, '2023'], span: 6, art: 'award', slug: 'graphic/via-award'},
      {id: 'lieder', title: {de: 'Liederbuch', en: 'Songbook'}, meta: [{de: 'Buchgestaltung', en: 'Book design'}, '2022'], span: 4, art: 'book', slug: 'graphic/liederbuch'},
      {id: 'hoch', title: {de: 'Hochzeit', en: 'Wedding'}, meta: [{de: 'Editorial', en: 'Editorial'}, '2024'], span: 4, art: 'wedding', slug: 'graphic/hochzeit'},
      {id: 'pilates', title: {de: 'Pilates Flyer', en: 'Pilates Flyer'}, meta: [{de: 'Print', en: 'Print'}, '2024'], span: 4, art: 'flyer', slug: 'graphic/pilates-flyer'},
    ],
  },
  {
    id: 'web', num: '03', title: {de: 'Web Design', en: 'Web Design'}, count: {de: '02 Projekte', en: '02 Works'},
    items: [
      {id: 'portfolio', title: {de: 'Portfolio Website', en: 'Portfolio Website'}, meta: [{de: 'Web', en: 'Web'}, '2026'], span: 7, art: 'type', slug: 'web/portfolio-website'},
      {id: 'sponte', title: {de: 'Sponte App', en: 'Sponte App'}, meta: [{de: 'Mobile', en: 'Mobile'}, '2025'], span: 5, art: 'icons', slug: 'web/sponte-app'},
    ],
  },
  {
    id: 'illu', num: '04', title: {de: 'Illustrationen', en: 'Illustrations'}, count: {de: '02 Projekte', en: '02 Works'},
    items: [
      {id: 'icons', title: {de: 'Icon Design', en: 'Icon Design'}, meta: [{de: 'UI', en: 'UI'}, '2024'], span: 7, art: 'icons', slug: 'illu/icon-design'},
      {id: 'journals', title: {de: 'Journals', en: 'Journals'}, meta: [{de: 'Print', en: 'Print'}, '2023'], span: 5, art: 'journal', slug: 'illu/journals'},
    ],
  },
  {
    id: 'fotos', num: '05', title: {de: 'Fotos', en: 'Photos'}, count: {de: '02 Reisen', en: '02 Trips'},
    items: [
      {id: 'europa', title: {de: 'Europa', en: 'Europe'}, meta: [{de: 'Reise', en: 'Travel'}, '2020–2024'], span: 7, art: 'thai', slug: 'fotos/europa'},
      {id: 'asien', title: {de: 'Asien', en: 'Asia'}, meta: [{de: 'Reise', en: 'Travel'}, '2024'], span: 5, art: 'japan', slug: 'fotos/asien'},
    ],
  },
];

export const ABOUT = {
  title: {de: 'Über mich', en: 'About me'} as L<string>,
  programsLabel: {de: 'Programme', en: 'Software'} as L<string>,
  programs: 'InDesign, Photoshop, Lightroom, Illustrator, Premiere Pro, After Effects, Affinity, Figma, Frontify, Microsoft Office'.split(', '),
  languagesLabel: {de: 'Sprachen', en: 'Languages'} as L<string>,
  languages: {de: ['Deutsch', 'Englisch'], en: ['German', 'English']} as L<string[]>,
  cvLabel: {de: 'Werdegang', en: 'Career'} as L<string>,
  cv: [
    {yr: '2024–2025', ttl: {de: 'Weltreise', en: 'World trip'} as L<string>, bullets: {de: [], en: []} as L<string[]>},
    {
      yr: '2019–2024',
      ttl: {de: 'Visual Design Specialist · S. Karger AG', en: 'Visual Design Specialist · S. Karger AG'} as L<string>,
      bullets: {
        de: ['Umsetzung und Adaption von Layout und Design.', 'Pflege der Branding-Plattform «Frontify».', 'Motion Design und Animations Lead.', 'Produktfotografie und Bildbearbeitung.', 'Erstellen von Illustrationen.'],
        en: ['Implementation and adaptation of layout and design.', 'Curating the «Frontify» branding platform.', 'Motion design and animation lead.', 'Product photography and image editing.', 'Creating illustrations.'],
      } as L<string[]>,
    },
    {
      yr: '2015–2019',
      ttl: {de: 'Lehre zur Polygrafin EFZ · S. Karger AG', en: 'Apprenticeship as Polygrafin EFZ · S. Karger AG'} as L<string>,
      bullets: {
        de: ['Umsetzung und Adaption Layout und Design.', 'Bild- und Repro-Arbeiten.', 'Erstellen von Illustrationen.'],
        en: ['Implementation and adaptation of layout and design.', 'Image and repro work.', 'Creating illustrations.'],
      } as L<string[]>,
    },
  ],
  moreLabel: {de: 'Weitere Erfahrungen', en: 'Further training'} as L<string>,
  more: [
    {yr: '2024', ttl: {de: 'Google UX Design Professional Certificate', en: 'Google UX Design Professional Certificate'} as L<string>},
    {yr: '2022', ttl: {de: 'Ausbildungskurs Berufsbildnerin (Polygraf EFZ)', en: 'Vocational trainer course (Polygraf EFZ)'} as L<string>},
    {yr: '2021', ttl: {de: 'OfG Motion Designerin', en: 'OfG Motion Designer'} as L<string>},
    {yr: '2015', ttl: {de: '3D Animation und Grafik (Grundkurs) mit Cinema4D', en: '3D animation and graphics (intro) with Cinema4D'} as L<string>},
    {yr: '2015', ttl: {de: 'Cambridge Englischtest B1', en: 'Cambridge English test B1'} as L<string>},
  ],
};

export const CONTACT = {
  headline: {de: 'Lass uns etwas in Bewegung bringen.', en: 'Let\'s set something in motion.'} as L<string>,
  cta: {de: 'Schreib mir →', en: 'Write to me →'} as L<string>,
  email: 'hello@robines.space',
};
