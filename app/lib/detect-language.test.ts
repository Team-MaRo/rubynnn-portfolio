import {describe, expect, it} from 'vitest';
import {detectLanguage} from './detect-language';

const req = (url: string, headers?: Record<string, string>) => new Request(url, {headers});

describe('detectLanguage', () => {
  it('reads the locale from the first path segment', () => {
    expect(detectLanguage(req('https://x.test/de/fotos/europa'))).toBe('de');
    expect(detectLanguage(req('https://x.test/en'))).toBe('en');
  });

  it('falls back to the lng cookie on the bare root', () => {
    expect(detectLanguage(req('https://x.test/', {Cookie: 'lng=en'}))).toBe('en');
  });

  it('falls back to Accept-Language', () => {
    expect(detectLanguage(req('https://x.test/', {'Accept-Language': 'en-US,en;q=0.9'}))).toBe('en');
  });

  it('defaults to de', () => {
    expect(detectLanguage(req('https://x.test/'))).toBe('de');
  });

  it('ignores an unsupported path segment', () => {
    expect(detectLanguage(req('https://x.test/fr/foo'))).toBe('de');
  });
});
