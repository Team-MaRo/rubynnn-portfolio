import type {L} from '~/lib/locale';

// Bilingual copy for the Icon Design case study (Karger AG icon system),
// ported from design-ref/robines-portfolio/project/Icon Design.html.

export interface IconCell {n: string; src: string; alt: string; name: L<string>}
export interface IconSet {
  id: string;
  num: string;
  title: string;
  lede: L<string>;
  cells: IconCell[];
}

export const heroMeta: {label: L<string>; value: string}[] = [
  {label: {de: 'Bereich', en: 'Field'}, value: 'UI · Editorial Icons'},
  {label: {de: 'Jahre', en: 'Years'}, value: '2019 – 2024'},
  {label: {de: 'Kund:in', en: 'Client'}, value: 'S. Karger AG'},
];

export const heroLead: L<string> = {
  de: 'Ein konsistentes Icon-System auf Basis von Font Awesome — ergänzt um fehlende Fachsymbole im gleichen Strich.',
  en: 'A consistent icon system built on Font Awesome — extended with the specialist symbols it lacked, drawn in the same stroke.',
};

export const brief = {
  label: {de: 'Briefing', en: 'Brief'},
  lede: {
    de: 'In meiner Position als Angestellte der Firma S. Karger AG habe ich — im Einklang mit dem Corporate Design, der Brandabteilung und den definierten Rahmenbedingungen — treffende Icons auf Basis der Font Awesome-Bibliothek entwickelt oder angepasst, um fehlende Fachgebiete und Themen abzudecken.',
    en: 'As an in-house designer at S. Karger AG — working within the corporate design, the brand team and the defined guard-rails — I drew icons fit for several different applications.',
  } as L<string>,
  body: {
    de: 'Die Icons wurden sowohl auf der Website als auch auf Werbematerial verwendet, um bestimmte Infos visuell darstellen zu können — Journal-Metriken, Workflow-Etappen, Fachbereiche und Service-Kategorien.',
    en: 'The icons were used both on the website and across promotional material to visualise specific information — journal metrics, workflow stages, subject areas and service categories.',
  } as L<string>,
  note: {
    de: 'Alle Farben und Schmuckelemente sind integraler Bestandteil des Corporate Designs von S. Karger AG und wurden nicht von mir festgelegt.',
    en: 'All colours and decorative elements are an integral part of the corporate design of S. Karger AG and were not defined by me.',
  } as L<string>,
};

export const systemLede: L<string> = {
  de: 'Eine konsistente Bildsprache über alle Touchpoints — basierend auf Font Awesome als technischem Unterbau, ergänzt um fehlende Fachsymbole im gleichen Strich.',
  en: 'A consistent visual language across all touchpoints — built on Font Awesome as the technical foundation, extended with the specialist symbols it lacked, in the same stroke.',
};

export const specs: {label: L<string>; value: string}[] = [
  {label: {de: 'Basis', en: 'Base'}, value: 'Font Awesome'},
  {label: {de: 'Grid', en: 'Grid'}, value: '24 × 24 px'},
  {label: {de: 'Stroke', en: 'Stroke'}, value: '1.5 px Linear'},
  {label: {de: 'Stil', en: 'Style'}, value: 'Outline · Rounded'},
];

export const sets: IconSet[] = [
  {
    id: 'journal-metrics',
    num: '02',
    title: 'Journal Metrics',
    lede: {
      de: 'Icon-Set zur Darstellung der Kennzahlen für die Journals von S. Karger AG — Impact Factor, CiteScore, Acceptance Rate, Time-to-Decision, Open Access und weitere Service-Merkmale.',
      en: 'Icon set for visualising the key figures of the S. Karger AG journals — impact factor, CiteScore, acceptance rate, time-to-decision, open access and further service attributes.',
    },
    cells: [
      {n: '01', src: 'assets/icons/Metrics_1.png', alt: 'Acceptance Rate', name: {de: 'Acceptance Rate', en: 'Acceptance Rate'}},
      {n: '02', src: 'assets/icons/Metrics_2.png', alt: 'Advanced Release', name: {de: 'Advanced Release', en: 'Advanced Release'}},
      {n: '03', src: 'assets/icons/Metrics_5.png', alt: 'Impact Factor', name: {de: 'Impact Factor', en: 'Impact Factor'}},
      {n: '04', src: 'assets/icons/Metrics_6.png', alt: 'Expertenbeirat', name: {de: 'Expertenbeirat', en: 'Expert Board'}},
      {n: '05', src: 'assets/icons/Metrics_9.png', alt: 'Praxisnahe Inhalte', name: {de: 'Praxisnahe Inhalte', en: 'Practical Content'}},
      {n: '06', src: 'assets/icons/Metrics_10.png', alt: 'Wissenstransfer', name: {de: 'Wissenstransfer', en: 'Knowledge Transfer'}},
      {n: '07', src: 'assets/icons/Metrics_11.png', alt: 'New Article Types', name: {de: 'New Article Types', en: 'New Article Types'}},
      {n: '08', src: 'assets/icons/Metrics_13.png', alt: 'New Section', name: {de: 'New Section', en: 'New Section'}},
      {n: '09', src: 'assets/icons/Metrics_17.png', alt: 'Time to Acceptance', name: {de: 'Time Acceptance', en: 'Time to Acceptance'}},
      {n: '10', src: 'assets/icons/Metrics_18.png', alt: 'Time to Final Decision', name: {de: 'Time Final Decision', en: 'Time to Final Decision'}},
      {n: '11', src: 'assets/icons/Metrics_19.png', alt: 'Time to First Decision', name: {de: 'Time First Decision', en: 'Time to First Decision'}},
      {n: '12', src: 'assets/icons/Metrics_20.png', alt: 'Transformative Journals', name: {de: 'Transformative Journals', en: 'Transformative Journals'}},
      {n: '13', src: 'assets/icons/Metrics_23.png', alt: 'Scopus', name: {de: 'Scopus', en: 'Scopus'}},
      {n: '14', src: 'assets/icons/Metrics_24.png', alt: 'Journal Citation Indicator', name: {de: 'Journal Citation Indicator', en: 'Journal Citation Indicator'}},
    ],
  },
  {
    id: 'silverchair',
    num: '03',
    title: 'Silverchair Platform',
    lede: {
      de: 'Spezifisches Icon-Set für die Karger-Journal-Plattform auf Silverchair — Navigation, Inhaltstypen und plattformspezifische Aktionen.',
      en: 'A dedicated icon set for the Karger journal platform on Silverchair — navigation, content types and platform-specific actions.',
    },
    cells: [
      {n: '01', src: 'assets/icons/Silverchair_11.png', alt: 'Split Screen', name: {de: 'Split Screen', en: 'Split Screen'}},
      {n: '02', src: 'assets/icons/Silverchair_12.png', alt: 'Free', name: {de: 'Free', en: 'Free'}},
      {n: '03', src: 'assets/icons/Silverchair_13.png', alt: 'Standard View', name: {de: 'Standard View', en: 'Standard View'}},
      {n: '04', src: 'assets/icons/Silverchair_14.png', alt: 'Contents', name: {de: 'Contents', en: 'Contents'}},
      {n: '05', src: 'assets/icons/Silverchair_15.png', alt: 'Academic', name: {de: 'Academic', en: 'Academic'}},
      {n: '06', src: 'assets/icons/Silverchair_16.png', alt: 'Agents & Booksellers', name: {de: 'Agents & Booksellers', en: 'Agents & Booksellers'}},
      {n: '07', src: 'assets/icons/Silverchair_17.png', alt: 'Societies', name: {de: 'Societies', en: 'Societies'}},
      {n: '08', src: 'assets/icons/Silverchair_18.png', alt: 'Health Sciences Industry', name: {de: 'Health Sciences Industry', en: 'Health Sciences Industry'}},
    ],
  },
  {
    id: 'weitere',
    num: '04',
    title: 'Weitere Icons',
    lede: {
      de: 'Ergänzungen für Editorial-Inhalte und Marketing — Fachbereiche, Inhaltstypen und Service-Kategorien.',
      en: 'Additions for editorial content and marketing — subject areas, content types and service categories.',
    },
    cells: [
      {n: '01', src: 'assets/icons/Others_1.png', alt: 'Articles', name: {de: 'Articles', en: 'Articles'}},
      {n: '02', src: 'assets/icons/Others_2.png', alt: 'Journals', name: {de: 'Journals', en: 'Journals'}},
      {n: '03', src: 'assets/icons/Others_3.png', alt: 'Citation', name: {de: 'Citation', en: 'Citation'}},
      {n: '04', src: 'assets/icons/Others_4.png', alt: 'Cycle of Knowledge', name: {de: 'Cycle of Knowledge', en: 'Cycle of Knowledge'}},
      {n: '05', src: 'assets/icons/Others_5.png', alt: 'Cite', name: {de: 'Cite', en: 'Cite'}},
      {n: '06', src: 'assets/icons/Others_6.png', alt: 'Research', name: {de: 'Research', en: 'Research'}},
      {n: '07', src: 'assets/icons/Others_7.png', alt: 'Publishing', name: {de: 'Publishing', en: 'Publishing'}},
      {n: '08', src: 'assets/icons/Others_8.png', alt: 'Interviews', name: {de: 'Interviews', en: 'Interviews'}},
    ],
  },
];

export const usage = {
  num: '05',
  title: {de: 'In Verwendung', en: 'In Use'},
  lede: {
    de: 'Die Icons im Einsatz auf Werbematerial und in den Journal-Detailseiten der Karger-Website. Visuelle Marker für Kennzahlen und Service-Eigenschaften — auf einen Blick lesbar, auch ohne Text.',
    en: 'The icons in use on promotional material and within the journal detail pages of the Karger website. Visual markers for key figures and service attributes — legible at a glance, even without text.',
  } as L<string>,
  cards: [
    {
      src: 'assets/icons/IA21065_anm.jpg',
      tall: true,
      title: 'Annals of Nutrition & Metabolism',
      sub: {de: 'Print-Flyer', en: 'Print Flyer'} as L<string>,
      alt: {
        de: 'Annals of Nutrition and Metabolism — Journal-Flyer mit Karger-Icons',
        en: 'Annals of Nutrition and Metabolism — journal flyer with Karger icons',
      } as L<string>,
    },
    {
      src: 'assets/icons/Icons_Website.png',
      tall: false,
      title: 'Journal Details — Web',
      sub: {de: 'karger.com', en: 'karger.com'} as L<string>,
      alt: {
        de: 'Journal-Details-Modul auf der Karger-Website',
        en: 'Journal details module on the Karger website',
      } as L<string>,
    },
  ],
};
