import { Box, Container, Stack, Typography } from '@mui/material';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { useReviews } from './hooks';
import { Avatar } from './components';

interface Props {
  dictionary: IHomeDictionary['reviews'];
}

export const Reviews = ({ dictionary }: Props) => {
  const review = useReviews(dictionary);
  return (
    <Container sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: '100%',
          py: { xs: 2, sm: 11 },
          px: { xs: 2, sm: 11, md: 21.5 },
          backgroundColor: 'primary.c50',
          borderRadius: 2,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '259px 240px',
          backgroundPosition: {
            xs1: 'bottom -24px right 6px',
            sm: 'bottom 61px right 24px',
            md: 'bottom 61px right 112px',
          },
          backgroundImage: { xs1: 'url("/images/reviews/bg-quote.svg")' },
        }}
      >
        <Box sx={{ maxWidth: { xs: '450px', sm: '600px' } }}>
          <Typography className="visually-hidden" component="h2">
            {review.title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary.c700"
            sx={{ mb: { xs: 3, sm: 8 } }}
          >
            {review.text}
          </Typography>
          <Stack gap={1} direction="row">
            <Avatar src={review.author.avatar} />
            <Stack>
              <Typography variant="p1" component="p" color="secondary.c800">
                {[review.author.name, review.author.surname].join(' ')}
              </Typography>
              <Typography variant="p2" component="p" color="secondary.c700">
                {review.author.position}, {review.author.company}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
