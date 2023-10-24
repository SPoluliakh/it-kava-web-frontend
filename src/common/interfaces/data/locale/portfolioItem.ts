import { ITextBannerDictionary } from '@/common/sections/TextBanner/interfaces';
import { IDetailTableItem, TDetailTableItemName } from '../portfolioItem/detail';

export interface IPortfolioItemDictionary {
  banner: ITextBannerDictionary;
  detail: {
    title: string;
    subtitle: string;
    texts: string[];
    table: Record<TDetailTableItemName, IDetailTableItem>;
  };
  anotherPortfolio: {
    title: string;
    subtitle: string;
    text: string;
    project: {
      name: string;
      description: string;
      tag: string;
    };
    button: string;
  };
}
