import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
  children: ReactNode;
  variant: 'prev' | 'next';
}

export const SwiperNavBtn = ({ children, variant }: Props) => (
  <Box
    className={`swiper-button-${variant}`}
    component="div"
    sx={{
      ['&.MuiBox-root']: {
        flexShrink: 0,
        flexBasis: '32px',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        color: 'secondary.c50',
        backgroundColor: 'primary.c500',
      },
      ['& svg']: {
        fontSize: '24px',
      },
    }}
  >
    {children}
  </Box>
);
