import portfolioListData from '@/data/portfolio-list.json';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { IPortfolioList } from '@/common/interfaces/data/portfolioList';

const portfolioList = portfolioListData as IPortfolioList;

export const usePortfolioList = (dictionary: IHomeDictionary['portfolio']['projectList']) =>
  portfolioList.list.map(it => ({ ...portfolioList.data[it], name: dictionary[it] }));
