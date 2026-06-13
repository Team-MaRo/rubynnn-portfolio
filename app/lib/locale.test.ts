import {describe, expect, it} from 'vitest';
import {localePath, pick} from './locale';

describe('pick', () => {
  it('selects the value for the active locale', () => {
    expect(pick({de: 'Hallo', en: 'Hello'}, 'de')).toBe('Hallo');
    expect(pick({de: 'Hallo', en: 'Hello'}, 'en')).toBe('Hello');
  });
});

describe('localePath', () => {
  it('returns the locale home for an empty slug', () => {
    expect(localePath('de')).toBe('/de');
    expect(localePath('en', '')).toBe('/en');
  });
  it('prefixes the locale and trims slashes', () => {
    expect(localePath('en', 'fotos/europa')).toBe('/en/fotos/europa');
    expect(localePath('de', '/graphic/hochzeit/')).toBe('/de/graphic/hochzeit');
  });
});
