import type {L} from '~/lib/locale';

// Navigation model, ported from the prototype's `content.js` MENU. Sections map
// to home-page anchors (`#motion`, …); each sub-item is a project page route
// slug. Consumed by TopNav, MenuOverlay (with live search) and the home work
// grid. `slug` is the locale-agnostic route slug (see routes-manifest.ts).
export interface MenuSub {id: string; label: L<string>; slug: string}
export interface MenuSection {id: string; num: string; label: L<string>; sub: MenuSub[]}

export const MENU: MenuSection[] = [
  {
    id: 'motion',
    num: '01',
    label: {de: 'Motion Design', en: 'Motion Design'},
    sub: [
      {id: 'karger', label: {de: 'S. Karger AG', en: 'S. Karger AG'}, slug: 'motion/s-karger'},
      {id: 'ofg', label: {de: 'OfG Kurs', en: 'OfG Course'}, slug: 'motion/ofg'},
      {id: 'ben', label: {de: 'Ben Marriott Kurse', en: 'Ben Marriott Courses'}, slug: 'motion/ben'},
    ],
  },
  {
    id: 'graphic',
    num: '02',
    label: {de: 'Graphic Design', en: 'Graphic Design'},
    sub: [
      {id: 'print', label: {de: 'Print Medien', en: 'Print Media'}, slug: 'graphic/print-medien'},
      {id: 'via', label: {de: 'VIA Award', en: 'VIA Award'}, slug: 'graphic/via-award'},
      {id: 'lieder', label: {de: 'Liederbuch', en: 'Songbook'}, slug: 'graphic/liederbuch'},
      {id: 'hoch', label: {de: 'Hochzeit', en: 'Wedding'}, slug: 'graphic/hochzeit'},
      {id: 'pilates', label: {de: 'Pilates Flyer', en: 'Pilates Flyer'}, slug: 'graphic/pilates-flyer'},
    ],
  },
  {
    id: 'web',
    num: '03',
    label: {de: 'Web Design', en: 'Web Design'},
    sub: [
      {id: 'portfolio', label: {de: 'Portfolio Website', en: 'Portfolio Website'}, slug: 'web/portfolio-website'},
      {id: 'sponte', label: {de: 'Sponte App', en: 'Sponte App'}, slug: 'web/sponte-app'},
    ],
  },
  {
    id: 'illu',
    num: '04',
    label: {de: 'Illustrationen', en: 'Illustrations'},
    sub: [
      {id: 'icons', label: {de: 'Icon Design', en: 'Icon Design'}, slug: 'illu/icon-design'},
      {id: 'journals', label: {de: 'Journals', en: 'Journals'}, slug: 'illu/journals'},
    ],
  },
  {
    id: 'fotos',
    num: '05',
    label: {de: 'Fotos', en: 'Photos'},
    sub: [
      {id: 'europa', label: {de: 'Europa', en: 'Europe'}, slug: 'fotos/europa'},
      {id: 'asien', label: {de: 'Asien', en: 'Asia'}, slug: 'fotos/asien'},
    ],
  },
  {id: 'about', num: '06', label: {de: 'Über mich', en: 'About'}, sub: []},
  {id: 'contact', num: '07', label: {de: 'Kontakt', en: 'Contact'}, sub: []},
];

export const SOCIALS = {
  email: 'hello@robines.space',
  instagram: 'https://instagram.com/',
  vimeo: 'https://vimeo.com/',
};
