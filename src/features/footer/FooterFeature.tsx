'use client';
import { Box, Container, Divider, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { FooterDown, FooterUp } from './components';
import { ICommonDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: ICommonDictionary['footer'];
}

export const FooterFeature = ({ dictionary }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{ pt: '64px', pb: { xs: '16px', sm: '64px' }, backgroundColor: 'secondary.c800' }}
      >
        <Container>
          <FooterUp dictionary={dictionary} />
          <Divider sx={{ backgroundColor: 'secondary.c50' }} />
          <FooterDown dictionary={dictionary} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};
