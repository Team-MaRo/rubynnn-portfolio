import {createContext, createRequestHandler, RouterContextProvider} from 'react-router';

// v8 middleware flag is on (react-router.config.ts), so createRequestHandler
// expects a RouterContextProvider. Cloudflare bindings are exposed through a
// typed context key for routes/middleware that need them.
export const cloudflareContext = createContext<{
  env: Env;
  ctx: ExecutionContext;
}>();

const requestHandler = createRequestHandler(
  () => import('virtual:react-router/server-build'),
  import.meta.env.MODE,
);

export default {
  async fetch(request, env, ctx) {
    const context = new RouterContextProvider();
    context.set(cloudflareContext, {env, ctx});
    return requestHandler(request, context);
  },
} satisfies ExportedHandler<Env>;
