import { Box, Button, Container, Typography } from '@mui/material';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { PortfolioSwiper } from './components';

interface Props {
  dictionary: IHomeDictionary['portfolio'];
}

export const Portfolio = ({ dictionary }: Props) => (
  <Box
    sx={{
      py: { xs: 3, sm: 3 },
      backgroundColor: 'primary.c50',
    }}
  >
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', xs1: 'flex-start', sm: 'center' },
      }}
    >
      <Box sx={{ maxWidth: '506px' }}>
        <Typography variant="h2" component="h2" color="primary.c500" sx={{ mb: { xs: 2, sm: 0 } }}>
          {dictionary.title}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          color="secondary.c900"
          sx={{ mb: { xs: 1, sm: 2 } }}
        >
          {dictionary.subtitle}
        </Typography>
        <Typography variant="p3" component="p" color="secondary.c800" sx={{ mb: { xs: 3, sm: 6 } }}>
          {dictionary.text}
        </Typography>
        <Button
          variant="contained"
          sx={{ mb: { xs: '32px', sm: 0 }, width: { xs: '100%', xs1: '145px' } }}
        >
          {dictionary.moreDetails}
        </Button>
      </Box>
      <PortfolioSwiper dictionary={dictionary.projectList} />
    </Container>
  </Box>
);
