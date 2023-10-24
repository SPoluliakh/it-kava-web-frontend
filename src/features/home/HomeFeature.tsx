'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { Contacts } from '@/common/sections/Contacts';
import { Banner } from './Banner';
import { Services } from './Services';
import { Advantages } from './Advantages';
import { Portfolio } from './Portfolio';
import { Reviews } from './Reviews';
import { AboutUs } from './AboutUs';
import { OrderButton } from '@/common/components';

interface Props {
  dictionary: IHomeDictionary;
}

export const HomeFeature = ({ dictionary }: Props) => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <Banner dictionary={dictionary.banner} />
      <Services dictionary={dictionary.services} />
      <Advantages dictionary={dictionary.advantages} />
      <Portfolio dictionary={dictionary.portfolio} />
      <Reviews dictionary={dictionary.reviews} />
      <AboutUs dictionary={dictionary.aboutUs} />
      <Contacts />
      <OrderButton variant={'fixed'} />
    </Stack>
  </ThemeProvider>
);
