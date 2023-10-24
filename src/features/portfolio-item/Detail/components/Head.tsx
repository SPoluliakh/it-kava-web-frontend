import { Box, Typography } from '@mui/material';
import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IPortfolioItemDictionary['detail'];
}

export const Head = ({ dictionary }: Props) => (
  <Box
    sx={{
      width: { xs: '100%', sm: '530px' },
    }}
  >
    <Typography variant="h2" component="h2" color="primary.c500" sx={{ mb: { xs: 2, sm: 1 } }}>
      {dictionary.title}
    </Typography>
    <Typography variant="subtitle2" component="p" color="secondary.c900">
      {dictionary.subtitle}
    </Typography>
  </Box>
);
