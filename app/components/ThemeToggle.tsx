import {useTranslation} from 'react-i18next';
import {useTheme} from '~/hooks/useTheme';
import {cn} from '~/lib/cn';

// Light/dark switch. Hidden when JS is unavailable (no meaningful no-JS state —
// the theme is fixed at the bootstrap default). `variant="pill"` is the in-menu
// labelled control; `variant="icon"` is the compact nav button.
export function ThemeToggle({variant = 'icon'}: {variant?: 'icon' | 'pill'}) {
  const {theme, toggle} = useTheme();
  const {t} = useTranslation();
  const label = theme === 'dark' ? t('menu.theme_dark') : t('menu.theme_light');

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={t('menu.toggle_theme')}
        className="no-js:hidden inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-fg"
      >
        <span className="relative inline-flex h-6 w-11 items-center rounded-full border border-line bg-paper">
          <span
            className={cn(
              'absolute grid h-5 w-5 place-items-center rounded-full bg-fg text-bg transition-transform',
              theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5',
            )}
          >
            {theme === 'dark' ? '☾' : '☀'}
          </span>
        </span>
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('menu.toggle_theme')}
      data-cursor="theme"
      className="no-js:hidden grid h-8 w-8 place-items-center rounded-full text-base text-fg transition-colors hover:text-accent"
    >
      {theme === 'dark' ? '☾' : '☀'}
    </button>
  );
}
