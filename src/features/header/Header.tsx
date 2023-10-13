import { Box } from '@mui/material';
import { useMedia } from '@/common/hooks';
import { DeskMenu, LanguageBtn, Logo, MenuBtn, ServiceBtn, HeaderWrapper } from './components';
import { ICommonDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: ICommonDictionary['header'];
}

export const Header = ({ dictionary }: Props) => {
  const { isSmUp } = useMedia();

  return (
    <HeaderWrapper>
      {isSmUp ? (
        <>
          <Logo />
          <DeskMenu dictionary={dictionary.menu} />
          <LanguageBtn />
          <ServiceBtn orderServiceBtn={dictionary.orderServiceBtn} variant="text" />
        </>
      ) : (
        <>
          <Box sx={{ flexGrow: 1, flexBasis: 1 }}>
            <MenuBtn />
          </Box>
          <Logo />
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <LanguageBtn />
            <ServiceBtn orderServiceBtn={dictionary.orderServiceBtn} variant="icon" />
          </Box>
        </>
      )}
    </HeaderWrapper>
  );
};
