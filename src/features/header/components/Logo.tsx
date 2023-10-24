import { Typography } from '@mui/material';
import { StyledLink } from '@/common/components/styled';

export const Logo = () => (
  <StyledLink href="/" sx={{ mr: { sm: 'auto' }, py: { xs: 1, sm: 2 } }}>
    <Typography variant="p2" color="secondary.main">
      IT{' '}
      <Typography variant="p2" component="span" color="primary.c500">
        [Kava]
      </Typography>
    </Typography>
  </StyledLink>
);
