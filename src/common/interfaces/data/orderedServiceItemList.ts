import { FC } from 'react';

export type TOrderedServiceItemName = 'name1' | 'name2' | 'name3' | 'name4' | 'name5';

export interface IOrderedServiceItem {
  Icon: FC;
}
export interface IOrderedServiceItemList {
  data: Record<TOrderedServiceItemName, IOrderedServiceItem>;
  list: TOrderedServiceItemName[];
}
