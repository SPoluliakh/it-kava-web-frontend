import { Box, Container } from '@mui/material';
import { BannerText } from '@/common/components';
import { DesktopSwiper, MobileSwiper } from './components';
import { useMedia } from '@/common/hooks';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IPortfolioDictionary['banner'];
}

export const Banner = ({ dictionary }: Props) => {
  const { isSmUp } = useMedia();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.c500',
        py: { xs: '114px', sm: 0 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <BannerText portfolio={!isSmUp} dictionary={dictionary} />
        {!isSmUp && <MobileSwiper dictionary={dictionary} />}
        {isSmUp && <DesktopSwiper />}
      </Container>
    </Box>
  );
};
