export type TFooterDownName = 'PrivacyPolicy' | 'TermsOfService' | 'CookiesSettings';

export interface IFooterDownItem {
  href: string;
}
export interface IFooterDown {
  data: Record<TFooterDownName, IFooterDownItem>;
  list: TFooterDownName[];
}
