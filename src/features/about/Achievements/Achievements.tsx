import Image from 'next/image';
import { Box, Container, Stack, Typography } from '@mui/material';
import { IAboutDictionary } from '@/common/interfaces/data/locale';
import { useMedia } from '@/common/hooks';
import servicesImg from 'public/images/services/img-1440@2x.png';

interface Props {
  dictionary: IAboutDictionary['achievements'];
}

export const Achievements = ({ dictionary }: Props) => {
  const { isSmUp, isLgUp } = useMedia();
  return (
    <Box
      sx={{
        color: 'secondary.c900',
        backgroundColor: 'secondary.c50',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { sm: 'space-between' },
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: '584px' }}>
          <Typography variant="h2" component="h2" color="primary.c500" sx={{ mb: 2 }}>
            {dictionary.title}
          </Typography>
          <Typography variant="subtitle2" component="p" sx={{ mb: 3 }}>
            {dictionary.subtitle}
          </Typography>
          <Typography variant="p3" component="p" sx={{ mb: 5 }}>
            {dictionary.text}
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: { sm: 3 },
              rowGap: 5,
            }}
          >
            {dictionary.list.map((it, i) => (
              <Stack key={i}>
                <Typography variant="h1" component="p">
                  {it.value}
                </Typography>
                <Typography variant="p3" component="p">
                  {it.head}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
        <Box sx={{ order: { xs: -1, sm: 0 }, mb: { xs: 10, sm: 0 } }}>
          <Image
            src={servicesImg}
            alt="employees"
            width={!isSmUp ? '348' : !isLgUp ? '448' : '648'}
            height={!isSmUp ? '348' : !isLgUp ? '448' : '648'}
          />
        </Box>
      </Container>
    </Box>
  );
};
