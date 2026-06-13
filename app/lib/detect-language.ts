import type {Lang} from '~/i18n-config';
import {FALLBACK_LNG, isLang, LANG_COOKIE} from '~/i18n-config';

// Server-side language detection. The URL path is authoritative: every real
// page lives under `/de/...` or `/en/...`, so the first path segment decides the
// render language (and prerender bakes the right language into each static
// file). Cookie / Accept-Language only matter for the bare `/` redirect shell.
export function detectLanguage(request: Request): Lang {
  const seg = new URL(request.url).pathname.split('/').filter(Boolean)[0];
  if (isLang(seg)) {
    return seg;
  }

  const fromCookie = readCookie(request.headers.get('Cookie'), LANG_COOKIE);
  if (isLang(fromCookie)) {
    return fromCookie;
  }

  const accept = request.headers.get('Accept-Language') ?? '';
  for (const part of accept.split(',')) {
    const tag = part.split(';')[0]?.trim().slice(0, 2).toLowerCase();
    if (isLang(tag)) {
      return tag;
    }
  }

  return FALLBACK_LNG;
}

function readCookie(header: string | null, name: string): string | undefined {
  if (header == null) {
    return undefined;
  }
  for (const pair of header.split(';')) {
    const idx = pair.indexOf('=');
    if (idx === -1) {
      continue;
    }
    if (pair.slice(0, idx).trim() === name) {
      return decodeURIComponent(pair.slice(idx + 1).trim());
    }
  }
  return undefined;
}
