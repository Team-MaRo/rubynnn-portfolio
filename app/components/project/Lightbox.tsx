import {useEffect, useRef} from 'react';
import {cn} from '~/lib/cn';

export interface LightboxItem {src: string; caption: string; alt: string}

interface Props {
  items: LightboxItem[];
  index: number | null;
  seriesTitle?: string;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

// Full-screen image viewer. Controlled by the parent (open index). Keyboard +
// touch-swipe navigation. With JS disabled it never mounts open — figures fall
// back to plain links to the raw image (see EditorialPhoto).
export function Lightbox({items, index, seriesTitle, onClose, onNavigate}: Props) {
  const open = index != null;
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((index - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((index + 1) % items.length);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, index, items.length, onClose, onNavigate]);

  if (!open) {
    return null;
  }
  const cur = items[index];
  if (cur === undefined) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const endX = e.changedTouches[0]?.clientX;
        if (touchX.current == null || endX == null) {
          return;
        }
        const dx = endX - touchX.current;
        if (Math.abs(dx) > 60) {
          onNavigate((index + (dx < 0 ? 1 : -1) + items.length) % items.length);
        }
        touchX.current = null;
      }}
      className="fixed inset-0 z-[300] flex cursor-zoom-out items-center justify-center px-6 py-14 md:px-20"
      style={{background: 'rgba(20,16,11,.96)'}}
    >
      <div className="fixed left-8 top-6 font-mono text-2xs uppercase tracking-[0.18em] text-white/55">
        {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
      </div>
      {seriesTitle != null && seriesTitle !== '' && (
        <div className="fixed left-1/2 top-5 -translate-x-1/2 font-display text-lg italic text-white/85">{seriesTitle}</div>
      )}
      <button type="button" onClick={onClose} aria-label="Close" className="fixed right-7 top-5 grid h-9 w-9 place-items-center font-mono text-white/70 hover:text-white">
        ✕
      </button>
      {(['prev', 'next'] as const).map((dir) => (
        <button
          key={dir}
          type="button"
          aria-label={dir === 'prev' ? 'Previous' : 'Next'}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + (dir === 'prev' ? -1 : 1) + items.length) % items.length);
          }}
          className={cn(
            'fixed top-1/2 grid h-16 w-16 -translate-y-1/2 place-items-center font-display text-3xl italic text-white/55 transition hover:scale-110 hover:text-white',
            dir === 'prev' ? 'left-4' : 'right-4',
          )}
        >
          {dir === 'prev' ? '←' : '→'}
        </button>
      ))}
      <figure className="relative flex max-h-full max-w-full items-center justify-center">
        <img src={cur.src} alt={cur.alt} className="max-h-[88vh] w-auto object-contain shadow-2xl" />
        <figcaption className="absolute -bottom-10 left-0 right-0 text-center font-mono text-2xs uppercase tracking-[0.18em] text-white/60">
          {cur.caption}
        </figcaption>
      </figure>
    </div>
  );
}
