import { Box, Typography } from '@mui/material';
import { FooterLinks } from '../components';
import { ICommonDictionary } from '@/common/interfaces/data/locale';
import { useFooterDown } from '../hooks';

interface Props {
  dictionary: ICommonDictionary['footer'];
}

export const FooterDown = ({ dictionary }: Props) => {
  const footerLinks = useFooterDown(dictionary.down);
  return (
    <Box
      sx={{
        py: '24px',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', sm: 'row' },
        justifyContent: 'center',
        alignItems: { xs: 'flex-start', xs1: 'center' },
      }}
    >
      <Typography
        variant="p2"
        component="p"
        sx={{
          color: 'secondary.c50',
          mr: { xs: 0, sm: '32px' },
          mt: { xs: '40px', sm: 0 },
        }}
      >
        {dictionary.common}
      </Typography>
      <FooterLinks footerLinks={footerLinks} />
    </Box>
  );
};
