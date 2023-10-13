'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { Banner } from './Banner';
import { Portfolio } from './Portfolio';
import { Contacts } from '@/common/sections';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IPortfolioDictionary;
}

export const PortfolioFeature = ({ dictionary }: Props) => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <Banner dictionary={dictionary.banner} />
      <Portfolio dictionary={dictionary.portfolio} />
      <Contacts />
    </Stack>
  </ThemeProvider>
);
