import type {L} from '~/lib/locale';

// Bilingual copy for the Sponte App case study, ported from the design bundle's
// "Sponte App.html". Sponte is a concept app: a lantern you light to signal
// "I'm around" to a small circle of friends. Warm cream/coral/candlelight palette.

export const SPONTE_DIR = 'assets/sponte';

// ── Hero ──────────────────────────────────────────────────────────────────
export const heroTitle: {de: {lines: {text: string; accent?: boolean}[]}; en: {lines: {text: string; accent?: boolean}[]}} = {
  de: {lines: [{text: 'Ein leiserer Weg,'}, {text: 'frei für Freunde', accent: true}, {text: 'zu sein.', accent: true}]},
  en: {lines: [{text: 'A quieter way to be'}, {text: 'free for friends.', accent: true}]},
};

export const heroMeta: {label: L<string>; value: L<string>}[] = [
  {label: {de: 'Rolle', en: 'Role'}, value: {de: 'Solo · Konzept, Design, Prototyp', en: 'Solo · concept, design, prototype'}},
  {label: {de: 'Flächen', en: 'Surfaces'}, value: {de: 'iOS · Android · iPad · Web · Watch', en: 'iOS · Android · iPad · Web · Watch'}},
  {label: {de: 'Jahr', en: 'Year'}, value: {de: '2025', en: '2025'}},
];

export const trioCaption: L<string> = {
  de: 'Drei Zustände eines Screens — aus, an und wer ist frei.',
  en: 'Three states of one screen — unlit, lit and who\'s free.',
};

// ── Briefing / Intro ──────────────────────────────────────────────────────
export const introLabel: L<string> = {
  de: 'Konzept · iOS, Android, iPadOS, Web · 2025',
  en: 'Concept · iOS, Android, iPadOS, Web · 2025',
};
export const introLede: L<string> = {
  de: 'Sponte ist eine Konzept-App für das spontane Vorbeischauen. Lichte eine Laterne, wenn du da bist — dein Kreis sieht, dass das Vorderlicht brennt, und wer Lust hat, schaut vorbei.',
  en: 'Sponte is a concept app for the casual drop-by. Light a lantern when you\'re around — your circle sees the porch is on, and the people who care to swing by, do.',
};
export const introBody: L<string> = {
  de: 'Sponte fragt nicht nach Verfügbarkeit, sondern signalisiert Anwesenheit. Eine kleine Geste statt einer Verabredung. Eine Idee, fünf Flächen: „Ich bin da, falls du Lust hast."',
  en: 'Sponte doesn’t ask about availability — it signals presence. A small gesture instead of a calendar invite. One idea, five surfaces: "I’m around if you’d like to swing by."',
};
export const introMuted: L<string> = {
  de: 'Solo-Projekt · Konzept, Design, Prototyp · 2025. Die folgenden Abschnitte zeigen den narrativen Kern: Prämisse, Metapher, eine Variantenstudie, der Auftritt auf jeder Fläche, ambiente Oberflächen und das visuelle System.',
  en: 'Solo project · concept, design, prototype · 2025. The next sections walk through the narrative core: premise, metaphor, a variant study, the cross-platform appearance, ambient surfaces and the visual system.',
};

// ── 01 — Premise ────────────────────────────────────────────────────────────
export const premiseLede: L<string>[] = [
  {
    de: 'Erwachsenen-Freundschaften sterben durch Terminabsprachen. Die meisten Menschen, die wir am meisten lieben, wohnen innerhalb von dreissig Minuten — wir sehen sie trotzdem zu selten. Nicht, weil wir beschäftigt sind, sondern weil zwischen uns ein Kalender, zwei Verschiebungen und eine Tischreservation liegen. Die Schwelle ist zu hoch für „ich würde einfach gern bei dir sitzen."',
    en: 'Adult friendships die by scheduling. Most of the people we love most live within thirty minutes of us. We see them less than we’d like — not because we’re busy, but because seeing them takes a calendar, two reschedules and a restaurant booking. The threshold is too high for "I’d just like to sit with you."',
  },
  {
    de: 'Sponte macht aus dem Satz „ich bin da, falls jemand vorbeischauen mag" einen Tap. Keine Einladung, keine erwartete Antwort, kein Event — nur eine Laterne im Fenster, an oder aus, für die Menschen, denen man ohnehin vertraut.',
    en: 'Sponte makes "I’m around if anyone wants to swing by" a single tap. No invitations, no replies expected, no event — just a lantern in the window, on or off, for the people you already trust.',
  },
];
export const premiseQuote: L<string> = {
  de: 'Kalender sind für Fremde. Freunde sollten wissen, wo das Vorderlicht brennt.',
  en: 'Calendars are for strangers. Friends should know where the porch light is.',
};
export const premiseClose: L<{pre: string; em: string; post: string}> = {
  de: {pre: 'Alles in der App kommt auf eine Entscheidung zurück: ', em: 'brennt deine Laterne, und für wen?', post: ' Das Produkt ist die Antwort auf diese Frage, sichtbar dort, wo du ohnehin hinschaust — Telefon, Handgelenk, Homescreen, Laptop.'},
  en: {pre: 'Everything in the app comes back to one decision: ', em: 'is your lantern lit, and for whom?', post: ' The product is the answer to that question, surfaced wherever you happen to look — your phone, your wrist, your home screen, your laptop.'},
};

// ── 02 — Metaphor ─────────────────────────────────────────────────────────
export const metaphorTitle: L<{pre: string; em: string; post: string}> = {
  de: {pre: 'Eine Laterne, kein ', em: 'Status', post: '.'},
  en: {pre: 'A lantern, not a ', em: 'status', post: '.'},
};
export const metaphorLede: L<string> = {
  de: '„Frei jetzt / beschäftigt / DND" liest sich wie ein Slack-Indikator. Eine Laterne liest sich wie ein Ort — konkret, warm, sofort verständlich. Jede Interaktion in der App ist etwas, das man an einer Laterne tut: anzünden, dimmen, mit Timer brennen lassen, den richtigen Leuten sichtbar machen.',
  en: '"Free now / busy / DND" reads like a Slack indicator. A lantern reads like a place — concrete, warm, already understood. Every interaction in the app is a thing you can do to a lantern: light it, dim it, leave it on a timer, let the right people see it.',
};
export const pillars: {idx: string; title: L<string>; body: L<string>}[] = [
  {
    idx: 'i.',
    title: {de: 'An, gedimmt, mit Timer.', en: 'Lit, dim, or on a timer.'},
    body: {
      de: 'Tap zum Anzünden. Die Laterne bleibt an bis zu einer Zeit, die du wählst — 30 Min., eine Stunde, bis zum Abendessen. Du musst nicht ans Dimmen denken; sie geht von selbst aus.',
      en: 'Tap to light. The lantern stays on until a time you set — 30 min, an hour, until dinner. You don’t have to remember to dim it; it ages out on its own.',
    },
  },
  {
    idx: 'ii.',
    title: {de: 'Für einen Kreis, nicht für alle.', en: 'For a circle, not the public.'},
    body: {
      de: 'Nur Menschen, die du hinzugefügt hast, sehen deine Laterne. Innerhalb dessen wählst du: alle, eine Gruppe oder bestimmte Namen. Privatsphäre ist der Default, kein Setting.',
      en: 'Only people you’ve added can see your lantern. Within that, you choose: everyone, a group or specific names. Privacy is the default, not a setting.',
    },
  },
  {
    idx: 'iii.',
    title: {de: 'Mit optionalem Hinweis.', en: 'With an optional ask.'},
    body: {
      de: '„Bring etwas mit" und „Stimmung" sind kleine Zusätze — eine Flasche Wein, ein Buch zum gemeinsam Lesen. Optional, weil die meisten Laternen sie nicht brauchen.',
      en: '"Bring something" and "mood" are tiny add-ons — a bottle of wine, a book to read in the same room. They’re optional because most lanterns don’t need them.',
    },
  },
];

// ── 03 — Variant study ────────────────────────────────────────────────────
export const variantTitle: L<{pre: string; em: string; post: string}> = {
  de: {pre: 'Wer ist da — ', em: 'zwei Wege', post: ''},
  en: {pre: 'Two ways to show ', em: 'who\'s around', post: ''},
};
export const variantLede: L<string> = {
  de: 'Wenn die eigene Laterne brennt, ist die nächste Frage, wessen Laterne sonst noch brennt. Zwei Layouts erkundet — jedes macht einen anderen Trade-off zwischen Dichte und Präsenz. Die Liste ist Default, das Grid lässt sich mit einem Tap einschalten.',
  en: 'Once your lantern is lit, the next question is whose else\'s is. I explored two layouts — each makes a different trade between density and presence. The list shipped as default; the grid is a one-tap layout switch.',
};
export const variants: {title: L<string>; badge: L<string>; isDefault: boolean; src: string; alt: L<string>; note: L<string>}[] = [
  {
    title: {de: 'Liste', en: 'List'},
    badge: {de: 'Default', en: 'Default'},
    isDefault: true,
    src: `${SPONTE_DIR}/04-friends-list-ios.png`,
    alt: {de: 'Freundesliste', en: 'Friends list'},
    note: {
      de: 'Namen, Gesichter, Restzeit. Maximale Lesbarkeit — am besten, wenn man gerade entscheidet, wem man als Nächstes schreibt.',
      en: 'Names, faces, time-left. The most legible layout — best when you\'re deciding who to text next.',
    },
  },
  {
    title: {de: 'Grid', en: 'Grid'},
    badge: {de: 'Sozial', en: 'Social'},
    isDefault: false,
    src: `${SPONTE_DIR}/05-friends-grid-ios.png`,
    alt: {de: 'Freunde-Grid', en: 'Friends grid'},
    note: {
      de: 'Grössere Avatare, weniger Dichte. Liest sich wie eine Pinnwand — weniger Details, mehr Präsenz.',
      en: 'Bigger avatars, lower density. Reads like a friend\'s wall — fewer details, more presence.',
    },
  },
];

// ── 04 — Cross-platform ───────────────────────────────────────────────────
export const crossTitle: L<{pre: string; em: string; post: string}> = {
  de: {pre: 'Eine Laterne, ', em: 'jede Fläche', post: '.'},
  en: {pre: 'Same lantern, ', em: 'every surface', post: '.'},
};
export const crossLede: L<string> = {
  de: 'Ein Kreis lebt nicht auf einem Gerät. Manche Leute wohnen im Browser, andere verlassen die Uhr nie. Der gleiche Home-Zustand — deine Laterne, die Laternen deiner Freunde — rendert sauber auf Phone, Tablet und Web; jede Fläche verdient sich den Platz, den sie bekommt.',
  en: 'A circle isn’t on one device. Some people live in a browser; some never leave the wrist. The same home state — your lantern, your friends’ lanterns — renders cleanly on phone, tablet and web, with each surface earning the space it gets.',
};
export const crossItems: {kind: 'phone' | 'tablet' | 'web'; src: string; alt: L<string>; label: L<string>; sub: L<string>}[] = [
  {kind: 'phone', src: `${SPONTE_DIR}/02-home-lit-ios.png`, alt: {de: 'Home erleuchtet, iOS-Telefon', en: 'Home lit, iOS phone'}, label: {de: 'Phone', en: 'Phone'}, sub: {de: 'iOS · Android', en: 'iOS · Android'}},
  {kind: 'tablet', src: `${SPONTE_DIR}/07-home-lit-tablet.png`, alt: {de: 'Home erleuchtet, iPad', en: 'Home lit, iPad'}, label: {de: 'Tablet', en: 'Tablet'}, sub: {de: 'iPadOS', en: 'iPadOS'}},
  {kind: 'web', src: `${SPONTE_DIR}/08-home-lit-web.png`, alt: {de: 'Home erleuchtet, Web', en: 'Home lit, web'}, label: {de: 'Web', en: 'Web'}, sub: {de: 'Desktop · Browser', en: 'Desktop · Browser'}},
];

// ── 05 — Ambient surfaces ─────────────────────────────────────────────────
export const ambientTitle: L<{pre: string; em: string; post: string}> = {
  de: {pre: 'Aus dem Weg, ', em: 'trotzdem an', post: '.'},
  en: {pre: 'Out of the way, ', em: 'still on', post: '.'},
};
export const ambientCopy: L<string>[] = [
  {
    de: 'Eine Laterne ist etwas, das man im Vorbeigehen anschaut. Sie verdient nicht jedes Mal eine Push-Nachricht. Sponte lebt dort, wo Blicke ohnehin hinfallen — als Live Activity auf dem Lock Screen, als Komplikation am Handgelenk, als Home-Screen-Widget auf dem Weg aus der Tür.',
    en: 'A lantern is something you glance at. It doesn’t deserve a notification every time someone’s around. Sponte lives where glances already happen — a Live Activity on the lock screen, a complication on your wrist, a home-screen widget you scan on the way out the door.',
  },
  {
    de: 'Die App öffnest du, um den Zustand deiner Laterne zu ändern. Den Rest der Zeit bleibt sie ruhig — sichtbar auf Lock Screen, Watch Face und Home Screen, ohne dass du sie suchen musst.',
    en: 'You open the app to change your lantern’s state. The rest of the time, the app stays quiet — your lantern is visible on your lock screen, watch face and home screen without you having to look for it.',
  },
];
export const ambientMuted: L<string> = {de: 'Ein Status, kein Posteingang.', en: 'A status, not an inbox.'};

export const ambientCards: {title: L<string>; src?: string; alt?: L<string>; kind: 'phone' | 'tablet' | 'watch'; body: L<string>}[] = [
  {
    title: {de: 'Live Activity', en: 'Live Activity'},
    kind: 'phone',
    src: `${SPONTE_DIR}/06-live-activity-ios.png`,
    alt: {de: 'Live-Activity-Pille', en: 'Live activity pill'},
    body: {
      de: 'Die Laterne lebt auf dem Lock Screen, solange sie brennt. Tap zum Dimmen, ohne zu entsperren.',
      en: 'The lantern lives on the lock screen for as long as it’s lit. Tap to dim without unlocking.',
    },
  },
  {
    title: {de: 'Apple Watch', en: 'Apple Watch'},
    kind: 'watch',
    body: {
      de: 'Mit einem Blick sehen, wer frei ist — oder das eigene Licht mit einem Tap löschen.',
      en: 'Glance at who’s free, or take down your light with a single tap.',
    },
  },
  {
    title: {de: 'Home-Screen-Widget', en: 'Home-screen widget'},
    kind: 'tablet',
    src: `${SPONTE_DIR}/09-widgets-tablet.png`,
    alt: {de: 'Widgets auf dem Home Screen', en: 'Widgets on home screen'},
    body: {
      de: 'Klein, mittel, gross. Ein Tap auf das Widget öffnet direkt den Magic Moment.',
      en: 'Small, medium, large. Tap the widget and the magic moment opens straight into it.',
    },
  },
];

// ── 06 — Visual system ────────────────────────────────────────────────────
export const visualTitle: L<{pre: string; em: string; post: string}> = {
  de: {pre: 'Creme, Koralle, ', em: 'Kerzenlicht', post: '.'},
  en: {pre: 'Cream, coral, ', em: 'candlelight', post: '.'},
};
export const visualLede: L<string> = {
  de: 'Die Palette ist eine Veranda in der Dämmerung. Warmes Creme als Papier, Holzkohle als Tinte, Koralle als Laterne, Honig als Glühen. Graue Töne ziehen ins Bräunliche, damit nichts nach Tabellenkalkulation aussieht. Eine Serif (Fraunces) trägt die Markenstimme; eine humanistische Sans (Inter) trägt das Interface; eine Mono (Space Mono) als Notiz am Rand.',
  en: 'The palette is a porch at dusk. Warm cream as paper, charcoal as ink, coral as the lantern, honey as the glow. Greys lean toward brown so nothing feels like a spreadsheet. A serif (Fraunces) carries the brand voice; a humanist sans (Inter) carries the interface; a mono (Space Mono) shows up as marginalia.',
};
export const swatches: {name: L<string>; hex: string; dark?: boolean}[] = [
  {name: {de: 'Papier', en: 'Paper'}, hex: '#F1EDE4'},
  {name: {de: 'Oberfläche', en: 'Surface'}, hex: '#FBF8F1'},
  {name: {de: 'Laterne', en: 'Lantern'}, hex: '#C25F3D', dark: true},
  {name: {de: 'Glühen', en: 'Glow'}, hex: '#F3C870'},
  {name: {de: 'Tinte', en: 'Ink'}, hex: '#2A2018', dark: true},
];
export const typeCards: {kind: 'serif' | 'sans' | 'mono'; label: L<string>; name: string; sample: L<{pre: string; em?: string}>}[] = [
  {kind: 'serif', label: {de: 'Display', en: 'Display'}, name: 'Fraunces · regular & italic', sample: {de: {pre: 'An bis ', em: '18:30'}, en: {pre: 'Lit until ', em: '4:30'}}},
  {kind: 'sans', label: {de: 'Interface', en: 'Interface'}, name: 'Inter · 500 / 600', sample: {de: {pre: 'Wer ist heute Abend frei'}, en: {pre: 'Who\'s free tonight'}}},
  {kind: 'mono', label: {de: 'Detail', en: 'Detail'}, name: 'Space Mono · 400', sample: {de: {pre: 'BIS · 18:30 · 3 FREUNDE'}, en: {pre: 'UNTIL · 4:30 · 3 FRIENDS'}}},
];

// ── 07 — What's next ──────────────────────────────────────────────────────
export const nextTitle: L<{pre: string; em: string; post: string}> = {
  de: {pre: 'Von der Leinwand ', em: 'in echte Hände', post: '.'},
  en: {pre: 'From canvas to ', em: 'real hands', post: '.'},
};
export const nextLede: L<string> = {
  de: 'Konzept, Argumentation, Designsystem und die kritischen Sheets sind fertig. Als Nächstes: der Build — und das Instrumentarium für die Fragen, die nur reale Daten beantworten.',
  en: 'Concept, reasoning, design system and the critical sheets are done. Next up: the build — and the instrumentation for the questions only real data can answer.',
};
export const nextItems: {num: string; title: L<string>; body: L<string>}[] = [
  {
    num: 'i.',
    title: {de: 'Usability testen.', en: 'Testing the usability.'},
    body: {
      de: 'Prototyp echten Menschen in die Hand geben. Die Laternen-Metapher ist auf dem Papier intuitiv — sie muss sich auch unter dem Daumen so anfühlen.',
      en: 'Put the prototype in front of real people. The lantern metaphor is intuitive on paper — it has to feel intuitive in a thumb.',
    },
  },
  {
    num: 'ii.',
    title: {de: 'Alle Icons von Hand zeichnen.', en: 'Creating all the icons by hand.'},
    body: {
      de: 'Jedes Glyph in der App verdient dieselbe Aufmerksamkeit wie die Laterne selbst. Als Nächstes: ein konsistentes, handgezeichnetes Icon-Set — gleiche warme Strichstärke, gleiche leise Persönlichkeit.',
      en: 'Every glyph in the app deserves the same attention as the lantern itself. A consistent, hand-drawn icon set is next — same warm line weight, same quiet personality.',
    },
  },
  {
    num: 'iii.',
    title: {de: 'Von der Leinwand in den Code.', en: 'Bringing the app from the canvas into code.'},
    body: {
      de: 'Der nächste Schritt ist ein lauffähiger Build — echte Animationen, echte Benachrichtigungen, echte Freunde, die echte Laternen anzünden. Die Leinwand war die Probe; der Build ist das Stück.',
      en: 'The next step is a working build — real animations, real notifications, real friends lighting real lanterns. The canvas was the rehearsal; the build is the play.',
    },
  },
];

// ── Status banner (In development) ─────────────────────────────────────────
export const statusBanner: L<string> = {de: 'In Entwicklung', en: 'In development'};
