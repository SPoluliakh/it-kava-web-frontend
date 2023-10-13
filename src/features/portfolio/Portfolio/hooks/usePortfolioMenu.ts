import portfolioMenuData from '@/data/portfolio-menu.json';
import { IPortfolioMenu } from '@/common/interfaces';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';

const portfolioMenu = portfolioMenuData as IPortfolioMenu;

export const usePortfolioMenu = (dictionary: IPortfolioDictionary['portfolio']) =>
  portfolioMenu.list.map(it => ({
    ...portfolioMenu.data[it],
    name: dictionary['navigation'][it],
  }));
