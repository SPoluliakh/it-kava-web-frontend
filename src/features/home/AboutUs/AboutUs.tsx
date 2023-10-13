import Image from 'next/image';
import { Box, Container } from '@mui/material';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import aboutUsImg from 'public/images/aboutUs/img-1440@2x.png';
import { useMedia } from '@/common/hooks';
import { Text } from './components';

interface Props {
  dictionary: IHomeDictionary['aboutUs'];
}

export const AboutUs = ({ dictionary }: Props) => {
  const { isSmUp } = useMedia();

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
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text dictionary={dictionary} />

        <Image
          src={aboutUsImg}
          alt="employees"
          width={!isSmUp ? '348' : '648'}
          height={!isSmUp ? '348' : '648'}
        />
      </Container>
    </Box>
  );
};
