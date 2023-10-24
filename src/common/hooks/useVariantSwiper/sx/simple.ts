import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

export const simple = (theme: Theme): SystemStyleObject<Theme> => ({
  '--swiper-pagination-bottom': 0,
  '--swiper-pagination-bullet-size': '16px',
  ['&.swiper']: {
    width: { xs: '100%' },
    height: { xs: '288px', xs1: '772px' },
    pb: 9,
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
    position: 'static',
    bottom: 0,
    transform: 'none!important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto!important',
    height: '32px',
    '& .swiper-pagination-bullet': {
      display: 'none',
      left: 'auto!important',
      '&-active-main, &-active-prev, &-active-next': {
        display: 'block',
        transition: 'none!important',
      },
    },
  },
  ['& .swiper-button-prev, & .swiper-button-next']: {
    '&::after': {
      content: 'none',
    },
    position: 'static',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
    mt: 0,
    transform: 'none',
  },
});
