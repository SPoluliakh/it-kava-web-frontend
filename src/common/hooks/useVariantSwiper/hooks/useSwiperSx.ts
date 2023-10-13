import { TSwiperOptionsVariant } from '../interfaces';
import { Theme, useTheme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

const portfolio = (theme: Theme): SystemStyleObject<Theme> => ({
  '--swiper-pagination-bottom': 0,
  '--swiper-pagination-bullet-size': '16px',
  ['&.swiper']: {
    width: { xs: '100%', sm: '648px' },
    height: { xs: '280px', sm: '432px' },
    pr: { xs: 0, sm: 6, md: 8, lg: '128px' },
    pb: { xs: 6, sm: 0 },
  },
  ['& .swiper-wrapper']: {
    width: '100%!important',
    height: { xs: '100%!important', sm: 'auto' },
  },
  ['& .swiper-slide']: {
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 'calc((100% - 24px) / 2)!important',
    },
  },
  ['& .swiper-pagination']: {
    display: 'flex',
    flexDirection: { sm: 'column' },
    justifyContent: 'center',
  },
  ['& .swiper-button-next:after, & .swiper-button-prev:after']: {
    content: 'none',
  },
});
const portfolioBanner: SystemStyleObject<Theme> = {};

export const useSwiperSx = (variant: TSwiperOptionsVariant) => {
  const theme = useTheme();
  const variants: Record<TSwiperOptionsVariant, SystemStyleObject<Theme>> = {
    portfolio: portfolio(theme),
    portfolioBanner,
  };
  return variants[variant];
};
