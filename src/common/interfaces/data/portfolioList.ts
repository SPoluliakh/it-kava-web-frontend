export type TPortfolioItemName = 'project1' | 'project2' | 'project3' | 'project4' | 'project5';

export interface IPortfolioListItem {
  href: string;
  logoUrl: string;
  bgUrl: string;
}
export interface IPortfolioList {
  data: Record<TPortfolioItemName, IPortfolioListItem>;
  list: TPortfolioItemName[];
}
