import { useSwiperOptions, useSwiperSx } from './hooks';
import { TSwiperOptionsVariant } from './interfaces';

export const useVariantSwiper = (variant: TSwiperOptionsVariant) => {
  const swiperOptions = useSwiperOptions(variant);
  const sx = useSwiperSx(variant);
  return { sx, swiperOptions };
};
