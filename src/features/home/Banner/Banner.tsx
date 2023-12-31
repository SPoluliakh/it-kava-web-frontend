import { Box, Container } from '@mui/material';
import { BannerText } from '@/common/components';
import { IHomeDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IHomeDictionary['banner'];
}

export const Banner = ({ dictionary }: Props) => (
  <Box
    sx={{
      pt: { xs: '134px', sm: '156px' },
      pb: { xs: '54px', sm: '156px' },
      backgroundColor: 'primary.c500',
    }}
  >
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', xs1: 'row' },
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          order: { xs1: 1 },
          width: { xs: '100%', xs1: 'calc(100% - 350px)', sm: 'calc(100% - 450px)', lg: '939px' },
          height: { xs: '222px', xs1: '612px' },
          mr: { sm: '-55px' },
          mb: { xs: 4.5, xs1: 0 },
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("/images/banner/img-1440@2x.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <BannerText dictionary={dictionary} />
    </Container>
  </Box>
);
