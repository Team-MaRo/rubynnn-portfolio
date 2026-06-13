import {describe, expect, it} from 'vitest';
import {allPaths, LOCALES, PAGES} from './routes-manifest';

describe('allPaths', () => {
  const paths = allPaths();

  it('includes the root redirect and each locale home', () => {
    expect(paths).toContain('/');
    for (const l of LOCALES) {
      expect(paths).toContain(`/${l}`);
    }
  });

  it('covers every page under every locale', () => {
    for (const l of LOCALES) {
      for (const p of PAGES) {
        expect(paths).toContain(`/${l}/${p.slug}`);
      }
    }
  });

  it('emits exactly root + locales × (home + pages), with no duplicates', () => {
    expect(paths.length).toBe(1 + LOCALES.length * (1 + PAGES.length));
    expect(new Set(paths).size).toBe(paths.length);
  });
});
