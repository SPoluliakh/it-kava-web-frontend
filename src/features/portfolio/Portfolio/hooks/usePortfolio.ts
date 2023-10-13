import portfolioList from '@/data/portfolio-page.json';
import { IPortfolio } from '../interfaces';
import { useState } from 'react';

interface IReturn {
  portfolio: IPortfolio[];
  isShowBtn: boolean;
  handleLoadMore: () => void;
}

export const usePortfolio = (): IReturn => {
  const [portfolio, setPortfolio] = useState(portfolioList.slice(0, 8));
  const [isShowBtn, setIsShowBtn] = useState(true);

  const handleLoadMore = () => {
    const moreExamples = portfolioList.slice(8);
    setPortfolio(prev => [...prev, ...moreExamples]);
    setIsShowBtn(false);
  };
  return { portfolio, isShowBtn, handleLoadMore };
};
