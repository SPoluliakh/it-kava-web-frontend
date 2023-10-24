import { useMediaQuery, useTheme } from '@mui/material';

export const useMedia = () => {
  const theme = useTheme();
  const isXs1Up = useMediaQuery(theme.breakpoints.up('xs1'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    theme,
    isXs1Up,
    isSmUp,
    isMdUp,
    isLgUp,
  };
};
