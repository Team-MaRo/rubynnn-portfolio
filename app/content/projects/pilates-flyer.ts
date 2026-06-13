import type {L} from '~/lib/locale';

// Bilingual copy for the Pilates Flyer case study, ported from the design
// bundle's "Pilates Flyer.html". German is the source of truth; English copy
// is a natural translation where the prototype only had German.

export interface MoodCard {
  href: string;
  src: string;
  alt: L<string>;
  source: string;
  desc: L<string>;
}

export interface Draft {
  src: string;
  alt: L<string>;
  label: string;
  note: L<string>;
}

export interface Spec {label: L<string>; value: string}

export const pilatesFlyer = {
  hero: {
    lines: [
      {text: {de: 'Pilates', en: 'Pilates'}},
      {text: {de: 'Flyer.', en: 'Flyer.'}, accent: true},
    ],
    meta: [
      {label: {de: 'Bereich', en: 'Field'}, value: 'Print · Editorial'},
      {label: {de: 'Jahr', en: 'Year'}, value: '2024'},
      {label: {de: 'Format', en: 'Format'}, value: 'A6 Flyer'},
    ] satisfies Spec[],
  },
  brief: {
    label: {de: 'Briefing', en: 'Brief'},
    lede: {
      de: 'Für die Kurse einer Freundin durfte ich einen Pilatesflyer erstellen.',
      en: 'A friend asked me to design a flyer for her Pilates classes.',
    } as L<string>,
    body: {
      de: 'Unten sieht man ein paar Flyer die ich auf Pinterest gefunden habe, welche als Inspiration dienten. Eine der Vorgaben war es, die Pilates Übung «Teaser» auf dem Flyer darzustellen.',
      en: 'Below are a few flyers I found on Pinterest that served as inspiration. One of the requirements was to depict the Pilates exercise “Teaser” on the flyer.',
    } as L<string>,
  },
  moodboard: {
    title: 'Moodboard',
    cards: [
      {
        href: 'https://de.pinterest.com/pin/472103973481142929/',
        src: 'assets/pilates/inspo-1.png',
        alt: {de: 'Pinterest-Inspiration 1', en: 'Pinterest inspiration 1'},
        source: 'Pinterest · Inspo 01',
        desc: {
          de: 'Organische Formen, warme Erdtöne, viel Weissraum',
          en: 'Organic shapes, warm earth tones, plenty of white space',
        },
      },
      {
        href: 'https://de.pinterest.com/pin/472103973481142938/',
        src: 'assets/pilates/inspo-2.jpg',
        alt: {de: 'Pinterest-Inspiration 2', en: 'Pinterest inspiration 2'},
        source: 'Pinterest · Inspo 02',
        desc: {
          de: 'Illustrierte Pose, Serif-Typo, Lotus-Mark',
          en: 'Illustrated pose, serif type, lotus mark',
        },
      },
      {
        href: 'https://de.pinterest.com/pin/472103973481559616/',
        src: 'assets/pilates/inspo-3.jpg',
        alt: {de: 'Pinterest-Inspiration 3', en: 'Pinterest inspiration 3'},
        source: 'Pinterest · Inspo 03',
        desc: {
          de: 'Soft Peach-Palette, Foto-Cutout, Akzent-Badge',
          en: 'Soft peach palette, photo cut-out, accent badge',
        },
      },
    ] satisfies MoodCard[],
  },
  drafts: {
    title: {de: 'Entwürfe', en: 'Drafts'} as L<string>,
    items: [
      {
        src: 'assets/pilates/entwurf-03.png',
        alt: {de: 'Entwurf 01 — drei Figuren im unteren Bereich', en: 'Draft 01 — three figures in the lower area'},
        label: {de: 'Entwurf 01', en: 'Draft 01'},
        note: {de: 'Drei Figuren unten', en: 'Three figures at the bottom'},
      },
      {
        src: 'assets/pilates/entwurf-02.png',
        alt: {de: 'Entwurf 02 — flächigere Variante', en: 'Draft 02 — flatter, blockier variant'},
        label: {de: 'Entwurf 02', en: 'Draft 02'},
        note: {de: 'Flächige Variante', en: 'Block-colour variant'},
      },
      {
        src: 'assets/pilates/entwurf-01.png',
        alt: {de: 'Entwurf 03 — Pose oben rechts, organische Farbflächen', en: 'Draft 03 — pose top right, organic colour shapes'},
        label: {de: 'Entwurf 03', en: 'Draft 03'},
        note: {de: 'Organische Komposition', en: 'Organic composition'},
      },
      {
        src: 'assets/pilates/final-flyer.jpg',
        alt: {de: 'Entwurf 04 — Blau-Sand-Palette', en: 'Draft 04 — blue-and-sand palette'},
        label: {de: 'Entwurf 04', en: 'Draft 04'},
        note: {de: 'Blau-Sand', en: 'Blue & sand'},
      },
    ].map((d) => ({...d, alt: d.alt, label: d.label, note: d.note})),
  },
  final: {
    title: {de: 'Finaler Flyer', en: 'Final flyer'} as L<string>,
    src: 'assets/pilates/final-mockup-new.jpg',
    alt: {
      de: 'Finaler Pilates Flyer — Mockup auf Holzschale',
      en: 'Final Pilates flyer — mockup on a wooden tray',
    } as L<string>,
    headline: 'It\'s the mind that shapes your body.',
    body1: {
      de: 'Die finale Version kombiniert die warme Terracotta-Palette aus Entwurf 03 mit der Pose und Komposition aus Entwurf 04 — Teaser zentral, Kurs- und Kontaktinfos klar gestaffelt.',
      en: 'The final version combines the warm terracotta palette from Draft 03 with the pose and composition from Draft 04 — the Teaser front and centre, course and contact details clearly staggered.',
    } as L<string>,
    body2: {
      de: 'Pilates-Übung «Teaser» als zentrales Motiv, kombiniert mit organischen Farbflächen und einer ruhigen, lesbaren Typo-Hierarchie für Kurszeiten und Preise.',
      en: 'The Pilates exercise “Teaser” as the central motif, paired with organic colour shapes and a calm, legible type hierarchy for class times and prices.',
    } as L<string>,
    specs: [
      {label: {de: 'Format', en: 'Format'}, value: 'A6 (105 × 148 mm)'},
      {label: {de: 'Druck', en: 'Print'}, value: '4/0 Offset'},
      {label: {de: 'Auflage', en: 'Run'}, value: '250 Stück'},
    ] satisfies Spec[],
  },
};
