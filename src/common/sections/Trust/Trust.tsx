import Image from 'next/image';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useSectionDictionary, useTrust } from './hooks';

export const Trust = () => {
  const trustList = useTrust();
  const dictionary = useSectionDictionary();
  return (
    <Box
      sx={{
        color: 'secondary.c900',
        textAlign: 'center',
        backgroundColor: 'secondary.c50',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack alignItems="center" gap={3}>
          <Typography variant="h2" component="h2" color="primary.c500">
            {dictionary.title}
          </Typography>
          <Stack
            gap={{ xs: 4, xs1: 2, md: 6 }}
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            {trustList.map((it, i) => (
              <Box
                key={i}
                sx={{
                  height: '56px',
                  '& img': {
                    height: '100%',
                    width: 'auto',
                  },
                }}
              >
                <Image src={`/images/trust/${it}`} alt="employees" width={120} height={56} />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
