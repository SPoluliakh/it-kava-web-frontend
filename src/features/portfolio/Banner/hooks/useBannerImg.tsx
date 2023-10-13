import portfolioBanner from '@/data/portfolio-banner.json';
import { IBannerImg } from '../interface';

interface IPortfolioBanner {
  portfolioBanner: IBannerImg[];
  rotatePortfolioBanner: IBannerImg[];
}

export const useBannerImg = (): IPortfolioBanner => {
  const rotatePortfolioBanner = portfolioBanner.slice().reverse();
  return { portfolioBanner, rotatePortfolioBanner };
};
