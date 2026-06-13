import {useEffect} from 'react';
import {useLocation} from 'react-router';

// Adds `.is-seen` to every `.reveal` element as it scrolls into view. Re-scans
// on route change. Under reduced-motion the CSS transition is neutralised; with
// no JS the CSS already shows `.reveal` content (see app.css).
export function useReveal() {
  const {pathname} = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-seen)'));
    if (els.length === 0) {
      return;
    }
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-seen'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-seen');
            io.unobserve(e.target);
          }
        });
      },
      {rootMargin: '0px 0px -10% 0px', threshold: 0.05},
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}
