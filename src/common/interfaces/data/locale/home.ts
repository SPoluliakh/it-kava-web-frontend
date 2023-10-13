import { TPortfolioItemName, TServiceItemName } from '@/common/interfaces';

export interface IHomeDictionary {
  banner: {
    title: string;
    subtitle: string;
    text: string;
    orderServiceBtn: string;
  };
  services: {
    title: string;
    subtitle: string;
    text: string;
    serviceItemList: Record<TServiceItemName, string>;
  };
  advantages: {
    title: string;
    subtitle: string;
    text: string;
    advantageTextList: string[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    text: string;
    moreDetails: string;
    projectList: Record<TPortfolioItemName, string>;
  };
  reviews: {
    title: string;
    text: string;
    author: {
      name: string;
      surname: string;
      position: string;
      company: string;
    };
  };
  aboutUs: {
    title: string;
    subtitle: string;
    text: string[];
    logo: string;
  };
}
