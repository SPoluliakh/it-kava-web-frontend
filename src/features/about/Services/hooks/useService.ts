import { IOrderedServiceItemList } from '@/common/interfaces';
import { IAboutDictionary } from '@/common/interfaces/data/locale';
import { CubeItemIcon } from '@/common/icons';

const service: IOrderedServiceItemList = {
  data: {
    name1: {
      Icon: CubeItemIcon,
    },
    name2: {
      Icon: CubeItemIcon,
    },
    name3: {
      Icon: CubeItemIcon,
    },
    name4: {
      Icon: CubeItemIcon,
    },
    name5: {
      Icon: CubeItemIcon,
    },
  },
  list: ['name1', 'name2', 'name3', 'name4', 'name5'],
};

export const useService = (dictionaryList: IAboutDictionary['services']['list']) =>
  service.list.map(it => ({ ...service.data[it], ...dictionaryList[it] }));
