import { Typography, useTheme } from '@mui/material';

interface Props {
  text: string;
}

export const PortfolioLinkText = ({ text }: Props) => {
  const theme = useTheme();
  return (
    <Typography
      variant="p3"
      component="p"
      color="inherit"
      sx={{
        position: 'absolute',
        bottom: 0,
        left: { xs: 0, sm: '50%' },
        transform: { xs: 'translateX(0)', sm: 'translateX(-50%)' },
        width: 'max-content',
        transition: theme.transitions.create(['transform', 'left'], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeInOut,
        }),
      }}
    >
      {text}
    </Typography>
  );
};
