import {
  Autoplay,
  Grid,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
  Controller,
} from 'swiper';
import { useMedia } from '@/common/hooks';
import { Theme } from '@mui/material';
import { TSwiperOptionsVariant } from '../interfaces';

type TGetSwiperOptions = (theme: Theme) => SwiperOptions;

const portfolio: TGetSwiperOptions = theme => ({
  modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay, Grid],
  grid: { rows: 2 },
  slidesPerView: 1,
  slidesPerGroup: 1,
  cssMode: true,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 400000,
    disableOnInteraction: false,
  },
  spaceBetween: 24,
  breakpoints: {
    [`${theme.breakpoints.values.sm}`]: {
      direction: 'vertical',
      grid: { rows: 1 },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
  },
  navigation: {
    prevEl: '.swiper-button-next',
    nextEl: '.swiper-button-prev',
  },
});

const portfolioBanner: TGetSwiperOptions = theme => ({
  modules: [Autoplay, Controller],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    [`${theme.breakpoints.values.sm}`]: {
      slidesPerView: 1.5,
      spaceBetween: 1,
      slidesPerGroup: 1,
    },
    [`${theme.breakpoints.values.md}`]: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
  },
});

const simple: TGetSwiperOptions = () => ({
  modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay],
  slidesPerView: 1,
  slidesPerGroup: 1,
  cssMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  autoplay: {
    delay: 400000,
    disableOnInteraction: false,
  },
  spaceBetween: 24,
  navigation: {
    prevEl: '.swiper-button-next',
    nextEl: '.swiper-button-prev',
  },
});

const variants: Record<TSwiperOptionsVariant, TGetSwiperOptions> = {
  portfolio,
  portfolioBanner,
  simple,
};

export const useSwiperOptions = (variant: TSwiperOptionsVariant) => {
  const { theme } = useMedia();
  const variantOptions = variants[variant](theme);
  const swiperOptions: SwiperOptions = {
    direction: 'horizontal',
    ...variantOptions,
  };
  return swiperOptions;
};
