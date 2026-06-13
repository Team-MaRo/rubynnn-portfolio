import {useEffect} from 'react';
import {isLang, LANG_STORAGE} from '~/i18n-config';

// Bare `/` shell. Prerendered to a tiny static page that (a) redirects to the
// stored / browser-preferred locale when JS runs, and (b) shows plain language
// links so it still works with JavaScript disabled.
export function meta() {
  return [{title: 'Robine\'s Space'}];
}

export default function RootIndex() {
  useEffect(() => {
    let target = 'de';
    try {
      const stored = localStorage.getItem(LANG_STORAGE);
      if (isLang(stored)) {
        target = stored;
      } else if (navigator.language.slice(0, 2).toLowerCase() === 'en') {
        target = 'en';
      }
    } catch {
      // ignore
    }
    window.location.replace(`${import.meta.env.BASE_URL}${target}`);
  }, []);

  return (
    <main className="mx-auto flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-3xl font-light italic">Robine's Space</p>
      <nav className="flex gap-4 font-mono text-sm uppercase tracking-[0.14em]">
        <a href="de" className="text-accent hover:underline">Deutsch</a>
        <span aria-hidden className="text-faint">/</span>
        <a href="en" className="text-accent hover:underline">English</a>
      </nav>
    </main>
  );
}
