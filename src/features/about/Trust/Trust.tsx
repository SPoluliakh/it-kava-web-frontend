import Image from 'next/image';
import { Box, Container, Stack, Typography } from '@mui/material';
import { IAboutDictionary } from '@/common/interfaces/data/locale';
import { useTrust } from './hooks';

interface Props {
  dictionary: IAboutDictionary['trust'];
}

export const Trust = ({ dictionary }: Props) => {
  const trustList = useTrust();
  return (
    <Box
      sx={{
        py: '112px',
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
          <Typography className="visually-hidden" component="h2">
            {dictionary.title}
          </Typography>
          <Typography variant="p3" component="p">
            {dictionary.text}
          </Typography>
          <Stack gap={6} direction="row" flexWrap="wrap">
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
