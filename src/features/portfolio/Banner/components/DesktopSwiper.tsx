import { Box } from '@mui/material';
import { BannerSwiper } from './BannerSwiper';
import { useBannerImg } from '../hooks';
import { useMedia } from '@/common/hooks';
import { MobileSwiper } from './MobileSwiper';

export const DesktopSwiper = () => {
  const { portfolioBanner, rotatePortfolioBanner } = useBannerImg();
  const { isSmUp, isMdUp } = useMedia();
  return (
    <Box
      sx={{
        width: { sm: '400px', md: '720px' },
        pt: '104px',
        pb: { xs: '104px', sm: 0, md: '104px' },
        backgroundColor: 'primary.c900',
      }}
    >
      {isMdUp && (
        <>
          <Box sx={{ mb: '8px' }}>
            <BannerSwiper isMobile isDesktop bannerImg={portfolioBanner} />
          </Box>
          <BannerSwiper isRotate isDesktop bannerImg={rotatePortfolioBanner} />
        </>
      )}
      {isSmUp && !isMdUp && <MobileSwiper />}
    </Box>
  );
};
