import { IHomeDictionary } from '@/common/interfaces/data/locale';
import serviceItemListData from '@/data/service-item-list.json';
import { IServiceItemList } from '@/common/interfaces/data';

const serviceItemList = serviceItemListData as IServiceItemList;
type TDictionary = IHomeDictionary['services']['serviceItemList'];
export const useServiceItemList = (dictionary: TDictionary) =>
  serviceItemList.list.map(it => ({
    ...serviceItemList.data[it],
    name: dictionary[it],
  }));
