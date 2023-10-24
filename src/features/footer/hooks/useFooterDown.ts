import footerLinksData from '@/data/footer-down.json';
import { IFooterDown } from '@/common/interfaces';
import { ICommonDictionary } from '@/common/interfaces/data/locale';

const footerLinksMenu = footerLinksData as IFooterDown;

export const useFooterDown = (dictionary: ICommonDictionary['footer']['down']) =>
  footerLinksMenu.list.map(it => ({ ...footerLinksMenu.data[it], name: dictionary[it] }));
