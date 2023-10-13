import { Metadata } from 'next';
import { PortfolioFeature } from '@/features';
import { TLocale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export const metadata: Metadata = {
  title: 'Portfolio | ItKava',
  description: 'our projects',
};

export default async function PortfolioPage({ params: { lang } }: { params: { lang: TLocale } }) {
  const dictionary = await getDictionary.portfolio(lang);

  return <PortfolioFeature dictionary={dictionary} />;
}
