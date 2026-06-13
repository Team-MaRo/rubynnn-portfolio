import {EditorialPhoto} from '~/components/project/EditorialPhoto';
import {asien} from '~/content/projects/asien';
import {useLocale} from '~/hooks/useLocale';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: pick(asien.pageTitle, 'de')}];
}

export default function Page() {
  const locale = useLocale();
  return <EditorialPhoto content={asien} locale={locale} />;
}
