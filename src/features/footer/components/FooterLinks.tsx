import { StyledLink } from '@/common/components/styled';
import { Box, Typography } from '@mui/material';

interface Props {
  footerLinks: {
    name: string;
    href: string;
  }[];
}

export const FooterLinks = ({ footerLinks }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', xs1: 'row' },
        mb: { xs: '24px', xs1: 0 },
      }}
    >
      {footerLinks.map(({ href, name }) => (
        <StyledLink
          key={name}
          href={href}
          sx={{ ':not(:last-child)': { mr: { xs: 0, xs1: '32px' }, mb: { xs: '24px', xs1: 0 } } }}
        >
          <Typography
            variant="p2"
            component="p"
            sx={{
              color: 'secondary.c50',
            }}
          >
            {name}
          </Typography>
        </StyledLink>
      ))}
    </Box>
  );
};
