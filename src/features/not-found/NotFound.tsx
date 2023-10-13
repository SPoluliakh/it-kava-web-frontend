import { useRouter } from 'next/navigation';
import { Box, Button, Container } from '@mui/material';
import { INotFoundDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: INotFoundDictionary;
}

export const NotFound = ({ dictionary }: Props) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        height: { xs: '812px', sm: '924px' },
        backgroundImage: {
          xs: 'url("/images/not-found/img-374@3x.png")',
          sm: 'url("/images/not-found/img-1440@2x.png")',
        },
        backgroundSize: { xs: '374px 812px', sm: '1440px 924px' },
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: { xs: '500px', sm: '710px' },
        }}
      >
        <Button href="/" variant="contained" onClick={() => router.push('/')}>
          {dictionary.buttonName}
        </Button>
      </Container>
    </Box>
  );
};
