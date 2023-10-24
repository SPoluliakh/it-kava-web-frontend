import { SwiperSlide } from 'swiper/react';
import { Box, Container, Stack } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SwiperNavBtn } from '@/common/components';
import { StyledSwiper } from '@/common/components/styled';
import { useScreenshotList } from './hooks/useScreenshotList';
import { useVariantSwiper } from '@/common/hooks';
import { SlideImage } from '@/features/portfolio-item/SimpleSlider/components/SlideImage';

export const SimpleSlider = () => {
  const { sx: style, swiperOptions } = useVariantSwiper('simple');
  const screenshotList = useScreenshotList();
  return (
    <Box>
      <Container>
        {screenshotList.length !== 1 ? (
          <StyledSwiper sx={{ ...style }} {...swiperOptions}>
            {screenshotList.map((it, i) => (
              <SwiperSlide key={i}>
                <SlideImage src={it} />
              </SwiperSlide>
            ))}
            <Stack
              direction="row"
              gap={3}
              sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
            >
              <SwiperNavBtn variant="next">
                <IoIosArrowBack />
              </SwiperNavBtn>
              <Box className="swiper-pagination"></Box>
              <SwiperNavBtn variant="prev">
                <IoIosArrowForward />
              </SwiperNavBtn>
            </Stack>
          </StyledSwiper>
        ) : (
          <SlideImage src={screenshotList[0]} />
        )}
      </Container>
    </Box>
  );
};
