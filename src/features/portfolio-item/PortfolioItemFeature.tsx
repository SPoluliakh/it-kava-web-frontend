'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { TextBanner } from '@/common/sections/TextBanner';
import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';
import { Contacts, Trust } from '@/common/sections';
import { SimpleSlider } from './SimpleSlider';
import { Detail } from './Detail';
import { AnotherPortfolio } from './AnotherPortfolio';

interface Props {
  dictionary: IPortfolioItemDictionary;
}

export const PortfolioItemFeature = ({ dictionary }: Props) => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <TextBanner dictionary={dictionary.banner} />
      <SimpleSlider />
      <Detail dictionary={dictionary.detail} />
      <Trust />
      <AnotherPortfolio dictionary={dictionary.anotherPortfolio} />
      <Contacts />
    </Stack>
  </ThemeProvider>
);
