import { Box } from '@mui/material';
import { useMedia } from '@/common/hooks';
import { DeskMenu, LanguageBtn, Logo, MenuBtn, HeaderWrapper } from './components';
import { ICommonDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: ICommonDictionary['header'];
}

export const Header = ({ dictionary }: Props) => {
  const { isXs1Up } = useMedia();

  return (
    <HeaderWrapper>
      {isXs1Up ? (
        <>
          <Logo />
          <DeskMenu dictionary={dictionary.menu} />
          <LanguageBtn />
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
          </Box>
        </>
      )}
    </HeaderWrapper>
  );
};
