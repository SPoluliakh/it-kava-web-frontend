import { Metadata } from 'next';
import { HomeFeature } from '@/features';
import { TLocale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export const metadata: Metadata = {
  title: 'Home | ItKava',
  description: 'ITKava description',
};

export default async function IndexLangPage({ params: { lang } }: { params: { lang: TLocale } }) {
  const dictionary = await getDictionary.home(lang);
  return <HomeFeature dictionary={dictionary} />;
}
