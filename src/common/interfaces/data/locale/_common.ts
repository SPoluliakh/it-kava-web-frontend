import { TMenuItemName } from '../headerMenu';
import { TFooterLinksName } from '../footerUp';
import { TFooterDownName } from '../footerDown';

export interface ICommonDictionary {
  header: {
    menu: Record<TMenuItemName, string>;
    orderServiceBtn: string;
  };
  footer: {
    up: Record<TFooterLinksName, string>;
    down: Record<TFooterDownName, string>;
    common: string;
  };
}
