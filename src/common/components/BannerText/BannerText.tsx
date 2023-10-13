import { Box, Typography } from '@mui/material';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';
import { OrderButton } from '../OrderButton/OrderButton';

interface Props {
  dictionary: IPortfolioDictionary['banner'];
  portfolio?: boolean;
}

export const BannerText = ({ dictionary, portfolio }: Props) => (
  <Box sx={{ maxWidth: '450px' }}>
    <Typography variant="h1" component="h1" color="secondary.c200" sx={{ mb: 1 }}>
      {dictionary.title}
    </Typography>
    <Typography variant="subtitle1" component="p" color="secondary.c50" sx={{ mb: 2 }}>
      {dictionary.subtitle}
    </Typography>
    <Typography
      variant="p3"
      component="p"
      color="secondary.c200"
      sx={{ mb: { xs: portfolio ? 1 : 7, sm: 3 } }}
    >
      {dictionary.text}
    </Typography>
    {!portfolio && <OrderButton dictionary={dictionary} />}
  </Box>
);
