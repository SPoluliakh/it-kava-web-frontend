import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';
import tableListData from '@/data/portfolio-item/detail-table-list.json';
import { TDetailTableItemName } from '@/common/interfaces/data/portfolioItem/detail';

const tableList = tableListData as TDetailTableItemName[];

export const useDetailTable = (dictionary: IPortfolioItemDictionary['detail']['table']) =>
  tableList.map(it => dictionary[it]);
