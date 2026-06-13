// Resolve a media path to its hashed, build-pipeline URL. All media lives under
// `app/media/**` and is imported via `import.meta.glob` (query '?url'), so every
// image/video/icon is fingerprinted and emitted by the build — there is no
// `public/` folder. Content modules keep their plain relative paths
// (e.g. 'uploads/Europa/x.jpg', 'assets/icons/y.png', 'cc/by.svg'); this maps
// them to the resolved URL.
const modules = import.meta.glob('../media/**/*.{jpg,jpeg,png,gif,svg,webp,avif,mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Key every URL by its path relative to `app/media/` (the part after '/media/').
const byPath: Record<string, string> = {};
for (const key in modules) {
  const i = key.indexOf('/media/');
  const url = modules[key];
  if (i !== -1 && url !== undefined) {
    byPath[key.slice(i + '/media/'.length)] = url;
  }
}

export function asset(path: string): string {
  const p = path.replace(/^\/+/, '');
  const url = byPath[p];
  if (url === undefined && import.meta.env.DEV) {
    console.warn(`[asset] no build asset for "${p}" — check app/media/`);
  }
  return url ?? `${import.meta.env.BASE_URL}${p}`;
}
