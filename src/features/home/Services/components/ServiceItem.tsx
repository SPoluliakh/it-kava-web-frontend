import { Typography, useTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { StyledLink } from '@/common/components';

interface Props {
  text: string;
  href: string;
}

export const ServiceItem = ({ text, href }: Props) => {
  const theme = useTheme();
  return (
    <StyledLink
      href={href}
      sx={{
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: 'min-content',
        py: { xs: 3, sm: 5 },
        px: 6,
        borderRadius: 2,
        color: 'secondary.c100',
        backgroundColor: 'primary.c500',
        overflow: 'hidden',
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
      }}
    >
      <Typography
        variant="h1"
        component="span"
        color="inherit"
        sx={{
          position: 'absolute',
          left: { xs: '16px', sm: '50%' },
          transform: { xs: 'translateX(0)', sm: 'translateX(-50%)' },
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
          transform: { xs: 'translateX(0)', sm: 'translateX(200px)' },
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
