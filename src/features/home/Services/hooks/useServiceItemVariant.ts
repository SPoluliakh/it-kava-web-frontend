import { useTheme, Theme, SxProps } from '@mui/material';
import { TServiceItemVariant } from '../interfaces';

type TGetServiceVariant = (theme: Theme) => SxProps;

const desktop: TGetServiceVariant = theme => ({
  flexGrow: 1,
  width: 'min-content',
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  ['&:hover']: {
    backgroundColor: { sm: 'primary.c700' },
  },
  ['&:hover .MuiTypography-root']: {
    left: '16px',
    transform: 'translateX(0)',
  },
  ['&:hover .MuiSvgIcon-root']: {
    transform: 'translateX(0)',
  },
});

const tablet: TGetServiceVariant = () => ({
  width: '100%',
});

const xs1Up: TGetServiceVariant = () => ({
  width: '468px',
});

const variants: Record<TServiceItemVariant, TGetServiceVariant> = {
  desktop,
  tablet,
  xs1Up,
};

export const useServiceItemVariant = (variant: TServiceItemVariant) => {
  const theme = useTheme();
  const variantOptions = variants[variant](theme);

  const serviceStyles: SxProps = {
    position: 'relative',
    display: 'flex',
    px: 6,
    borderRadius: 2,
    justifyContent: 'center',
    overflow: 'hidden',
    py: { xs: 3, sm: 5 },
    color: 'secondary.c100',
    backgroundColor: 'primary.c500',
    ...variantOptions,
  };

  return serviceStyles;
};
