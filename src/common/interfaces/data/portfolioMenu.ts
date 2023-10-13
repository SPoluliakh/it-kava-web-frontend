export type TPortfolioMenuItemName =
  | 'Single page sites'
  | 'Corporate sites'
  | 'Internet stores'
  | 'Web applications';

export interface IPortfolioMenuItem {
  href: string;
}
export interface IPortfolioMenu {
  data: Record<TPortfolioMenuItemName, IPortfolioMenuItem>;
  list: TPortfolioMenuItemName[];
}
