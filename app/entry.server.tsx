import type {EntryContext, RouterContextProvider} from 'react-router';
import {isbot} from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {I18nextProvider} from 'react-i18next';
import {ServerRouter} from 'react-router';
import {createServerI18n} from './i18n.server';
import {detectLanguage} from './lib/detect-language';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: RouterContextProvider,
) {
  let shellRendered = false;
  const userAgent = request.headers.get('user-agent');

  // Language resolved from the URL path (see detect-language.ts) and reflected
  // into `<html lang>` (root.tsx), which the client reads back to hydrate.
  const i18n = await createServerI18n(detectLanguage(request));

  const body = await renderToReadableStream(
    <I18nextProvider i18n={i18n}>
      <ServerRouter context={routerContext} url={request.url} />
    </I18nextProvider>,
    {
      onError(error: unknown) {
        responseStatusCode = 500;
        if (shellRendered) {
          console.error(error);
        }
      },
    },
  );
  shellRendered = true;

  if ((userAgent != null && isbot(userAgent)) || routerContext.isSpaMode) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
