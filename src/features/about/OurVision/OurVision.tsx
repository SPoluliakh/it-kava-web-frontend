import { IAboutDictionary } from '@/common/interfaces/data/locale';
import { Box, Container, Stack, Typography } from '@mui/material';

interface Props {
  dictionary: IAboutDictionary['ourVision'];
}

export const OurVision = ({ dictionary }: Props) => (
  <Box
    sx={{
      py: { xs: 5, sm: 12 },
      color: 'secondary.c50',
      textAlign: 'center',
      backgroundColor: 'primary.c500',
    }}
  >
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack alignItems="center" gap={3} sx={{ maxWidth: '768px' }}>
        <Typography variant="h2" component="h2">
          {dictionary.title}
        </Typography>
        <Typography variant="p2" component="p">
          {dictionary.text}
        </Typography>
      </Stack>
    </Container>
  </Box>
);
