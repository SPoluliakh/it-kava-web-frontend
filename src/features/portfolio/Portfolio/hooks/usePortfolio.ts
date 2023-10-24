import { useEffect, useState } from 'react';
import portfolioList0 from '@/data/portfolio-page0.json';
import portfolioList1 from '@/data/portfolio-page1.json';
import portfolioList2 from '@/data/portfolio-page2.json';
import portfolioList3 from '@/data/portfolio-page3.json';
import { IPortfolio } from '../interfaces';

interface IReturn {
  portfolio: IPortfolio[];
  isShowBtn: boolean;
  handleLoadMore: () => void;
}

const portfolioVariant = [portfolioList0, portfolioList1, portfolioList2, portfolioList3];

export const usePortfolio = (value: number): IReturn => {
  const [portfolio, setPortfolio] = useState<IPortfolio[]>(portfolioVariant[value].slice(0, 8));
  const [isShowBtn, setIsShowBtn] = useState(true);

  useEffect(() => {
    setPortfolio(portfolioVariant[value].slice(0, 8));
    setIsShowBtn(true);
  }, [value]);

  const handleLoadMore = () => {
    const moreExamples = portfolioVariant[value].slice(8);
    setPortfolio(prev => [...prev, ...moreExamples]);
    setIsShowBtn(false);
  };
  return { portfolio, isShowBtn, handleLoadMore };
};
