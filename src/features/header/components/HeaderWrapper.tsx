import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface Props {
  children: ReactNode;
}

export const HeaderWrapper = ({ children }: Props) => (
  <Box
    component="header"
    sx={{
      zIndex: 10,
      position: 'sticky',
      top: 0,
      backgroundColor: 'secondary.c50',
      boxShadow: '0px 4px 25px 0px rgba(0, 86, 251, 0.15)',
    }}
  >
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
        width: '100%',
      }}
    >
      {children}
    </Container>
  </Box>
);
