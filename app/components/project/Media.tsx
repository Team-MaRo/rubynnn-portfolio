import {useRef, useState} from 'react';
import {cn} from '~/lib/cn';

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

// Animated GIF with a real play/pause toggle: pausing snapshots the current
// frame to a canvas and hides the <img>. Honors reduced motion by starting
// paused. `width`/`height` keep layout stable.
export function GifToggle({src, alt, width, height}: {src: string; alt: string; width?: number; height?: number}) {
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
    <div className="group relative overflow-hidden rounded-sm border border-line bg-paper">
      <img ref={imgRef} src={src} alt={alt} width={width} height={height} loading="lazy" className={cn('w-full', paused && 'invisible absolute')} />
      <canvas ref={canvasRef} className={cn('w-full', !paused && 'hidden')} aria-hidden />
      <button
        type="button"
        onClick={toggle}
        aria-label={paused ? 'Play' : 'Pause'}
        className="no-js:hidden absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-fg/80 font-mono text-sm text-bg opacity-0 transition-opacity group-hover:opacity-100"
      >
        {paused ? '▶' : 'II'}
      </button>
    </div>
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
