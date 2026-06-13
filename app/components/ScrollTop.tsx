import {useEffect, useState} from 'react';
import {cn} from '~/lib/cn';

// Spring-in scroll-to-top button. JS-only; hidden with no JS (nothing to do).
export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      aria-label="Scroll to top"
      data-cursor="top"
      className={cn(
        'no-js:hidden fixed bottom-6 right-6 z-[120] grid h-12 w-12 place-items-center rounded-full bg-fg text-bg shadow-lg transition-all duration-300',
        show ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-2 scale-90 opacity-0',
      )}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
