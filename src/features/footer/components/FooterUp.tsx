import { Box } from '@mui/material';
import { FooterLinks, SocialList } from '../components';
import { useFooterLinks } from '../hooks';
import { useSocialList } from '@/common/sections/Contacts/hooks';
import { ICommonDictionary } from '@/common/interfaces/data/locale';
import { StyledLink } from '@/common/components/styled';

interface Props {
  dictionary: ICommonDictionary['footer'];
}

export const FooterUp = ({ dictionary }: Props) => {
  const footerLinks = useFooterLinks(dictionary.up);
  const socialList = useSocialList();

  return (
    <Box
      sx={{
        pb: '24px',
        display: 'flex',
        flexDirection: { xs: 'column', xs1: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', xs1: 'center' },
      }}
    >
      <StyledLink href="/" sx={{ color: 'secondary.c50', mb: { xs: '24px', xs1: 0 } }}>
        Logo
      </StyledLink>
      <FooterLinks footerLinks={footerLinks} />
      <SocialList socialList={socialList} />
    </Box>
  );
};
