import { Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant: 'prev' | 'next';
}

export const SwiperNavBtn = ({ children, variant }: Props) => {
  const theme = useTheme();
  return (
    <Box
      className={`swiper-button-${variant}`}
      component="div"
      sx={{
        ['&.MuiBox-root']: {
          ...(variant === 'prev'
            ? {
                transform: 'translateY(calc(-100% - 56px))',
              }
            : {
                transform: 'translateY(56px)',
              }),
          top: '50%',
          right: 0,
          bottom: 'auto',
          left: 'auto',
          width: '32px',
          height: '32px',
          mt: 0,
          borderRadius: '50%',
          color: 'secondary.c50',
          backgroundColor: 'primary.c500',
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        },
        ['& svg']: {
          fontSize: '24px',
        },
      }}
    >
      {children}
    </Box>
  );
};
