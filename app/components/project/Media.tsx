import {useEffect, useRef, useState} from 'react';
import {cn} from '~/lib/cn';

declare global {
  interface Window {
    twttr?: {widgets?: {load: (el?: HTMLElement) => void}};
  }
}

// Load X/Twitter's widgets.js once, shared across every embed on the page.
let twitterScript: Promise<void> | null = null;
function loadTwitterWidgets(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }
  if (window.twttr?.widgets) {
    return Promise.resolve();
  }
  twitterScript ??= new Promise<void>((resolve) => {
    const s = document.createElement('script');
    s.src = 'https://platform.twitter.com/widgets.js';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => resolve(); // leave the no-JS <blockquote> fallback in place
    document.head.appendChild(s);
  });
  return twitterScript;
}

// 16:9 (or custom) YouTube embed. The iframe is plain HTML, so it works without
// our JS too; `loading="lazy"` defers it.
export function YouTube({id, title, ratio = 'aspect-video'}: {id: string; title: string; ratio?: string}) {
  return (
    <div className={cn('overflow-hidden rounded-sm border border-line bg-black', ratio)}>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

// YouTube embed wrapped in the dark media-player card (16:9 stage + a footer
// bar with an italic caption and a source tag). Matches the GifToggle card so
// videos and gifs read as one family. The bare `YouTube` embed above stays for
// pages that lay out their own captions.
export function VideoCard({id, title, tag}: {id: string; title: string; tag: string}) {
  return (
    <figure className="overflow-hidden rounded-sm bg-[#14130f] text-[#f0ece2]">
      <div className="relative aspect-video bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <span className="min-w-0 truncate font-display text-sm italic tracking-tight">{title}</span>
        <span className="shrink-0 font-mono text-2xs uppercase tracking-[0.12em] text-white/50">{tag}</span>
      </figcaption>
    </figure>
  );
}

// Local mp4 with poster + native controls. No autoplay (respects reduced motion
// and bandwidth); the poster shows until the user plays.
export function Video({src, poster, ratio = 'aspect-video', className}: {src: string; poster?: string; ratio?: string; className?: string}) {
  return (
    <video
      className={cn('w-full rounded-sm border border-line bg-black object-cover', ratio, className)}
      src={src}
      poster={poster}
      controls
      preload="metadata"
      playsInline
      muted
    />
  );
}

// Animated GIF in a dark player card: a 16:9 stage (letterboxed via
// object-contain) with a footer bar holding the caption and a labelled
// play/pause pill. Pausing snapshots the current frame to a canvas and hides
// the <img>; playing re-triggers the gif from its first frame. The surface is
// intentionally dark in both themes (a media card), matching the design.
export function GifToggle({src, alt, caption, width, height}: {src: string; alt: string; caption: string; width?: number; height?: number}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  const toggle = () => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) {
      return;
    }
    if (!paused) {
      canvas.width = img.naturalWidth || img.clientWidth;
      canvas.height = img.naturalHeight || img.clientHeight;
      canvas.getContext('2d')?.drawImage(img, 0, 0, canvas.width, canvas.height);
      setPaused(true);
    } else {
      // Re-trigger the gif from the start.
      const s = img.src;
      img.src = '';
      img.src = s;
      setPaused(false);
    }
  };

  return (
    <figure className="overflow-hidden rounded-sm bg-[#14130f] text-[#f0ece2]">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden">
        <img ref={imgRef} src={src} alt={alt} width={width} height={height} loading="lazy" className={cn('h-full w-full object-contain', paused && 'invisible absolute')} />
        <canvas ref={canvasRef} className={cn('h-full w-full object-contain', !paused && 'hidden')} aria-hidden />
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <span className="min-w-0 truncate font-display text-sm italic tracking-tight">{caption}</span>
        <button
          type="button"
          onClick={toggle}
          aria-label={paused ? 'Play' : 'Pause'}
          className="no-js:hidden inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f0ece2] px-3.5 py-1.5 font-mono text-2xs uppercase tracking-[0.12em] text-[#14130f] transition-colors"
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', paused ? 'bg-[oklch(0.85_0.05_70)]' : 'bg-accent')} />
          {paused ? 'Play' : 'Pause'}
        </button>
      </figcaption>
    </figure>
  );
}

// Embedded X (Twitter) post inside a theme-aware card with a "Social Spot"
// footer. Renders a native <blockquote class="twitter-tweet"> (a working link
// fallback without JS / if the widget is blocked), then widgets.js upgrades it
// to the rich embed. Note: this loads X's third-party script and shares the
// tweet id with X — an intentional embed, matching the design.
export function XEmbed({href, title, tag}: {href: string; title: string; tag: string}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    // Kick a render on mount too, so SPA navigations (script already loaded)
    // still upgrade the fresh <blockquote>.
    void loadTwitterWidgets().then(() => {
      if (!cancelled && ref.current) {
        window.twttr?.widgets?.load(ref.current);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <figure className="flex flex-col overflow-hidden rounded-sm border border-line bg-paper">
      <div
        ref={ref}
        className="flex min-h-[420px] items-center justify-center bg-bg p-2"
        // eslint-disable-next-line react/dom-no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{__html: `<blockquote class="twitter-tweet" data-theme="light" data-dnt="true"><a href="${href}">${title}</a></blockquote>`}}
      />
      <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
        <b className="min-w-0 truncate font-display text-sm font-normal italic tracking-tight text-fg">{title}</b>
        <span className="shrink-0">{tag}</span>
      </figcaption>
    </figure>
  );
}

// Device mockup frames. Wrap a screenshot image in a phone / tablet / browser
// bezel. `kind="web"` adds a fake browser chrome bar.
export function DeviceFrame({kind, src, alt}: {kind: 'phone' | 'tablet' | 'web'; src: string; alt: string}) {
  if (kind === 'web') {
    return (
      <div className="overflow-hidden rounded-lg border border-line bg-paper shadow-xl">
        <div className="flex items-center gap-1.5 border-b border-line bg-bg px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <img src={src} alt={alt} loading="lazy" className="w-full" />
      </div>
    );
  }
  return (
    <div className={cn('mx-auto overflow-hidden border-[6px] border-fg bg-fg shadow-xl', kind === 'phone' ? 'max-w-[260px] rounded-[2rem]' : 'max-w-[520px] rounded-[1.4rem]')}>
      <img src={src} alt={alt} loading="lazy" className="w-full" />
    </div>
  );
}
