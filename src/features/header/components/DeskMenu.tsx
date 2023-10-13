import { Box, Typography } from '@mui/material';
import { StyledLink } from '@/common/components';
import { ICommonDictionary } from '@/common/interfaces/data/locale';
import { useDeskMenu } from '@/features/header/hooks';

interface Props {
  dictionary: ICommonDictionary['header']['menu'];
}

export const DeskMenu = ({ dictionary }: Props) => {
  const menuList = useDeskMenu(dictionary);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
      }}
    >
      {menuList.map(it => (
        <StyledLink key={it.name} href={it.href} sx={{ py: 2 }}>
          <Typography variant="p2" component="p">
            {it.name}
          </Typography>
        </StyledLink>
      ))}
    </Box>
  );
};
