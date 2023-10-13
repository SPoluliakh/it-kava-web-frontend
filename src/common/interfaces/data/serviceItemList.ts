export type TServiceItemName = 'seo' | 'management' | 'development' | 'design';

export interface IServiceItem {
  href: string;
}
export interface IServiceItemList {
  data: Record<TServiceItemName, IServiceItem>;
  list: TServiceItemName[];
}
