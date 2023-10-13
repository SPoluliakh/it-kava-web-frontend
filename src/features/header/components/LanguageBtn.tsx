import { Typography } from '@mui/material';
import { StyledLink } from '@/common/components';
import { useRedirectedPathName } from '../hooks';

export const LanguageBtn = () => {
  const { altPath, altLocal } = useRedirectedPathName();
  return (
    <StyledLink href={altPath} sx={{ py: 2 }}>
      <Typography variant="p1" component="p">
        {altLocal}
      </Typography>
    </StyledLink>
  );
};
