import { getDictionary } from '@/get-dictionary';
import { TLocale } from '@/i18n-config';
import { NotFoundFeature } from '@/features';

export default async function NotFoundPage({ params: { lang } }: { params: { lang: TLocale } }) {
  const dictionary = await getDictionary.notFound(lang);

  return <NotFoundFeature dictionary={dictionary} />;
}
