import { Typography } from '@mui/material';
import Link from 'next/link';

interface Props {
  text: string[];
}

export const PrivacyPolicy = ({ text }: Props) => (
  <Typography component="span" variant="p4">
    {text[0]}{' '}
    <Link href="/privacy-policy">
      <Typography
        variant="inherit"
        sx={{
          color: 'primary.c500',
          textDecoration: 'underline',
          display: 'inline-block',
        }}
      >
        {text[1]}
      </Typography>
    </Link>
  </Typography>
);
