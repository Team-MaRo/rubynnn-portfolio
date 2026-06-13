import {Link, useLocation} from 'react-router';
import {SUPPORTED_LNGS} from '~/i18n-config';
import {cn} from '~/lib/cn';

// DE/EN toggle. Each option is a plain <Link> to the same page under the other
// locale (first path segment swapped), so switching works with JS disabled —
// the target page is prerendered. `current` comes from the route param.
export function LangToggle({current}: {current: string}) {
  const {pathname, hash} = useLocation();
  const base = import.meta.env.BASE_URL; // ends with '/'

  function urlFor(lng: string) {
    // Strip the Vite base, swap the leading locale segment, re-add base.
    const rel = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
    const segs = rel.split('/');
    segs[0] = lng;
    return `${base}${segs.join('/')}${hash}`;
  }

  return (
    <div className="flex items-center gap-1 font-mono text-2xs uppercase tracking-[0.1em]">
      {SUPPORTED_LNGS.map((lng) => (
        <Link
          key={lng}
          to={urlFor(lng)}
          aria-current={lng === current ? 'true' : undefined}
          className={cn(
            'rounded px-1.5 py-0.5 transition-colors',
            lng === current ? 'text-fg' : 'text-faint hover:text-fg',
          )}
        >
          {lng}
        </Link>
      ))}
    </div>
  );
}
