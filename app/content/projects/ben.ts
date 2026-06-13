import type {L} from '~/lib/locale';

// Bilingual copy for the Ben Marriott courses motion page, ported from the
// design bundle's Ben.html.

export interface CourseCard {
  idx: L<string>;
  name: string;
  note: L<string>;
  status: L<string>;
  state: 'active' | 'pending';
  progress?: {label: string; pct: number};
}

export type WeekCard
  = | {
    kind: 'video';
    num: L<string>;
    title: L<string>;
    source: L<string>;
    sourceBen: boolean;
    src: string;
    yt: string;
  }
  | {
    kind: 'youtube';
    num: L<string>;
    title: L<string>;
    source: L<string>;
    sourceBen: boolean;
    ytId: string;
    yt: string;
  }
  | {
    kind: 'placeholder';
    num: L<string>;
    title: L<string>;
    label: L<string>;
  };

export const benCourses: CourseCard[] = [
  {
    idx: {de: 'Kurs 01', en: 'Course 01'},
    name: 'Motion Foundation',
    note: {
      de: 'Grundlagen-Kurs: Timing, Easing, Shape-Layer-Workflow und die ersten eigenen Loops in After Effects.',
      en: 'Foundation course: timing, easing, shape-layer workflow and the first loops of my own in After Effects.',
    },
    status: {de: 'Laufend', en: 'Ongoing'},
    state: 'active',
    progress: {label: '06 / 09', pct: 66.6},
  },
  {
    idx: {de: 'Kurs 02', en: 'Course 02'},
    name: 'Master Motion Design',
    note: {
      de: 'Fortgeschrittene Techniken — komplexere Charakter­animation, Rigs und Storytelling mit Bewegung.',
      en: 'Advanced techniques — more complex character animation, rigs and storytelling through motion.',
    },
    status: {de: 'Noch nicht begonnen', en: 'Not started yet'},
    state: 'pending',
  },
  {
    idx: {de: 'Kurs 03', en: 'Course 03'},
    name: 'Design Breakthrough',
    note: {
      de: 'Vom Können zur Handschrift — Recherche, Stilfindung und das Schärfen eines eigenen visuellen Tons.',
      en: 'From skill to signature — research, finding a style and sharpening a visual voice of your own.',
    },
    status: {de: 'Noch nicht begonnen', en: 'Not started yet'},
    state: 'pending',
  },
];

export const benWeeks: WeekCard[] = [
  {
    kind: 'video',
    num: {de: 'Woche 01', en: 'Week 01'},
    title: {de: 'Mosaik', en: 'Mosaic'},
    source: {de: 'Eigenes Design', en: 'Own design'},
    sourceBen: false,
    src: 'assets/ben/W1_Mosaik.mp4',
    yt: 'https://youtu.be/o87VrEINfu0',
  },
  {
    kind: 'video',
    num: {de: 'Woche 02', en: 'Week 02'},
    title: {de: 'Cool', en: 'Cool'},
    source: {de: 'Eigenes Design', en: 'Own design'},
    sourceBen: false,
    src: 'assets/ben/W2_Karotte.mp4',
    yt: 'https://youtube.com/shorts/u0VQx7_FFaA?feature=share',
  },
  {
    kind: 'video',
    num: {de: 'Woche 03', en: 'Week 03'},
    title: {de: 'Schach', en: 'Chess'},
    source: {de: 'Nach Ben Marriott', en: 'After Ben Marriott'},
    sourceBen: true,
    src: 'assets/ben/W3_Schach.mp4',
    yt: 'https://youtube.com/shorts/fbZaoBnB1iY?feature=share',
  },
  {
    kind: 'youtube',
    num: {de: 'Woche 04', en: 'Week 04'},
    title: {de: 'Nemo', en: 'Nemo'},
    source: {de: 'Eigenes Design', en: 'Own design'},
    sourceBen: false,
    ytId: 'dhevqawxzgY',
    yt: 'https://youtube.com/shorts/dhevqawxzgY?feature=share',
  },
  {
    kind: 'placeholder',
    num: {de: 'Woche 05', en: 'Week 05'},
    title: {de: 'Kurspause', en: 'Course break'},
    label: {de: 'Pause', en: 'Break'},
  },
  {
    kind: 'video',
    num: {de: 'Woche 06', en: 'Week 06'},
    title: {de: 'Good Night', en: 'Good Night'},
    source: {de: 'Eigenes Design', en: 'Own design'},
    sourceBen: false,
    src: 'assets/ben/W6_GoodNight.mp4',
    yt: 'https://youtube.com/shorts/mkHkG5aPcs8?feature=share',
  },
  {
    kind: 'video',
    num: {de: 'Woche 07', en: 'Week 07'},
    title: {de: 'Karotte', en: 'Carrot'},
    source: {de: 'Eigenes Design', en: 'Own design'},
    sourceBen: false,
    src: 'assets/ben/W7_Carrot.mp4',
    yt: 'https://youtube.com/shorts/u6qyr7z9aVI?feature=share',
  },
  {
    kind: 'placeholder',
    num: {de: 'Woche 08', en: 'Week 08'},
    title: {de: 'In Arbeit', en: 'In progress'},
    label: {de: 'Folgt', en: 'Coming'},
  },
  {
    kind: 'placeholder',
    num: {de: 'Woche 09', en: 'Week 09'},
    title: {de: 'In Arbeit', en: 'In progress'},
    label: {de: 'Folgt', en: 'Coming'},
  },
];
