import { useParams } from 'next/navigation';
import { Box, Button, Container, Typography } from '@mui/material';
import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';
import { ProjectDescription } from './components';
import { StyledImage } from '@/common/components/styled';
import { useSize } from './hooks';

interface Props {
  dictionary: IPortfolioItemDictionary['anotherPortfolio'];
}
export const AnotherPortfolio = ({ dictionary }: Props) => {
  const { projectName } = useParams();
  const { width, height } = useSize();
  return (
    <Box
      sx={{
        py: { xs: 3, sm: 0 },
        backgroundColor: 'secondary.c50',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ mb: { xs: 4, sm: 10 }, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" color="primary.c500">
            {dictionary.title}
          </Typography>
          <Typography variant="subtitle2" component="p" color="secondary.c900" sx={{ mb: 2 }}>
            {dictionary.subtitle}
          </Typography>
          <Typography variant="p3" component="p" color="secondary.c800">
            {dictionary.text}
          </Typography>
        </Box>
        <StyledImage
          src={`/images/portfolioItem/${projectName}/anotherPortfolio/img-1440@2x.jpg`}
          alt="Sreen shot"
          width={width}
          height={height}
          sx={{ width: '100%', borderRadius: '4px', mb: 3 }}
        />
        <ProjectDescription dictionary={dictionary.project} sx={{ mb: 8 }} />
        <Button
          variant="contained"
          sx={{ alignSelf: 'center', width: { xs: '100%', xs1: '151px' } }}
        >
          {dictionary.button}
        </Button>
      </Container>
    </Box>
  );
};
