import {useTranslation} from 'react-i18next';
import {asset} from '~/lib/asset';
import {cn} from '~/lib/cn';

// Creative-Commons badge for the photos/illustrations (CC BY-NC-ND 4.0). The
// code is MIT; only the media in app/media/uploads + app/media/assets is CC. Icons
// are vendored under app/media/cc/ so there's no external request.
const ICONS = ['cc', 'by', 'nc', 'nd'] as const;

export function LicenseBadge({className}: {className?: string}) {
  const {t} = useTranslation();
  return (
    <a
      href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      rel="license noopener noreferrer"
      target="_blank"
      className={cn('inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.12em] text-muted transition-colors hover:text-fg', className)}
    >
      <span className="normal-case tracking-normal">
        {t('footer.license_prefix')}: {t('footer.license_text')} CC BY-NC-ND 4.0
      </span>
      <span className="inline-flex items-center gap-0.5">
        {ICONS.map((i) => (
          <img key={i} src={asset(`cc/${i}.svg`)} alt="" aria-hidden className="h-[1em] w-[1em] dark:invert" />
        ))}
      </span>
    </a>
  );
}
