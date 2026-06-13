import type {L} from '~/lib/locale';

// Bilingual copy for the "Portfolio Website" project page — two iterations of
// Robine's own portfolio (the archived WordPress site at robines.space and the
// current Claude Design custom-code prototype). Ported from the design bundle's
// "Portfolio Website.html".

export interface PdfCard {
  num: string;
  title: string;
  thumb: string; // app/media/assets/portfolio-thumbs/*
  full: string; // app/media/uploads/*
  fit?: 'cover' | 'contain';
}

export interface PdfGroup {
  title: string;
  meta: L<string>;
  cards: PdfCard[];
}

export interface ProtoLink {
  num: string;
  cat: L<string>;
  title: string;
  blurb: L<string>;
}

export interface CompareCol {
  kicker: L<string>;
  title: string;
  proto?: boolean;
  specs: {label: L<string>; value: L<string>}[];
  pros: L<string>[];
  cons: L<string>[];
}

export interface RoadmapCard {
  step: L<string>;
  cat: L<string>;
  title: L<string>;
  blurb: L<string>;
}

export const pdfGroups: PdfGroup[] = [
  {
    title: 'Übersicht',
    meta: {de: '04 Seiten · Start, Featured, Projekte, Vita', en: '04 pages · Home, Featured, Projects, Bio'},
    cards: [
      {num: '01', title: 'Home', thumb: 'assets/portfolio-thumbs/01_home.jpg', full: 'uploads/01_Home.jpg', fit: 'cover'},
      {num: '02', title: 'S. Karger AG', thumb: 'assets/portfolio-thumbs/02_karger.jpg', full: 'uploads/02_S.-Karger-AG---Robines-Space---robines.jpg', fit: 'contain'},
      {num: '13', title: 'Meine Projekte', thumb: 'assets/portfolio-thumbs/13_projekte.jpg', full: 'uploads/13_Meine-Projekte---Robines-Space---robines.jpg', fit: 'contain'},
      {num: '16', title: 'Über mich', thumb: 'assets/portfolio-thumbs/16_about.jpg', full: 'uploads/16_Ueber-mich---Robines-Space---robines.jpg', fit: 'cover'},
    ],
  },
  {
    title: 'Projekt-Seiten',
    meta: {de: '07 Seiten · Motion, Print, Branding, …', en: '07 pages · Motion, Print, Branding, …'},
    cards: [
      {num: '03', title: 'Motion Design', thumb: 'assets/portfolio-thumbs/03_motion.jpg', full: 'uploads/03_Motion-Design---Robines-Space---robines.jpg', fit: 'cover'},
      {num: '04', title: 'Icon Design', thumb: 'assets/portfolio-thumbs/04_icon.jpg', full: 'uploads/04_Icon-Design---Robines-Space---robines.jpg', fit: 'cover'},
      {num: '05', title: 'Print Medien', thumb: 'assets/portfolio-thumbs/05_print.jpg', full: 'uploads/05_Print-Medien---Robines-Space---robines.jpg', fit: 'cover'},
      {num: '06', title: 'VIA Award', thumb: 'assets/portfolio-thumbs/06_via.jpg', full: 'uploads/06_VIA-Award---Robines-Space---robines.jpg', fit: 'cover'},
      {num: '07', title: 'Illustrationen', thumb: 'assets/portfolio-thumbs/07_illu.jpg', full: 'uploads/07_Illustrationen---Robines-Space---robines.jpg', fit: 'cover'},
      {num: '08', title: 'Privater Auftrag', thumb: 'assets/portfolio-thumbs/08_privat.jpg', full: 'uploads/08_Privater-Auftrag---Robines-Space---robines.jpg', fit: 'cover'},
      {num: '14', title: 'Hochzeit Website', thumb: 'assets/portfolio-thumbs/14_hochzeit.jpg', full: 'uploads/14_Hochzeit-Website---Robines-Space---robines.jpg', fit: 'cover'},
    ],
  },
  {
    title: 'Ausbildung',
    meta: {de: '02 Seiten · Kurse & Weiterbildung', en: '02 pages · Courses & training'},
    cards: [
      {num: '10', title: 'OfG', thumb: 'assets/portfolio-thumbs/10_ofg.jpg', full: 'uploads/10_OfG---Robines-Space---robines.jpg', fit: 'cover'},
      {num: '11', title: 'Motion Foundation', thumb: 'assets/portfolio-thumbs/11_motion_foundation.jpg', full: 'uploads/11_Motion-Foundation---Robines-Space---robines.jpg', fit: 'cover'},
    ],
  },
];

export const protoLinks: ProtoLink[] = [
  {num: '01', cat: {de: 'Motion', en: 'Motion'}, title: 'S. Karger AG', blurb: {de: 'Acht Jahre Animation Lead, Loop-Galerie und Showreel.', en: 'Eight years as animation lead, a loop gallery and showreel.'}},
  {num: '02', cat: {de: 'Motion · Studien', en: 'Motion · Studies'}, title: 'Ben Marriott Kurse', blurb: {de: 'Drei Online-Kurse, neun Wochenarbeiten — mit YouTube-Buttons.', en: 'Three online courses, nine weekly pieces — with YouTube buttons.'}},
  {num: '03', cat: {de: 'Motion · Schule', en: 'Motion · School'}, title: 'OfG Abschluss', blurb: {de: 'Motion-Design-Studium an der OfG, Final-Piece-Case-Study.', en: 'Motion-design studies at the OfG, final-piece case study.'}},
  {num: '04', cat: {de: 'Graphic', en: 'Graphic'}, title: 'Print Medien', blurb: {de: 'Editorial- und Printarbeiten aus sechs Jahren Karger.', en: 'Editorial and print work from six years at Karger.'}},
  {num: '05', cat: {de: 'Branding', en: 'Branding'}, title: 'VIA Award', blurb: {de: 'Branding und Award-Kampagne von 2023.', en: 'Branding and award campaign from 2023.'}},
  {num: '06', cat: {de: 'Mobile', en: 'Mobile'}, title: 'Sponte App', blurb: {de: 'Konzept, Design und Prototyp für eine Mobile-App.', en: 'Concept, design and prototype for a mobile app.'}},
  {num: '07', cat: {de: 'Illustration', en: 'Illustration'}, title: 'Icon Design', blurb: {de: 'UI- und System-Icons für Karger-Produkte.', en: 'UI and system icons for Karger products.'}},
  {num: '08', cat: {de: 'Buchgestaltung', en: 'Book design'}, title: 'Liederbuch', blurb: {de: 'Layout, Satz und Produktion eines Liederbuchs.', en: 'Layout, typesetting and production of a songbook.'}},
  {num: '09', cat: {de: 'Editorial', en: 'Editorial'}, title: 'Hochzeit', blurb: {de: 'Einladung, Tischkarten und kleine Hochzeitswebsite.', en: 'Invitation, place cards and a small wedding website.'}},
];

export const compareCols: CompareCol[] = [
  {
    kicker: {de: 'Iteration 01 · Live', en: 'Iteration 01 · Live'},
    title: 'robines.space',
    specs: [
      {label: {de: 'Stack', en: 'Stack'}, value: {de: 'WordPress + Elementor', en: 'WordPress + Elementor'}},
      {label: {de: 'Sprache', en: 'Language'}, value: {de: 'Deutsch', en: 'German'}},
      {label: {de: 'Seiten', en: 'Pages'}, value: {de: '13 (s. oben)', en: '13 (see above)'}},
      {label: {de: 'Update', en: 'Update'}, value: {de: 'eingefroren', en: 'frozen'}},
      {label: {de: 'Domain', en: 'Domain'}, value: {de: 'ehemals robines.space', en: 'formerly robines.space'}},
    ],
    pros: [
      {de: 'Inhalte schnell ergänzbar, ohne Code anzufassen.', en: 'Content added quickly, without touching any code.'},
      {de: 'Eingebaute Mediathek, SEO-Basics, Backup.', en: 'Built-in media library, SEO basics, backups.'},
      {de: 'Hat seinen Job ein Jahr lang zuverlässig erledigt.', en: 'Did its job reliably for a year.'},
    ],
    cons: [
      {de: 'Layout-Spielraum von Theme und Builder begrenzt.', en: 'Layout freedom limited by theme and builder.'},
      {de: 'Motion und Mikrointeraktionen aufwendig nachzubauen.', en: 'Motion and micro-interactions laborious to recreate.'},
      {de: 'Typografie eng an Plugin-Möglichkeiten gebunden.', en: 'Typography tied closely to what plugins allow.'},
    ],
  },
  {
    kicker: {de: 'Iteration 02 · Prototyp', en: 'Iteration 02 · Prototype'},
    title: 'Claude Design',
    proto: true,
    specs: [
      {label: {de: 'Stack', en: 'Stack'}, value: {de: 'HTML · CSS · React · Claude', en: 'HTML · CSS · React · Claude'}},
      {label: {de: 'Sprache', en: 'Language'}, value: {de: 'Deutsch / Englisch', en: 'German / English'}},
      {label: {de: 'Seiten', en: 'Pages'}, value: {de: '9+ Project-Pages', en: '9+ project pages'}},
      {label: {de: 'Update', en: 'Update'}, value: {de: 'iterativ, AI-assistiert', en: 'iterative, AI-assisted'}},
      {label: {de: 'Hosting', en: 'Hosting'}, value: {de: 'übernimmt robines.space', en: 'takes over robines.space'}},
    ],
    pros: [
      {de: 'Eigene Typo, eigene Komponenten — gestalterisch frei.', en: 'Own typography, own components — design-wise free.'},
      {de: 'Motion und Interaktionen pro Project-Page gezielt einsetzbar.', en: 'Motion and interactions deployed per project page on purpose.'},
      {de: 'DE/EN-Toggle und Theme-Toggle ohne Plugin-Workaround.', en: 'DE/EN toggle and theme toggle without plugin workarounds.'},
    ],
    cons: [
      {de: 'Inhaltspflege ohne CMS — Änderungen brauchen Code.', en: 'Content upkeep without a CMS — changes need code.'},
      {de: 'Noch in Entwicklung, einzelne Seiten in Arbeit.', en: 'Still in development, some pages in progress.'},
      {de: 'Hosting/Deploy-Workflow muss noch entschieden werden.', en: 'Hosting / deploy workflow still to be decided.'},
    ],
  },
];

export const roadmap: RoadmapCard[] = [
  {
    step: {de: 'Schritt 01', en: 'Step 01'},
    cat: {de: 'Inhalte', en: 'Content'},
    title: {de: 'Restliche Project-Pages', en: 'Remaining project pages'},
    blurb: {de: 'Die fehlenden Detailseiten in Claude Design nachziehen — Reisen, Journals, kleinere Aufträge.', en: 'Catch up the missing detail pages in Claude Design — travels, journals, smaller commissions.'},
  },
  {
    step: {de: 'Schritt 02', en: 'Step 02'},
    cat: {de: 'System', en: 'System'},
    title: {de: 'Komponenten festziehen', en: 'Lock in components'},
    blurb: {de: 'Hero, Section-Header, Video- und Bild-Karten als wiederverwendbare Bausteine.', en: 'Hero, section header, video and image cards as reusable building blocks.'},
  },
  {
    step: {de: 'Schritt 03', en: 'Step 03'},
    cat: {de: 'Deploy', en: 'Deploy'},
    title: {de: 'Domain übergeben', en: 'Hand over the domain'},
    blurb: {de: 'Statischer Host (Netlify / Vercel) — oder klassisch via FTP. Sobald der Prototyp steht, wandert robines.space auf die neue Seite.', en: 'Static host (Netlify / Vercel) — or classic FTP. Once the prototype is ready, robines.space moves to the new site.'},
  },
  {
    step: {de: 'Schritt 04', en: 'Step 04'},
    cat: {de: 'Pflege', en: 'Upkeep'},
    title: {de: 'Editing-Flow', en: 'Editing flow'},
    blurb: {de: 'Leichter Weg, neue Inhalte einzupflegen — entweder direkt im Code oder über einen schlanken Headless-CMS-Aufsatz.', en: 'An easy way to add new content — either directly in code or via a lean headless-CMS layer.'},
  },
];
