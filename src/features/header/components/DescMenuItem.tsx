import { Typography } from '@mui/material';
import { StyledLink } from '@/common/components/styled';
import { useCurrentHref } from '../hooks';

interface Props {
  name: string;
  href: string;
}

export const DescMenuItem = ({ name, href }: Props) => {
  const currentHref = useCurrentHref(href);

  return (
    <StyledLink href={href} sx={{ py: 2 }}>
      <Typography
        className={currentHref}
        variant="p2"
        component="p"
        sx={{
          position: 'relative',

          '&:hover:before, &.current:before': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 2,
            backgroundColor: 'primary.c500',
          },
        }}
      >
        {name}
      </Typography>
    </StyledLink>
  );
};
