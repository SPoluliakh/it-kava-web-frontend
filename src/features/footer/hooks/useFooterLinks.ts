import footerLinksData from '@/data/footer-up.json';
import { IFooterLinks } from '@/common/interfaces';
import { ICommonDictionary } from '@/common/interfaces/data/locale';

const footerLinksMenu = footerLinksData as IFooterLinks;

export const useFooterLinks = (dictionary: ICommonDictionary['footer']['up']) =>
  footerLinksMenu.list.map(it => ({ ...footerLinksMenu.data[it], name: dictionary[it] }));
