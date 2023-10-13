import { Box, Container, Stack, Typography } from '@mui/material';
import { ITextBannerDictionary } from '@/common/sections/TextBanner/interfaces';

interface Props {
  dictionary: ITextBannerDictionary;
  alignLeft?: boolean;
}

export const TextBanner = ({ dictionary, alignLeft }: Props) => (
  <Box
    sx={{
      py: '112px',
      color: 'secondary.c50',
      textAlign: alignLeft ? 'left' : 'center',
      backgroundColor: 'primary.c500',
    }}
  >
    <Container
      sx={{
        display: 'flex',
        justifyContent: alignLeft ? 'left' : 'center',
      }}
    >
      <Stack alignItems={alignLeft ? 'flex-start' : 'center'} gap={3} sx={{ maxWidth: '738px' }}>
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
