import type {L} from '~/lib/locale';

// Bilingual copy + media for the Liederbuch (songbook) book-design page,
// ported from design-ref/robines-portfolio/project/Liederbuch.html.
// The source is mostly German; English is natural translation.

export interface Page {
  src: string;
  title: L<string>;
  no: string;
  alt: L<string>;
}

export interface Motif {
  src: string;
  title: L<string>;
  tag: L<string>;
  alt: L<string>;
}

export const heroMeta: {label: L<string>; value: string}[] = [
  {label: {de: 'Bereich', en: 'Field'}, value: 'Buchgestaltung · Illustration'},
  {label: {de: 'Jahr', en: 'Year'}, value: '2022'},
  {label: {de: 'Kontext', en: 'Context'}, value: 'Interner Privatauftrag · Lehre'},
];

export const specs: {label: L<string>; value: L<string>}[] = [
  {label: {de: 'Format', en: 'Format'}, value: {de: 'A5 hoch', en: 'A5 portrait'}},
  {label: {de: 'Bindung', en: 'Binding'}, value: {de: 'Drahtspirale', en: 'Wire spiral'}},
  {label: {de: 'Umfang', en: 'Extent'}, value: {de: '96 Seiten', en: '96 pages'}},
  {label: {de: 'Papier', en: 'Paper'}, value: {de: 'Naturweiss', en: 'Natural white'}},
];

export const pages: Page[] = [
  {
    src: 'assets/liederbuch/page-06.jpg',
    title: {de: 'Regen', en: 'Rain'},
    no: 'S. 06',
    alt: {de: 'Liederbuch — Innenseite 06, Regen-Aquarell', en: 'Songbook — inside page 06, rain watercolour'},
  },
  {
    src: 'assets/liederbuch/page-25.jpg',
    title: {de: 'Schnecke', en: 'Snail'},
    no: 'S. 25',
    alt: {de: 'Liederbuch — Innenseite 25, Schnecken-Aquarell', en: 'Songbook — inside page 25, snail watercolour'},
  },
  {
    src: 'assets/liederbuch/page-30.jpg',
    title: {de: 'Katze', en: 'Cat'},
    no: 'S. 30',
    alt: {de: 'Liederbuch — Innenseite 30, Katze auf gelbem Wash', en: 'Songbook — inside page 30, cat on a yellow wash'},
  },
  {
    src: 'assets/liederbuch/page-32.jpg',
    title: {de: 'Schneemann', en: 'Snowman'},
    no: 'S. 32',
    alt: {de: 'Liederbuch — Innenseite 32, Schneemann', en: 'Songbook — inside page 32, snowman'},
  },
  {
    src: 'assets/liederbuch/page-33.jpg',
    title: {de: 'Schneeflocken', en: 'Snowflakes'},
    no: 'S. 33',
    alt: {de: 'Liederbuch — Innenseite 33, Schneeflocken', en: 'Songbook — inside page 33, snowflakes'},
  },
  {
    src: 'assets/liederbuch/page-54.jpg',
    title: {de: 'Schiff', en: 'Ship'},
    no: 'S. 54',
    alt: {de: 'Liederbuch — Innenseite 54, Schiff auf Wasser', en: 'Songbook — inside page 54, ship on water'},
  },
  {
    src: 'assets/liederbuch/page-61.jpg',
    title: {de: 'Tick Tack', en: 'Tick Tock'},
    no: 'S. 61',
    alt: {de: 'Liederbuch — Innenseite 61, Tick Tack mit Wecker', en: 'Songbook — inside page 61, tick tock with alarm clock'},
  },
  {
    src: 'assets/liederbuch/page-69.jpg',
    title: {de: 'Lagerfeuer', en: 'Campfire'},
    no: 'S. 69',
    alt: {de: 'Liederbuch — Innenseite 69, Lagerfeuer', en: 'Songbook — inside page 69, campfire'},
  },
];

export const motifs: Motif[] = [
  {
    src: 'assets/liederbuch/motif-spinne.png',
    title: {de: 'Spinnennetz', en: 'Cobweb'},
    tag: {de: 'Bleistift', en: 'Pencil'},
    alt: {de: 'Spinnennetz-Illustration mit Spinne', en: 'Cobweb illustration with a spider'},
  },
  {
    src: 'assets/liederbuch/motif-blaetter.png',
    title: {de: 'Blätter', en: 'Leaves'},
    tag: {de: 'Paginierung', en: 'Pagination'},
    alt: {de: 'Blätterranken-Illustration', en: 'Leaf-vine illustration'},
  },
  {
    src: 'assets/liederbuch/motif-background.png',
    title: {de: 'Wolke', en: 'Cloud'},
    tag: {de: 'Aquarell · Blau', en: 'Watercolour · Blue'},
    alt: {de: 'Blauer Aquarell-Wash', en: 'Blue watercolour wash'},
  },
  {
    src: 'assets/liederbuch/motif-regen.png',
    title: {de: 'Regen', en: 'Rain'},
    tag: {de: 'Aquarell · Lavendel', en: 'Watercolour · Lavender'},
    alt: {de: 'Regen-Illustration', en: 'Rain illustration'},
  },
  {
    src: 'assets/liederbuch/motif-schnecke.png',
    title: {de: 'Schnecke', en: 'Snail'},
    tag: {de: 'Aquarell · Pfirsich', en: 'Watercolour · Peach'},
    alt: {de: 'Schnecken-Illustration', en: 'Snail illustration'},
  },
];
