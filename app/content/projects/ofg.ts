import type {L} from '~/lib/locale';

// Bilingual copy for the OfG motion-design course case study,
// ported from design-ref/robines-portfolio/project/OfG.html.

export interface RefLink {href: string; label: L<string>; arr: L<string>}

export interface OfgContent {
  hero: {
    title: L<{top: string; bottom: string}>;
    meta: {label: L<string>; value: string}[];
  };
  brief: {
    label: L<string>;
    lede: L<string>;
    body: L<string>;
    note: L<string>;
  };
  m1: {
    num: string;
    title: L<string>;
    lede: L<string>;
    quote: L<string>;
    who: L<string>;
    video: {id: string; title: L<string>; src: string};
    conceptHead: L<string>;
    conceptLede: L<string>;
    words: {num: string; term: {pre: string; rest: string}; body: L<string>}[];
    colorHead: L<string>;
    colorLede: L<string>;
    swatches: {hex: string; name: L<string>; role?: L<string>}[];
    fontHead: L<string>;
    fontLede: L<string>;
    fonts: {name: string; accent?: boolean}[];
  };
  m2: {
    num: string;
    title: L<string>;
    lede: L<string>;
    quote: L<string>;
    who: L<string>;
    video: {id: string; title: L<string>; src: string};
    colorHead: L<string>;
    colorLede: L<string>;
    swatches: {hex: string; name: L<string>}[];
    refHead: L<string>;
    refs: RefLink[];
  };
  m3: {
    num: string;
    title: L<string>;
    lede: L<string>;
    quote: L<string>;
    who: L<string>;
    video: {id: string; title: L<string>; src: string};
    refHead: L<string>;
    refLede: L<string>;
    refs: RefLink[];
  };
  credits: {
    num: string;
    title: L<string>;
    lede: L<string>;
    disclaimerLabel: L<string>;
    disclaimer: L<string>;
  };
}

const yt: L<string> = {de: 'YouTube ↗', en: 'YouTube ↗'};

export const ofg: OfgContent = {
  hero: {
    title: {
      de: {top: 'OfG', bottom: 'Kurs.'},
      en: {top: 'OfG', bottom: 'Course.'},
    },
    meta: [
      {label: {de: 'Bereich', en: 'Field'}, value: 'Motion Design'},
      {label: {de: 'Jahr', en: 'Year'}, value: '2021'},
      {label: {de: 'Ausbildung', en: 'Course'}, value: 'OfG Online-Schule'},
    ],
  },
  brief: {
    label: {de: 'Briefing', en: 'Brief'},
    lede: {
      de: 'Abschlussarbeit der Weiterbildung zur Motion Designerin an der OfG — drei Monatsaufgaben, in denen ich mich Schritt für Schritt von kinetischer Typografie über musikgetriebene Motion Graphics bis hin zu einem narrativen Kurzfilm gearbeitet habe.',
      en: 'Final project of my Motion Designer certificate at the OfG — three monthly assignments where I worked from kinetic typography through music-sync animation to a finished storytelling sequence, step by step.',
    },
    body: {
      de: 'Jede Aufgabe hatte einen anderen technischen und gestalterischen Fokus — von reiner Type-Animation über Synchronisation mit Musik bis hin zur Verbindung von Stockmaterial, Schnitt und Sounddesign zu einer eigenen kleinen Erzählung.',
      en: 'Each assignment had a different technical and design focus — from pure type animation through syncing to music, up to combining stock footage, editing and sound design into a small story of my own.',
    },
    note: {
      de: 'Die Aufgabenstellungen kamen aus dem OfG-Kursprogramm 2021. Konzept, Recherche, Gestaltung, Animation und Schnitt wurden komplett selbstständig umgesetzt. Bilder, Musik und Stockmaterial stammen aus frei verfügbaren Quellen — Quellen sind unten verlinkt.',
      en: 'The briefs came from the OfG 2021 course programme. Concept, research, design, animation and editing were all done independently. Images, music and stock footage come from freely available sources — credited below.',
    },
  },
  m1: {
    num: '01',
    title: {de: 'Monatsaufgabe 01 — Kinetische Typografie', en: 'Assignment 01 — Kinetic Typography'},
    lede: {
      de: 'Eine Animation, die mit Schrift, Rhythmus und Bildstörungen drei kurze Botschaften erzählt. Inhaltlich beeinflusst von der damaligen Corona-Lage — der Wechsel zwischen dunklen Gedanken und kreativem Aufbruch.',
      en: 'An animation that tells three short messages through type, rhythm and glitches. Shaped by the pandemic mood of the time — the swing between dark thoughts and a creative awakening.',
    },
    quote: {
      de: '„Die Farbgebung sollte die einzelnen Themen und den Übergang dazwischen widerspiegeln — Dunkelgrau für negative Gedanken zur Coronakrise, Weiss für den kreativen Moment, Rot als Übergang. Die Bildstörungen geben dem Ganzen einen Alt-Touch und zeigen: dieser Zustand geht vorbei, das Positive bleibt."',
      en: '"The colours were meant to reflect the individual themes and the transition between them — dark grey for negative thoughts about the pandemic, white for the creative moment, red as the bridge. The glitches give it a worn touch and show: this state passes, the positive stays."',
    },
    who: {de: '— eigenes Briefing · M1', en: '— own brief · M1'},
    video: {
      id: 'o1usqiMBEOk',
      title: {
        de: 'Monatsaufgabe 01 — stay curious / be bold / become creative',
        en: 'Assignment 01 — stay curious / be bold / become creative',
      },
      src: 'YouTube · o1usqiMBEOk',
    },
    conceptHead: {de: 'Konzept', en: 'Concept'},
    conceptLede: {
      de: 'Drei kurze Statements, jedes mit einer eigenen Animationslogik, damit Form und Bedeutung zusammen wirken:',
      en: 'Three short statements, each with its own animation logic so that form and meaning work together:',
    },
    words: [
      {
        num: '01',
        term: {pre: 'stay', rest: ' curious'},
        body: {
          de: 'Einzoomen in den Text — die Bewegung steht für die Neugier, etwas Neues zu entdecken.',
          en: 'Zooming into the text — the motion stands for the curiosity to discover something new.',
        },
      },
      {
        num: '02',
        term: {pre: 'be', rest: ' bold'},
        body: {
          de: 'Schrift in Bold — Erscheinen nicht von links nach rechts, sondern von oben nach unten und umgekehrt.',
          en: 'Bold type — appearing not left to right, but top to bottom and back again.',
        },
      },
      {
        num: '03',
        term: {pre: 'become', rest: ' creative'},
        body: {
          de: 'Bruch mit 2D — der Text springt in den Raum und wird dreidimensional gedacht.',
          en: 'Breaking with 2D — the text jumps into space and is imagined three-dimensionally.',
        },
      },
    ],
    colorHead: {de: 'Farbe', en: 'Colour'},
    colorLede: {
      de: 'Eine reduzierte Palette aus drei Tönen, die den narrativen Bogen tragen.',
      en: 'A reduced palette of three tones carrying the narrative arc.',
    },
    swatches: [
      {hex: '#1f1f1f', name: {de: 'Dunkelgrau', en: 'Dark grey'}, role: {de: 'Negativ', en: 'Negative'}},
      {hex: '#d22d2d', name: {de: 'Rot', en: 'Red'}, role: {de: 'Übergang', en: 'Transition'}},
      {hex: '#f4f1ec', name: {de: 'Weiss', en: 'White'}, role: {de: 'Kreativ', en: 'Creative'}},
    ],
    fontHead: {de: 'Schriften', en: 'Typefaces'},
    fontLede: {
      de: 'Schrift-Setzkasten — geprüfte Kandidaten aus der Ideenphase.',
      en: 'Type case — candidates tested during the ideation phase.',
    },
    fonts: [
      {name: 'Tw Cen MT', accent: true},
      {name: 'Verdana'},
      {name: 'Franklin Gothic Demi'},
      {name: 'Myriad Pro'},
      {name: 'Monsal Gothic'},
      {name: 'Microsoft JhengHei'},
    ],
  },
  m2: {
    num: '02',
    title: {de: 'Monatsaufgabe 02 — Music-Driven Motion', en: 'Assignment 02 — Music-Driven Motion'},
    lede: {
      de: 'Motion-Graphics-Stück, dessen Formen und Schnitt sich auf einen Musiktrack synchronisieren. Visuelle Ankerpunkte: das Poster-Plakatdesign der 80er und die Bewegungssprache von SWISSTED.',
      en: 'A motion-graphics piece whose shapes and cuts sync to a music track. Visual anchors: 80s poster design and the motion language of SWISSTED.',
    },
    quote: {
      de: '„Hauptinspiration war das Video SWISSTED — Rock posters remixed in motion graphics. Bei den Farben hab ich mich an Postern im 80er-Stil orientiert — sehr kräftig, damit sie auch bei schnellen Bewegungen klar wahrnehmbar sind. Bewegung und Formen folgen der Musik, um das Gehörte visuell zu unterstreichen."',
      en: '"The main inspiration was the video SWISSTED — Rock posters remixed in motion graphics. For the colours I looked at 80s-style posters — very bold, so they stay readable even in fast motion. Movement and shapes follow the music to underline what you hear."',
    },
    who: {de: '— eigenes Briefing · M2', en: '— own brief · M2'},
    video: {
      id: 'AD9IDheOtps',
      title: {de: 'Monatsaufgabe 02 — Sound auf Form', en: 'Assignment 02 — Sound onto Form'},
      src: 'YouTube · AD9IDheOtps',
    },
    colorHead: {de: 'Farbe', en: 'Colour'},
    colorLede: {
      de: 'Plakatfarben der 80er — sättigungsstark, hoch kontrastreich, schnell lesbar in Bewegung.',
      en: '80s poster colours — highly saturated, high-contrast, quick to read in motion.',
    },
    swatches: [
      {hex: '#f25c5c', name: {de: 'Hot Coral', en: 'Hot Coral'}},
      {hex: '#2bb6c7', name: {de: 'Pool', en: 'Pool'}},
      {hex: '#f4c542', name: {de: 'Sun', en: 'Sun'}},
      {hex: '#0f1a3a', name: {de: 'Midnight', en: 'Midnight'}},
      {hex: '#f3ece1', name: {de: 'Cream', en: 'Cream'}},
    ],
    refHead: {de: 'Quellen', en: 'Sources'},
    refs: [
      {
        href: 'https://www.youtube.com/watch?v=9zaXayhnd1A',
        label: {de: 'SWISSTED — Rock posters remixed in motion graphics', en: 'SWISSTED — Rock posters remixed in motion graphics'},
        arr: yt,
      },
      {
        href: 'https://www.youtube.com/watch?v=2nGe3NSgSEo',
        label: {de: 'Motion Reference — 80s posters in motion', en: 'Motion Reference — 80s posters in motion'},
        arr: yt,
      },
      {
        href: 'http://ncs.io/Thinkin',
        label: {de: 'Alex Skrindo & Miza — „Thinkin\'"', en: 'Alex Skrindo & Miza — “Thinkin\'”'},
        arr: {de: 'NCS Release ↗', en: 'NCS Release ↗'},
      },
    ],
  },
  m3: {
    num: '03',
    title: {de: 'Monatsaufgabe 03 — Innere Welten', en: 'Assignment 03 — Inner Worlds'},
    lede: {
      de: 'Ein kurzer narrativer Film über innere Gedanken und Ideen — und was wir damit machen. Spiegel und Bilderrahmen als Türen zu anderen Welten, ein Wasserfall als Fluss der Gedanken, Himmel als Bühne für vorbeiziehende Emotionen.',
      en: 'A short narrative film about inner thoughts and ideas — and what we do with them. Mirrors and picture frames as doors to other worlds, a waterfall as the flow of thought, the sky as a stage for passing emotions.',
    },
    quote: {
      de: '„Mir hat die Idee aus Büchern und Filmen schon immer gefallen, dass Spiegel oder Bilderrahmen Türen zu anderen Welten sein können. Im zweiten Teil steht der Wasserfall für den Fluss der Gedanken und der Himmel für die vorbeiziehenden Emotionen. Dazu passte das Zitat: Your only limit is your mind."',
      en: '"I always loved the idea from books and films that mirrors or picture frames can be doors to other worlds. In the second part the waterfall stands for the flow of thoughts and the sky for the passing emotions. The quote fit perfectly: Your only limit is your mind."',
    },
    who: {de: '— eigenes Briefing · M3', en: '— own brief · M3'},
    video: {
      id: 'dtrX792Voec',
      title: {
        de: 'Monatsaufgabe 03 — Your only limit is your mind',
        en: 'Assignment 03 — Your only limit is your mind',
      },
      src: 'YouTube · dtrX792Voec',
    },
    refHead: {de: 'Quellen', en: 'Sources'},
    refLede: {
      de: 'Stockmaterial, Ton und Zitat — alle Bilder von Pexels, Ton aus YouTube-Bibliothek.',
      en: 'Stock footage, audio and quote — all images from Pexels, audio from the YouTube library.',
    },
    refs: [
      {
        href: 'https://www.youtube.com/watch?v=kw07wyP3qm4',
        label: {de: 'Visual Reference', en: 'Visual Reference'},
        arr: yt,
      },
      {
        href: 'https://www.youtube.com/watch?v=ylqKy0DqT0I',
        label: {de: 'Ton-Quelle', en: 'Audio source'},
        arr: yt,
      },
      {
        href: 'https://www.pexels.com/de-de/foto/schwarze-holzregale-1701535/',
        label: {de: 'Bibliothek · schwarze Holzregale', en: 'Library · black wooden shelves'},
        arr: {de: 'Pexels ↗', en: 'Pexels ↗'},
      },
      {
        href: 'https://www.pexels.com/de-de/foto/wasserfalle-unter-bewolktem-himmel-3672776/',
        label: {de: 'Wasserfall unter bewölktem Himmel', en: 'Waterfall under a cloudy sky'},
        arr: {de: 'Pexels ↗', en: 'Pexels ↗'},
      },
      {
        href: 'https://www.pexels.com/photo/photo-of-a-flock-of-flying-birds-1553463/',
        label: {de: 'Vogelschwarm im Flug', en: 'Flock of birds in flight'},
        arr: {de: 'Pexels ↗', en: 'Pexels ↗'},
      },
      {
        href: 'https://www.pexels.com/photo/low-angle-photo-of-linear-leaf-plant-1054018/',
        label: {de: 'Pflanze · Untersicht', en: 'Plant · low angle'},
        arr: {de: 'Pexels ↗', en: 'Pexels ↗'},
      },
    ],
  },
  credits: {
    num: '04',
    title: {de: 'Credits & Hinweis', en: 'Credits & Note'},
    lede: {
      de: 'Alle drei Monatsaufgaben wurden im Rahmen der OfG-Weiterbildung als persönliche Studierendenarbeit umgesetzt. Konzept, Animation, Schnitt und Sounddesign von mir; Stockmaterial, Musik und Zitat von den oben verlinkten Quellen.',
      en: 'All three monthly assignments were made as personal student work during the OfG certificate. Concept, animation, editing and sound design by me; stock footage, music and quote from the sources linked above.',
    },
    disclaimerLabel: {de: 'Hinweis.', en: 'Note.'},
    disclaimer: {
      de: 'Diese Arbeiten entstanden 2021 als Übungs- und Abschlussarbeiten der OfG-Ausbildung. Sie spiegeln meinen damaligen Stand wider und sind hier dokumentiert, weil sie der Beginn meiner Motion-Design-Praxis sind.',
      en: 'These works were made in 2021 as practice and final pieces of the OfG course. They reflect where I stood back then and are documented here because they mark the beginning of my motion-design practice.',
    },
  },
};
