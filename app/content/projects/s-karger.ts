import type {L} from '~/lib/locale';

// Bilingual content for the S. Karger AG "Animation Lead" motion showcase,
// ported from the design bundle's "S Karger AG.html". All copy mirrors the
// source .lang-de / .lang-en blocks; German-only source strings get a natural
// English rendering.

export interface KargerVideo {
  id: string;
  caption: L<string>;
  heading: L<string>;
  body: L<string>[];
  credit: L<string>;
}

export interface KargerSection {
  num: string;
  title: L<string>;
  lede: L<string>;
  videos: KargerVideo[];
}

export const kargerMeta: {label: L<string>; value: string}[] = [
  {label: {de: 'Bereich', en: 'Field'}, value: 'Motion · Editorial · Post'},
  {label: {de: 'Jahre', en: 'Years'}, value: '2019 – 2024'},
  {label: {de: 'Rolle', en: 'Role'}, value: 'Animation Lead, Edit, Sound'},
];

export const kargerBrief: {
  label: L<string>;
  lede: L<string>;
  body: L<string>;
  note: L<string>;
} = {
  label: {de: 'Briefing', en: 'Brief'},
  lede: {
    de: 'In meiner Position als Angestellte der Firma habe ich die Verantwortung für das Animieren, Schneiden und Bearbeiten dieser Interviews übernommen.',
    en: 'As an in-house designer at the company, I took responsibility for animating, cutting and editing these interviews.',
  },
  body: {
    de: 'Das heißt sicherzustellen, dass sie den qualitativen Standards und den Anforderungen der Organisation entsprechen. Die gewählten Farben und gestalterischen Elemente sind dabei meine kreative Interpretation des Corporate Designs der Firma S. Karger AG.',
    en: 'That means ensuring they meet the organisation’s quality standards and requirements. The chosen colours and design elements are my creative interpretation of the corporate design of S. Karger AG.',
  },
  note: {
    de: 'Alle Farben und Schmuckelemente sind integraler Bestandteil des Corporate Designs von S. Karger AG und wurden nicht von mir festgelegt.',
    en: 'All colours and decorative elements are an integral part of the corporate design of S. Karger AG and were not defined by me.',
  },
};

export const kargerSections: KargerSection[] = [
  {
    num: '01',
    title: {de: 'Brandvideo & Marketing', en: 'Brand video & marketing'},
    lede: {
      de: 'Nach der Einführung des neuen Brandings 2019 und der Umgestaltung der Website 2024 wurde ein neues Brandvideo in Auftrag gegeben — Branding, neue Ziele und Tonalität in einem zweiminütigen Stück.',
      en: 'After the 2019 rebrand and the 2024 website redesign, a new brand video was commissioned — branding, new goals and tone of voice in a two-minute piece.',
    },
    videos: [
      {
        id: 'lC9cLUZxUPE',
        caption: {de: 'Brandvideo 2024', en: 'Brand video 2024'},
        heading: {de: 'Brandvideo 2024.', en: 'Brand video 2024.'},
        body: [
          {de: 'Stockfootage von Adobe Stock. Musik von Epidemic Sound.', en: 'Stock footage from Adobe Stock. Music from Epidemic Sound.'},
          {
            de: 'Nach der Einführung des neuen Brandings in 2019 und der weiteren Ausarbeitung, sowie der Umgestaltung der Website 2024 wurde ein neues Brandvideo in Auftrag gegeben, welches das Branding und die neuen Ziele nochmals zeigen sollte.',
            en: 'After the new branding was introduced in 2019, further refined, and the website redesigned in 2024, a new brand video was commissioned to once again showcase the branding and the new goals.',
          },
        ],
        credit: {
          de: 'Edit + Animation Robine · Footage Adobe Stock · Music Epidemic Sound',
          en: 'Edit + animation Robine · Footage Adobe Stock · Music Epidemic Sound',
        },
      },
      {
        id: 'C8E9f06bEI0',
        caption: {de: 'Podcast Promo', en: 'Podcast promo'},
        heading: {de: 'Podcast Promotion Video.', en: 'Podcast promotion video.'},
        body: [
          {
            de: 'Um das neue Medium zu promoten wurde ein kurzes Promovideo mit den wichtigsten Infos zusammengestellt.',
            en: 'To promote the new medium, a short promo video was put together with all the key information.',
          },
        ],
        credit: {de: 'Edit + Animation Robine', en: 'Edit + animation Robine'},
      },
      {
        id: 'Rz_YxXsHj_E',
        caption: {de: 'Immune System Journal', en: 'Immune System Journal'},
        heading: {de: 'Immune System Journal — Promo.', en: 'Immune System Journal — promo.'},
        body: [
          {
            de: 'Um das neue Journal zu promoten wurde von den Editor-in-Chiefs eine kurze Zusammenfassung des Inhaltes gesammelt und grafisch dargestellt.',
            en: 'To promote the new journal, the editors-in-chief compiled a short summary of its content, which was then visualised graphically.',
          },
        ],
        credit: {de: 'Edit + Animation Robine', en: 'Edit + animation Robine'},
      },
      {
        id: 'Dfio2C5sZUc',
        caption: {de: 'People & Science Live', en: 'People & Science Live'},
        heading: {de: 'People & Science Live — Title animation.', en: 'People & Science Live — title animation.'},
        body: [
          {de: 'Titelanimation für People & Science Live auf LinkedIn Live.', en: 'Title animation for People & Science Live on LinkedIn Live.'},
        ],
        credit: {
          de: 'Design Nico Burtscher · Umsetzung & Animation Robine',
          en: 'Design Nico Burtscher · Execution & animation Robine',
        },
      },
    ],
  },
  {
    num: '02',
    title: {de: 'E-Learning Animationsvideos', en: 'E-learning animation videos'},
    lede: {
      de: 'Animationen für mehrere E-Learning Kurse. Da die Videos zu teils bezahlten Kursen gehören, werden hier nur Ausschnitte ohne Audio gezeigt.',
      en: 'Animations for several e-learning courses. Because some belong to paid courses, only audio-less excerpts are shown here.',
    },
    videos: [
      {
        id: 'HIa-JhUxQXY',
        caption: {de: 'E-Learning Reel', en: 'E-learning reel'},
        heading: {de: 'Best of — E-Learning.', en: 'Best of — e-learning.'},
        body: [
          {
            de: 'Dieses Video zeigt verschiedene Animationen, die für mehrere E-Learning Kurse entstanden sind. Da die Videos zu teils bezahlten Kursen gehören, werden nur Ausschnitte ohne Audio gezeigt.',
            en: 'This video shows various animations created for several e-learning courses. Because some belong to paid courses, only audio-less excerpts are shown.',
          },
        ],
        credit: {
          de: 'Grafiken Freelancer & Nico Burtscher · Scripts Joanna Mathisen · Animation Robine',
          en: 'Graphics freelancers & Nico Burtscher · Scripts Joanna Mathisen · Animation Robine',
        },
      },
    ],
  },
  {
    num: '03',
    title: {de: 'Interviews & Podcasts', en: 'Interviews & podcasts'},
    lede: {
      de: 'Studio- und On-Location-Interviews. Vom Set bis zum finalen Schnitt — Kamera, Audio und Post.',
      en: 'Studio and on-location interviews. From set to final cut — camera, audio and post.',
    },
    videos: [
      {
        id: 'ntMUeTNIXV0',
        caption: {de: 'Vesalius Award · ImageTwin', en: 'Vesalius Award · ImageTwin'},
        heading: {de: 'Vesalius Innovation Award — ImageTwin.', en: 'Vesalius Innovation Award — ImageTwin.'},
        body: [
          {
            de: 'Interview mit den Gewinnern des 3. Vesalius Innovation Awards: Patrick Starke und Markus Zlabinger von ImageTwin.',
            en: 'Interview with the winners of the 3rd Vesalius Innovation Award: Patrick Starke and Markus Zlabinger of ImageTwin.',
          },
          {
            de: 'Das Interview wurde direkt vor Ort nach der Bekanntgabe des Gewinners geführt.',
            en: 'The interview was conducted on location right after the winner was announced.',
          },
        ],
        credit: {
          de: 'Interview Victoria Telebar Pajan · Kamera, Audio & Schnitt Robine',
          en: 'Interview Victoria Telebar Pajan · Camera, audio & edit Robine',
        },
      },
      {
        id: 'ECtI5QQ4l5c',
        caption: {de: 'Glomerular Diseases', en: 'Glomerular Diseases'},
        heading: {de: 'Glomerular Diseases — Editors-in-Chief.', en: 'Glomerular Diseases — editors-in-chief.'},
        body: [
          {
            de: 'Ein Online-Interview mit Prof. Dr. Sharon Adler und Prof. Dr. Cynthia Nast, den Editors-in-Chief vom Glomerular Diseases Journal.',
            en: 'An online interview with Prof. Dr. Sharon Adler and Prof. Dr. Cynthia Nast, the editors-in-chief of the Glomerular Diseases Journal.',
          },
          {
            de: 'Das online aufgezeichnete Interview wurde von mir in der Post-Production aufbereitet.',
            en: 'The interview, recorded online, was prepared by me in post-production.',
          },
        ],
        credit: {de: 'Post-Production Robine', en: 'Post-production Robine'},
      },
    ],
  },
];
