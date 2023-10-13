'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { IAboutDictionary } from '@/common/interfaces/data/locale';
import { FeatureOne } from './FeatureOne';
import { Services } from './Services';
import { OurVision } from './OurVision';
import { Achievements } from './Achievements';
import { Trust } from './Trust';
import { Contacts } from '@/common/sections/Contacts';
import { TextBanner } from '@/common/sections/TextBanner';

interface Props {
  dictionary: IAboutDictionary;
}

export const AboutFeature = ({ dictionary }: Props) => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <TextBanner dictionary={dictionary.banner} />
      <FeatureOne dictionary={dictionary.featureOne} />
      <Services dictionary={dictionary.services} />
      <OurVision dictionary={dictionary.ourVision} />
      <Achievements dictionary={dictionary.achievements} />
      <Trust dictionary={dictionary.trust} />
      <Contacts />
    </Stack>
  </ThemeProvider>
);
