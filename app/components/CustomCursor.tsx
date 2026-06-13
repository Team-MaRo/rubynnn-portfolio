import {useEffect, useRef} from 'react';

// Mix-blend cursor dot. Mounted only on the client; bails out on coarse pointers
// (touch) and when the user prefers reduced motion, leaving the native cursor.
// `cursor: none` is applied via the `has-custom-cursor` body class + the
// `html.js` guard in app.css, so no-JS visitors always keep the system cursor.
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    if (!el || !finePointer || reduced) {
      return;
    }
    document.body.classList.add('has-custom-cursor');

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element && t.closest('a, button, figure, [data-cursor], input, summary') != null;
    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        el.classList.add('is-hover');
      }
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        el.classList.remove('is-hover');
      }
    };

    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return <div ref={ref} className="cursor-dot" aria-hidden="true" />;
}
