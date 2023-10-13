export type TMenuItemName = 'aboutUs' | 'services' | 'portfolio' | 'projects' | 'contacts';

export interface IHeaderMenuItem {
  href: string;
}
export interface IHeaderMenu {
  data: Record<TMenuItemName, IHeaderMenuItem>;
  list: TMenuItemName[];
}
