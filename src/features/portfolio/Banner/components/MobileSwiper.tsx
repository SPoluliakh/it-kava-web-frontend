import { Box } from '@mui/material';
import { BannerSwiper } from './BannerSwiper';
import { useBannerImg } from '../hooks';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';
import { OrderButton } from '@/common/components/OrderButton/OrderButton';

interface Props {
  dictionary: IPortfolioDictionary['banner'];
}

export const MobileSwiper = ({ dictionary }: Props) => {
  const { portfolioBanner } = useBannerImg();
  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <BannerSwiper bannerImg={portfolioBanner} isMobile />
      </Box>
      <OrderButton dictionary={dictionary} />
    </>
  );
};
