import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const DecoratedListItem = ({ children }: Props) => (
  <Stack
    sx={{
      position: 'relative',
      pl: 11,
      '&:not(:nth-last-of-type(1))': {
        pb: 3,
      },
    }}
  >
    {children}
  </Stack>
);
