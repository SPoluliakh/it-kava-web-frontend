import { useTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const PortfolioLinkIcon = () => {
  const theme = useTheme();
  return (
    <ChevronRightIcon
      sx={{
        position: 'absolute',
        top: '50%',
        right: '16px',
        transform: { xs: 'translate3d(0, -50%, 0)', sm: 'translate3d(200px, -50%, 0)' },
        fontSize: '48px',
        color: 'primary.c500',
        transition: theme.transitions.create(['transform'], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeInOut,
        }),
        borderRadius: '50%',
        backgroundColor: 'secondary.c50',
      }}
    />
  );
};
