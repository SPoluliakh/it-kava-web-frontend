import { Box, Container, Stack, Typography } from '@mui/material';
import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';
import { Head, DetailTable } from './components';

interface Props {
  dictionary: IPortfolioItemDictionary['detail'];
}
export const Detail = ({ dictionary }: Props) => (
  <Box
    sx={{
      py: { xs: 3, sm: 0 },
      backgroundColor: 'secondary.c50',
    }}
  >
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        gap: 4,
      }}
    >
      <Head dictionary={dictionary} />
      <Stack gap={{ xs: 5, sm: 10 }} sx={{ width: { sm: '756px' } }}>
        <Stack gap={2}>
          {dictionary.texts.map((it, i) => (
            <Typography key={i} variant="p3" component="p" color="secondary.c900">
              {it}
            </Typography>
          ))}
        </Stack>
        <DetailTable dictionary={dictionary.table} />
      </Stack>
    </Container>
  </Box>
);
