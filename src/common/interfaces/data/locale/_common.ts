import { TMenuItemName } from '../headerMenu';

export interface ICommonDictionary {
  header: {
    menu: Record<TMenuItemName, string>;
    orderServiceBtn: string;
  };
  footer: object;
}
