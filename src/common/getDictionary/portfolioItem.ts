import { TLocale } from '@/i18n-config';
import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';

type TPortfolioItem = Record<TLocale, () => Promise<IPortfolioItemDictionary>>;

const project1: TPortfolioItem = {
  en: () => import('@/data/locale/portfolio-item/project1/en.json').then(module => module.default),
  ua: () => import('@/data/locale/portfolio-item/project1/ua.json').then(module => module.default),
};

export const portfolioItem = {
  project1: async (locale: TLocale) => project1[locale](),
};
