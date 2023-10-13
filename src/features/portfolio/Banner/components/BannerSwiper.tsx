import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from '@mui/material';
import { IBannerImg } from '../interface';
import { useVariantSwiper } from '@/common/hooks';

interface Props {
  bannerImg: IBannerImg[];
  isMobile?: boolean;
  isRotate?: boolean;
  isDesktop?: boolean;
}

const StyledSwiper = styled(Swiper)``;
const StyledImg = styled(Image)``;

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
          <StyledImg
            src={it.src}
            alt="portfolio photo"
            width={isMobile && !isDesktop ? '204' : '352'}
            height={isMobile && !isDesktop ? '196' : '340'}
            sx={{
              transform: isRotate ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
