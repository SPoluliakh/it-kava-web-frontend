import simpleSliderData from '@/data/portfolio-item/simple-slider.json';
import { TSimpleSlider } from '@/common/interfaces/data/portfolioItem/simpleSlider';
import { TProjectName } from '@/common/interfaces/data/portfolioItem/projectName';
import { useParams } from 'next/navigation';

const screenshotList = simpleSliderData as TSimpleSlider;
export const useScreenshotList = () => {
  const { projectName } = useParams();
  return screenshotList[projectName as TProjectName].map(
    it => `/images/portfolioItem/${projectName}/slider/${it}`
  );
};
