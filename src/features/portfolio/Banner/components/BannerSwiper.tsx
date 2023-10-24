import { SwiperSlide } from 'swiper/react';
import { IBannerImg } from '../interface';
import { useVariantSwiper } from '@/common/hooks';
import { StyledImage, StyledSwiper } from '@/common/components/styled';

interface Props {
  bannerImg: IBannerImg[];
  isMobile?: boolean;
  isRotate?: boolean;
  isDesktop?: boolean;
}

export const BannerSwiper = ({ isMobile, isRotate, bannerImg, isDesktop }: Props) => {
  const { swiperOptions } = useVariantSwiper('portfolioBanner');

  return (
    <StyledSwiper
      {...swiperOptions}
      centeredSlides={!isMobile}
      sx={{ transform: isRotate ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      {bannerImg.map(it => (
        <SwiperSlide key={it.id}>
          <StyledImage
            src={it.src}
            alt="portfolio photo"
            width={isMobile && !isDesktop ? '258' : '352'}
            height={isMobile && !isDesktop ? '246' : '340'}
            sx={{
              transform: isRotate ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
