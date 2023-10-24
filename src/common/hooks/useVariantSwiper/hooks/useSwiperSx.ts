import { Theme, useTheme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { TSwiperOptionsVariant } from '../interfaces';
import { portfolio, simple } from '../sx';

const portfolioBanner: SystemStyleObject<Theme> = {};

export const useSwiperSx = (variant: TSwiperOptionsVariant) => {
  const theme = useTheme();
  const variants: Record<TSwiperOptionsVariant, SystemStyleObject<Theme>> = {
    portfolio: portfolio(theme),
    portfolioBanner,
    simple: simple(theme),
  };
  return variants[variant];
};
