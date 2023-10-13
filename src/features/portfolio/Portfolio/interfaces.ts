export interface IPortfolio {
  id: number;
  image: string;
  logo: string;
  title: string;
  text: {
    ua: string;
    en: string;
  };
}

export type lang = 'en' | 'ua';

export interface IPortfolioMenu {
  name: string;
  href: string;
}
