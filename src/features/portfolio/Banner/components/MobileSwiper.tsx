import { Box } from '@mui/material';
import { BannerSwiper } from './BannerSwiper';
import { useBannerImg } from '../hooks';

export const MobileSwiper = () => {
  const { portfolioBanner, rotatePortfolioBanner } = useBannerImg();
  return (
    <>
      <Box
        sx={{
          width: '400px',
        }}
      >
        <Box sx={{ mb: '8px' }}>
          <BannerSwiper bannerImg={rotatePortfolioBanner} isMobile isRotate />
        </Box>
        <BannerSwiper bannerImg={portfolioBanner} isMobile />
      </Box>
    </>
  );
};
