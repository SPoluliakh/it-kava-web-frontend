export type TFooterLinksName = 'linkOne' | 'linkTwo' | 'linkThree' | 'linkFour';

export interface IFooterLinksItem {
  href: string;
}
export interface IFooterLinks {
  data: Record<TFooterLinksName, IFooterLinksItem>;
  list: TFooterLinksName[];
}
