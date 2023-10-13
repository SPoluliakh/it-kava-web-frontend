import { Stack, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const PortfolioLinkTextBlock = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <Stack
      gap={4}
      className="portfolioLinkTextBlock"
      sx={{
        position: 'absolute',
        top: '50%',
        left: { xs: '16px', sm: '50%' },
        transform: { xs: 'translate3d(0, -50%, 0)', sm: 'translate3d(-50%, -50%, 0)' },
        transition: theme.transitions.create(['transform', 'left'], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeInOut,
        }),
      }}
    >
      {children}
    </Stack>
  );
};
