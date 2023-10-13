'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { IPrivacyPolicyDictionary } from '@/common/interfaces/data/locale';
import { TextBanner } from '@/common/sections/TextBanner';
import { Content } from '@/features/privacy-policy/Content/Content';

interface Props {
  dictionary: IPrivacyPolicyDictionary;
}

export const PrivacyPolicyFeature = ({ dictionary }: Props) => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <TextBanner dictionary={dictionary.banner} alignLeft />
      <Content dictionary={dictionary.content} />
    </Stack>
  </ThemeProvider>
);
