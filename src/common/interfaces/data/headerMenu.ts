export type TMenuItemName = 'aboutUs' | 'services' | 'portfolio' | 'contacts';

export interface IHeaderMenuItem {
  href: string;
}
export interface IHeaderMenu {
  data: Record<TMenuItemName, IHeaderMenuItem>;
  list: TMenuItemName[];
}
