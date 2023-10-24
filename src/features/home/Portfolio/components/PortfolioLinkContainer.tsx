import { ReactNode } from 'react';
import { useTheme } from '@mui/material';
import { StyledLink } from '@/common/components/styled';

interface Props {
  href: string;
  bgUrl: string;
  children: ReactNode;
}

export const PortfolioLinkContainer = ({ href, children, bgUrl }: Props) => {
  const theme = useTheme();
  return (
    <StyledLink
      href={href}
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        py: 2,
        px: { xs: 2, sm: 6 },
        borderRadius: 1,
        color: 'secondary.c50',
        backgroundColor: 'primary.c500',
        overflow: 'hidden',
        backgroundImage: `url("${bgUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ['&::before']: {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.30)',
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut,
          }),
        },
        ['&:hover::before']: {
          backgroundColor: { sm: 'rgba(0, 0, 0, 0.50)' },
        },
        ['&:hover .portfolioLinkTextBlock']: {
          left: '16px',
          transform: 'translate3d(0, -50%, 0)',
        },
        ['&:hover .portfolioLinkTextBlock .MuiTypography-root']: {
          left: 0,
          transform: 'translate3d(0, 0, 0)',
        },
        ['&:hover .MuiSvgIcon-root']: {
          transform: 'translate3d(0, -50%, 0)',
        },
      }}
    >
      {children}
    </StyledLink>
  );
};
