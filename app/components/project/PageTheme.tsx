// Scopes a per-page token override (e.g. Europa's warm/blue palette) to a
// wrapper class, in BOTH light and dark mode. Emits a tiny <style> block:
//   .page-<id> { --accent: …; … }
//   html.dark .page-<id> { … }
// Pages wrap their root in `page-<id>` and keep using the normal `bg-bg`,
// `text-accent`, … utilities, which now resolve to the override.
export type Tokens = Partial<{
  bg: string;
  paper: string;
  fg: string;
  muted: string;
  faint: string;
  line: string;
  accent: string;
  'accent-soft': string;
}>;

function toCss(tokens: Tokens): string {
  return Object.entries(tokens)
    .map(([k, v]) => `--${k}:${v};`)
    .join('');
}

export function PageTheme({id, light, dark}: {id: string; light: Tokens; dark?: Tokens}) {
  const css = `.page-${id}{${toCss(light)}}${dark ? `html.dark .page-${id}{${toCss(dark)}}` : ''}`;
  // eslint-disable-next-line react/dom-no-dangerously-set-innerhtml
  return <style dangerouslySetInnerHTML={{__html: css}} />;
}
