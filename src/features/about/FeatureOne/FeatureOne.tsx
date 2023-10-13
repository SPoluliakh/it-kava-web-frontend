import Image from 'next/image';
import { Box, Container, Stack, Typography } from '@mui/material';
import aboutUsImg from 'public/images/aboutUs/img-1440@2x.png';
import { IAboutDictionary } from '@/common/interfaces/data/locale';
import { useMedia } from '@/common/hooks';

interface Props {
  dictionary: IAboutDictionary['featureOne'];
}

export const FeatureOne = ({ dictionary }: Props) => {
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
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ mb: 3, '& .colored': { color: 'primary.c500' } }}
          >
            {dictionary.coloredSubtitle.map((it, i) => (
              <span key={i} className={i % 2 !== 0 ? 'colored' : ''}>
                {it}
              </span>
            ))}
          </Typography>
          <Stack gap={3}>
            {dictionary.text.map(it => (
              <Typography key={it} variant="p3" component="p">
                {it}
              </Typography>
            ))}
          </Stack>
        </Box>
        <Box>
          <Image
            src={aboutUsImg}
            alt="employees"
            width={!isSmUp ? '348' : !isLgUp ? '448' : '648'}
            height={!isSmUp ? '348' : !isLgUp ? '448' : '648'}
          />
        </Box>
      </Container>
    </Box>
  );
};
