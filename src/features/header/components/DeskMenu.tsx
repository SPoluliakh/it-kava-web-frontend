import { Box } from '@mui/material';
import { ICommonDictionary } from '@/common/interfaces/data/locale';
import { useDeskMenu } from '@/features/header/hooks';
import { DescMenuItem } from './DescMenuItem';
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
      {menuList.map(({ name, href }) => (
        <DescMenuItem key={name} name={name} href={href} />
      ))}
    </Box>
  );
};
