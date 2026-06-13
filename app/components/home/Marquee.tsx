// Infinite italic marquee. The track is duplicated and translated -50% so the
// loop is seamless. Frozen by the reduced-motion blanket (shows a static row).
function Row({words}: {words: string[]}) {
  return (
    <span className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-3xl font-light italic md:text-5xl">{w}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ))}
    </span>
  );
}

export function Marquee({text}: {text: string}) {
  const words = text.split(' · ');
  return (
    <div className="overflow-hidden border-y border-line py-6">
      <div className="flex w-max animate-marquee">
        <Row words={words} />
        <Row words={words} />
      </div>
    </div>
  );
}
