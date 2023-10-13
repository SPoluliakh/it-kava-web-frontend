import headerMenuData from '@/data/header-menu.json';
import { IHeaderMenu } from '@/common/interfaces';
import { ICommonDictionary } from '@/common/interfaces/data/locale';

const headerMenu = headerMenuData as IHeaderMenu;

export const useDeskMenu = (dictionary: ICommonDictionary['header']['menu']) =>
  headerMenu.list.map(it => ({ ...headerMenu.data[it], name: dictionary[it] }));
