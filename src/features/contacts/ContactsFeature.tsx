'use client';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { Contacts } from '@/common/sections';

export const ContactsFeature = () => {
  return (
    <ThemeProvider theme={theme}>
      <Contacts sx={{ mt: '64px' }} />
    </ThemeProvider>
  );
};
