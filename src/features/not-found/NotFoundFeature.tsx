'use client';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { NotFound } from './NotFound';
import { INotFoundDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: INotFoundDictionary;
}

export const NotFoundFeature = ({ dictionary }: Props) => (
  <ThemeProvider theme={theme}>
    <NotFound dictionary={dictionary} />
  </ThemeProvider>
);
