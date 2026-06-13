import type {L} from '~/lib/locale';

// Bilingual copy for the VIA Award branding case study, ported from the design
// bundle's "VIA Award.html". Marketing material, animated banners, videos and
// embedded X posts for the Vesalius Innovation Award (S. Karger AG).

export interface MasonryItem {
  src: string;
  href: string;
  alt: L<string>;
  title: string;
  tag: string;
}

export interface GifItem {
  src: string;
  alt: L<string>;
  title: string;
}

export interface VideoItem {
  id: string;
  title: string;
  tag: string;
}

export interface XItem {
  href: string;
  title: L<string>;
  meta: L<string>;
}

export const viaMasonry: MasonryItem[] = [
  {
    src: 'assets/via/Flyer_What_it_takes.jpg',
    href: 'assets/via/Flyer_What_it_takes.jpg',
    alt: {
      de: 'Flyer — Apply for the Vesalius Innovation Award and Spark a Revolution!',
      en: 'Flyer — Apply for the Vesalius Innovation Award and Spark a Revolution!',
    },
    title: 'Flyer · «What it takes»',
    tag: 'A4',
  },
  {
    src: 'assets/via/Li_Live_Speaker_VIA_2023.jpg',
    href: 'assets/via/Li_Live_Speaker_VIA_2023.jpg',
    alt: {
      de: 'Li Live Speaker VIA 2023 — How AI is Changing the Game of (Scientific) Publishing',
      en: 'Li Live Speaker VIA 2023 — How AI is Changing the Game of (Scientific) Publishing',
    },
    title: 'Li Live Speaker',
    tag: '2023',
  },
  {
    src: 'assets/via/Zitat_Imagetwin_2023.jpg',
    href: 'assets/via/Zitat_Imagetwin_2023.jpg',
    alt: {
      de: 'Zitat-Banner Patrick Starke, Co-Founder Imagetwin',
      en: 'Quote banner Patrick Starke, Co-Founder Imagetwin',
    },
    title: 'Zitat — Imagetwin',
    tag: '2023',
  },
  {
    src: 'assets/via/Finalists_2023.jpg',
    href: 'assets/via/Finalists_2023.jpg',
    alt: {
      de: 'Finalists 2023 — Globalcampus, Lupengo, Paindrainer, PIPRA, Teraquiz',
      en: 'Finalists 2023 — Globalcampus, Lupengo, Paindrainer, PIPRA, Teraquiz',
    },
    title: 'Finalists',
    tag: '2023',
  },
  {
    src: 'assets/via/VIA_Voucher_Finale.jpg',
    href: 'assets/via/VIA_Voucher_Finale.jpg',
    alt: {
      de: 'Voucher — Pay to the order of: Winner 2024',
      en: 'Voucher — Pay to the order of: Winner 2024',
    },
    title: 'Voucher · Finale',
    tag: '2024',
  },
  {
    src: 'assets/via/VIA_Voucher_web.jpg',
    href: 'assets/via/VIA_Voucher_web.jpg',
    alt: {
      de: 'Voucher — 60 second bespoke 2D animation by Science Animated',
      en: 'Voucher — 60 second bespoke 2D animation by Science Animated',
    },
    title: 'Voucher · Web',
    tag: 'Science Animated',
  },
  {
    src: 'assets/via/via-square-format.jpg',
    href: 'assets/via/via-square-format.jpg',
    alt: {de: 'Midpage Logo Banner — 300×250', en: 'Midpage logo banner — 300×250'},
    title: 'Midpage Banner',
    tag: '300×250',
  },
  {
    src: 'assets/via/VIA_Badge_Finalist.png',
    href: 'assets/via/VIA_Badge_Finalist.png',
    alt: {de: 'Winner of 2022 — VIA Badge', en: 'Winner of 2022 — VIA Badge'},
    title: 'Badge · Winner 2022',
    tag: 'PNG',
  },
  {
    src: 'assets/via/VIA_Badge_Finale.png',
    href: 'assets/via/VIA_Badge_Finale.png',
    alt: {de: 'Finalist of 2024 — VIA Badge', en: 'Finalist of 2024 — VIA Badge'},
    title: 'Badge · Finalist 2024',
    tag: 'PNG',
  },
  {
    src: 'assets/via/via-wide-format.jpg',
    href: 'assets/via/via-wide-format.jpg',
    alt: {
      de: 'Leaderboard Banner — Vesalius Innovation Award 2024 Apply Now',
      en: 'Leaderboard banner — Vesalius Innovation Award 2024 Apply Now',
    },
    title: 'Leaderboard',
    tag: '728×90',
  },
];

export const viaGifs: GifItem[] = [
  {
    src: 'assets/via/Timer_August.gif',
    alt: {de: 'Animierter Timer August — Countdown-Banner', en: 'Animated timer August — countdown banner'},
    title: 'Timer · August',
  },
  {
    src: 'assets/via/Who_looking_for_2023.gif',
    alt: {de: 'Animiertes Banner — Who we are looking for 2023', en: 'Animated banner — Who we are looking for 2023'},
    title: 'Who we\'re looking for · 2023',
  },
  {
    src: 'assets/via/Who_looking_for_2024.gif',
    alt: {de: 'Animiertes Banner — Who we are looking for 2024', en: 'Animated banner — Who we are looking for 2024'},
    title: 'Who we\'re looking for · 2024',
  },
];

export const viaVideos: VideoItem[] = [
  {id: 'zk_QYcjNMRU', title: 'Promotion Video · YouTube', tag: 'YouTube'},
  {id: 'UO63RzkQkXo', title: 'Award Video', tag: 'YouTube'},
  {id: 'ntMUeTNIXV0', title: 'Winner Interview · ImageTwin', tag: 'YouTube'},
];

export const viaPosts: XItem[] = [
  {
    href: 'https://twitter.com/Karger_Publish/status/1823698810129768790',
    title: {de: 'Social Spot', en: 'Social Spot'},
    meta: {de: 'X · Aug 2024', en: 'X · Aug 2024'},
  },
  {
    href: 'https://twitter.com/Karger_Publish/status/1803699482296549710',
    title: {de: 'Social Spot', en: 'Social Spot'},
    meta: {de: 'X · Jun 2024', en: 'X · Jun 2024'},
  },
  {
    href: 'https://twitter.com/Karger_Publish/status/1798293715120771516',
    title: {de: 'Social Spot', en: 'Social Spot'},
    meta: {de: 'X · Mai 2024', en: 'X · May 2024'},
  },
];
