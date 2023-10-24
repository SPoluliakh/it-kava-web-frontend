import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { TLocale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { TProjectName } from '@/common/interfaces/data/portfolioItem/projectName';
import { PortfolioItemFeature } from '@/features/portfolio-item';

export const metadata: Metadata = {
  title: 'Portfolio Item | ItKava',
  description: 'our projects',
};

export default async function PortfolioItemPage({
  params: { lang, projectName },
}: {
  params: { lang: TLocale; projectName: TProjectName };
}) {
  try {
    const dictionary = await getDictionary.portfolioItem[projectName](lang);

    return <PortfolioItemFeature dictionary={dictionary} />;
  } catch {
    redirect('/not-found');
  }
}
