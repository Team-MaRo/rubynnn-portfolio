import type {Route} from './+types/europa';
import {EditorialPhoto} from '~/components/project/EditorialPhoto';
import {europa} from '~/content/projects/europa';
import {useLocale} from '~/hooks/useLocale';
import {isLang} from '~/i18n-config';

export function meta({params}: Route.MetaArgs) {
  const locale = isLang(params.locale) ? params.locale : 'de';
  return [{title: europa.pageTitle[locale]}];
}

export default function EuropaRoute() {
  return <EditorialPhoto content={europa} locale={useLocale()} />;
}
