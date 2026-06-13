import {startTransition} from 'react';
import {hydrateRoot} from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import {HydratedRouter} from 'react-router/dom';
import {initClientI18n} from './i18n';

// Seed i18n with the language the server rendered (reflected into `<html lang>`)
// so the first client render matches the prerendered output — clean hydration.
const i18n = initClientI18n(document.documentElement.lang || undefined);

startTransition(() => {
  hydrateRoot(
    document,
    <I18nextProvider i18n={i18n}>
      <HydratedRouter />
    </I18nextProvider>,
  );
});
