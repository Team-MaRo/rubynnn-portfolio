import type {L} from '~/lib/locale';

// Bilingual copy for the "Journal Covers" illustration showcase, ported from
// the design bundle's Journals.html. Media lives in app/media/assets/journals/.

export const journalsMeta = {
  pageTitle: {de: 'Journal Covers · Robine', en: 'Journal Covers · Robine'} satisfies L<string>,
  crumbSection: {de: 'Illustrationen', en: 'Illustrations'} satisfies L<string>,
  crumbTitle: 'Journal Covers',
};

export const heroMeta: {label: L<string>; value: string}[] = [
  {label: {de: 'Bereich', en: 'Field'}, value: 'Editorial · Illustration'},
  {label: {de: 'Jahre', en: 'Years'}, value: '2019 – 2024'},
  {label: {de: 'Kund:in', en: 'Client'}, value: 'S. Karger AG'},
];

export const brief = {
  label: {de: 'Briefing', en: 'Brief'} satisfies L<string>,
  lede: {
    de: 'In meiner Position als Angestellte der Firma S. Karger AG habe ich — im Einklang mit dem Corporate Design, der Brandabteilung und den definierten Rahmenbedingungen — verschiedene Illustrationen umgesetzt.',
    en: 'As an in-house designer at S. Karger AG — working within the corporate design, the brand team and the defined guard-rails — I illustrated various journal covers.',
  } satisfies L<string>,
  body: {
    de: 'Alle Farben und Schmuckelemente sind integraler Bestandteil des Corporate Designs und wurden nicht von mir festgelegt.',
    en: 'All colours and decorative elements are an integral part of the corporate design and were not defined by me.',
  } satisfies L<string>,
};

export const redesign = {
  num: '01',
  title: {de: 'Cover-Redesign', en: 'Cover redesign'} satisfies L<string>,
  feature: {
    src: 'assets/journals/cover-mockup.jpg',
    alt: {
      de: 'Pediatric Neurosurgery — Journal-Cover Mockup, gestapelte Hefte',
      en: 'Pediatric Neurosurgery — journal cover mockup, stacked issues',
    } satisfies L<string>,
    title: 'Pediatric Neurosurgery — Mockup',
    issue: 'Vol. 55 · 02 · 2020',
  },
  copy: [
    {
      de: 'Passend zum neuen Branding sollten alle Journalcover nochmals angepasst werden. Dafür wurde mit den Editors-in-Chief zusammengearbeitet, um geeignete Bilder zu finden.',
      en: 'In line with the new branding, every journal cover had to be reworked. We collaborated with the editors-in-chief to find suitable imagery.',
    },
    {
      de: 'Wo es keine passenden Stock-Bilder gab oder nicht auf das alte Cover zurückgegriffen werden konnte, wurden spezifische Illustrationen — wie unten gezeigt — erstellt.',
      en: 'Where no fitting stock imagery existed, or the old cover could not be reused, bespoke illustrations — like those shown below — were created.',
    },
  ] satisfies L<string>[],
};

export interface JournalCard {
  src: string;
  alt: L<string>;
  title: string;
  meta: L<string>;
}

export const covers: JournalCard[] = [
  {
    src: 'assets/journals/neuroendocrinology.jpg',
    alt: {de: 'Neuroendocrinology — Journal-Cover mit Illustration', en: 'Neuroendocrinology — journal cover with illustration'},
    title: 'Neuroendocrinology',
    meta: {de: 'Research', en: 'Research'},
  },
  {
    src: 'assets/journals/pediatric-neurosurgery.jpg',
    alt: {de: 'Pediatric Neurosurgery — Journal-Cover mit Illustration', en: 'Pediatric Neurosurgery — journal cover with illustration'},
    title: 'Pediatric Neurosurgery',
    meta: {de: '55 · 02 · 20', en: '55 · 02 · 20'},
  },
  {
    src: 'assets/journals/gynecologic-obstetric.jpg',
    alt: {de: 'Gynecologic and Obstetric Investigation — Journal-Cover', en: 'Gynecologic and Obstetric Investigation — journal cover'},
    title: 'Gynecologic & Obstetric Investigation',
    meta: {de: '85 · 03 · 20', en: '85 · 03 · 20'},
  },
  {
    src: 'assets/journals/cells-tissues-organs.jpg',
    alt: {de: 'Cells Tissues Organs — Journal-Cover mit Embryo-Illustration', en: 'Cells Tissues Organs — journal cover with embryo illustration'},
    title: 'Cells Tissues Organs',
    meta: {de: 'Research', en: 'Research'},
  },
  {
    src: 'assets/journals/gerontology.jpg',
    alt: {de: 'Gerontology — Journal-Cover mit Figuren-Illustration', en: 'Gerontology — journal cover with figure illustration'},
    title: 'Gerontology',
    meta: {de: 'Research', en: 'Research'},
  },
];

export const editorial = {
  num: '02',
  title: {de: 'Broschüren & Editorial', en: 'Brochures & Editorial'} satisfies L<string>,
  lede: {
    de: 'Vektor-Illustrationen für Patienten-Broschüren, Kongress-Material und interne Publikationen — medizinische Sachverhalte verständlich und ohne Foto-Realismus erklärt.',
    en: 'Vector illustrations for patient brochures, congress material and internal publications — explaining medical topics clearly and without photo-realism.',
  } satisfies L<string>,
};

export const illus: JournalCard[] = [
  {
    src: 'assets/journals/illu-entzuendung.png',
    alt: {de: 'Illustration — Entzündung im Brustgewebe', en: 'Illustration — inflammation in breast tissue'},
    title: 'Entzündung',
    meta: {de: 'Patient Info', en: 'Patient Info'},
  },
  {
    src: 'assets/journals/illu-circle-of-life.png',
    alt: {de: 'Illustration — Circle of Life, Lebensphasen einer Frau', en: 'Illustration — Circle of Life, a woman\'s stages of life'},
    title: 'Circle of Life',
    meta: {de: 'Editorial', en: 'Editorial'},
  },
  {
    src: 'assets/journals/illu-dialyse.png',
    alt: {de: 'Illustration — Patientin während Hämodialyse', en: 'Illustration — patient during haemodialysis'},
    title: 'Hämodialyse',
    meta: {de: 'Patient Info', en: 'Patient Info'},
  },
];
