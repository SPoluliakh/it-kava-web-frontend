import { Box, Container, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { AdvantagesBackground } from './components';

interface Props {
  dictionary: IHomeDictionary['advantages'];
}

export const Advantages = ({ dictionary }: Props) => {
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
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AdvantagesBackground />
        <Box sx={{ maxWidth: '536px' }}>
          <Typography
            variant="h2"
            component="h2"
            color="primary.c500"
            sx={{ mb: { xs: 2, sm: 1 } }}
          >
            {dictionary.title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary.c900"
            sx={{ mb: { xs: 1, sm: 3 } }}
          >
            {dictionary.subtitle}
          </Typography>
          <Typography
            variant="p3"
            component="p"
            color="secondary.c800"
            sx={{ mb: { xs: 4, sm: 3 } }}
          >
            {dictionary.text}
          </Typography>

          <Stack gap={{ xs: 2.5, sm: 3 }}>
            {dictionary.advantageTextList.map(text => (
              <Stack key={text} gap={2} direction="row">
                <CheckCircleIcon sx={{ color: 'primary.c500' }} />
                <Typography variant="p1" component="span" color="primary.c500">
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
