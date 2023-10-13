import { Metadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { TLocale } from '@/i18n-config';
import { AboutFeature } from '@/features';

export const metadata: Metadata = {
  title: 'About | ItKava',
  description: 'ITKava description',
};

export default async function AboutPage({ params: { lang } }: { params: { lang: TLocale } }) {
  const dictionary = await getDictionary.about(lang);
  return <AboutFeature dictionary={dictionary} />;
}
