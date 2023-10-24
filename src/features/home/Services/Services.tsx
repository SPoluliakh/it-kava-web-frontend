import { Box, Container, Typography } from '@mui/material';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { ServiceItemList } from './components';

interface Props {
  dictionary: IHomeDictionary['services'];
}

export const Services = ({ dictionary }: Props) => (
  <Box>
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', xs1: 'row', sm: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'center', sm: 'flex-start', md: 'center' },
        gap: 2,
      }}
    >
      <Box sx={{ maxWidth: { sm: '348px', md: '480px', lg: '574px' } }}>
        <Typography variant="h2" component="h2" color="primary.c500" sx={{ xs: 2, mb: 1 }}>
          {dictionary.title}
        </Typography>
        <Typography variant="subtitle2" component="p" color="secondary.c900" sx={{ xs: 1, mb: 3 }}>
          {dictionary.subtitle}
        </Typography>
        <Typography variant="p3" component="p" color="secondary.c800" sx={{ mb: { xs: 7, sm: 3 } }}>
          {dictionary.text}
        </Typography>
      </Box>
      <ServiceItemList dictionary={dictionary.serviceItemList} />
    </Container>
  </Box>
);
