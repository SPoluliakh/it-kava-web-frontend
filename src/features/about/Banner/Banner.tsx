import { Box, Container, Stack, Typography } from '@mui/material';
import { IAboutDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IAboutDictionary['banner'];
}

export const Banner = ({ dictionary }: Props) => (
  <Box
    sx={{
      py: '112px',
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
      <Stack alignItems="center" gap={3} sx={{ maxWidth: '738px' }}>
        <Typography className="visually-hidden" component="h1">
          {dictionary.title}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {dictionary.subtitle}
        </Typography>
        <Typography variant="p2" component="p">
          {dictionary.text}
        </Typography>
      </Stack>
    </Container>
  </Box>
);
