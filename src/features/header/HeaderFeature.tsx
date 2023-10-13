'use client';
import { ThemeProvider } from '@mui/material';
import { ICommonDictionary } from '@/common/interfaces/data/locale';
import { theme } from '@/common/theme';
import { Header } from './Header';

interface Props {
  dictionary: ICommonDictionary['header'];
}

export const HeaderFeature = ({ dictionary }: Props) => (
  <ThemeProvider theme={theme}>
    <Header dictionary={dictionary} />
  </ThemeProvider>
);
