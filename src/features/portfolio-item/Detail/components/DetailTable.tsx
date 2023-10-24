import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { useDetailTable } from '@/features/portfolio-item/Detail/hooks';

interface Props {
  dictionary: IPortfolioItemDictionary['detail']['table'];
}

export const DetailTable = ({ dictionary }: Props) => {
  const tableList = useDetailTable(dictionary);
  return (
    <Box>
      {tableList.map((it, i) => (
        <Box key={i}>
          <Divider sx={{ borderColor: 'secondary.c900' }} />
          <Stack direction="row" justifyContent="space-between" sx={{ py: '20px' }}>
            <Typography variant="p1" component="p" color="secondary.c900">
              {it.head}
            </Typography>
            <Typography variant="p3" component="p" color="secondary.c900">
              {it.value}
            </Typography>
          </Stack>
        </Box>
      ))}
      <Divider sx={{ borderColor: 'secondary.c900' }} />
    </Box>
  );
};
