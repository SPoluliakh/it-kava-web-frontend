import { Typography, useTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { StyledLink } from '@/common/components/styled';
import { useMediaVariant, useServiceItemVariant } from '../hooks';
import { TServiceItemVariant } from '../interfaces';

interface Props {
  text: string;
  href: string;
}

export const ServiceItem = ({ text, href }: Props) => {
  const theme = useTheme();
  const variant: TServiceItemVariant = useMediaVariant();

  const serviceStyles = useServiceItemVariant(variant);
  return (
    <StyledLink
      href={href}
      sx={{
        ...serviceStyles,
      }}
    >
      <Typography
        variant="h1"
        component="span"
        color="inherit"
        sx={{
          position: 'absolute',
          left: { xs: '16px', md: '50%' },
          transform: { xs: 'translateX(0)', md: 'translateX(-50%)' },
          transition: theme.transitions.create(['transform', 'left'], {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut,
          }),
        }}
      >
        {text}
      </Typography>
      <Typography variant="h1" component="span" color="transparent">
        {text}
      </Typography>
      <ChevronRightIcon
        sx={{
          position: 'absolute',
          right: '16px',
          transform: { xs: 'translateX(0)', md: 'translateX(200px)' },
          fontSize: '48px',
          color: 'inherit',
          transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut,
          }),
        }}
      />
    </StyledLink>
  );
};
