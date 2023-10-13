import { Typography, useTheme } from '@mui/material';

interface Props {
  logoUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PortfolioLinkLogo = ({ logoUrl }: Props) => {
  // TODO: use logo when it will be and then will remove eslint-disable
  const theme = useTheme();
  return (
    <Typography
      variant="h1"
      component="p"
      sx={{
        position: 'absolute',
        top: 0,
        left: { xs: 0, sm: '50%' },
        transform: { xs: 'translateX(0)', sm: 'translateX(-50%)' },
        transition: theme.transitions.create(['transform', 'left'], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeInOut,
        }),
      }}
    >
      Лого
    </Typography>
  );
};
