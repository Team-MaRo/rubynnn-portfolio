import {useCallback, useSyncExternalStore} from 'react';

const STORAGE_KEY = 'rubynnn-portfolio:theme';

// sRGB-hex renderings of the `--bg` token for the mobile browser chrome
// (`<meta name="theme-color">`). The design is light-primary.
export const THEME_COLOR_LIGHT = '#f4f1ec';
export const THEME_COLOR_DARK = '#14130f';

export type Theme = 'light' | 'dark';

// Shared subscriber set so every useTheme consumer (nav toggle, cursor, …)
// re-renders together on a theme change.
const subscribers = new Set<() => void>();

function subscribe(callback: () => void) {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}

function getSnapshot(): Theme {
  if (typeof document === 'undefined') {
    return 'light';
  }
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getServerSnapshot(): Theme {
  return 'light';
}

function applyTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage may throw in private mode / sandboxed contexts; ignore.
  }
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme !== 'dark');
  const color = theme === 'dark' ? THEME_COLOR_DARK : THEME_COLOR_LIGHT;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    m.setAttribute('content', color);
  });
  subscribers.forEach((fn) => {
    fn();
  });
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = useCallback(() => {
    applyTheme(getSnapshot() === 'dark' ? 'light' : 'dark');
  }, []);
  const setTheme = useCallback((t: Theme) => {
    applyTheme(t);
  }, []);
  return {theme, toggle, setTheme};
}
