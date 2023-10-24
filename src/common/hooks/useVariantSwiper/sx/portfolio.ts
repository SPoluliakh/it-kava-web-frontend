import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

export const portfolio = (theme: Theme): SystemStyleObject<Theme> => ({
  '--swiper-pagination-bottom': 0,
  '--swiper-pagination-bullet-size': '16px',
  ['&.swiper']: {
    width: { xs: '100%', sm: '648px' },
    height: { xs: '280px', xs1: '432px' },
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
  ['& .swiper-button-prev, & .swiper-button-next']: {
    '&::after': {
      content: 'none',
    },
    top: '50%',
    right: 0,
    bottom: 'auto',
    left: 'auto',
    mt: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '& .swiper-button-prev': {
    transform: 'translateY(calc(-100% - 56px))',
  },
  '& .swiper-button-next': {
    transform: 'translateY(calc(56px))',
  },
});
