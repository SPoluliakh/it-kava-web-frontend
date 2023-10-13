import { Box } from '@mui/material';
import { BannerSwiper } from './BannerSwiper';
import { useBannerImg } from '../hooks';

export const DesktopSwiper = () => {
  const { portfolioBanner, rotatePortfolioBanner } = useBannerImg();
  return (
    <Box
      sx={{
        width: '720px',
        py: '104px',
        backgroundColor: 'primary.c900',
      }}
    >
      <Box sx={{ mb: '8px' }}>
        <BannerSwiper isMobile isDesktop bannerImg={portfolioBanner} />
      </Box>
      <BannerSwiper isRotate bannerImg={rotatePortfolioBanner} />
    </Box>
  );
};
