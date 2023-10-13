import { Box, Typography } from '@mui/material';
import { IHomeDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IHomeDictionary['aboutUs'];
}

export const Text = ({ dictionary }: Props) => (
  <Box
    sx={{
      mt: { xs: 4, sm: 0 },
      width: { xs: '100%', sm: '648px' },
      height: { xs: '100%', sm: '406px' },
    }}
  >
    <Typography variant="h2" component="h2" color="primary.c500" sx={{ mb: { xs: 2, sm: 1 } }}>
      {dictionary.title}
    </Typography>
    <Typography
      variant="subtitle2"
      component="p"
      color="secondary.c900"
      sx={{ mb: { xs: 1, sm: 3 } }}
    >
      {dictionary.subtitle}
      <Box component="span" color="primary.c500">
        {dictionary.logo}
      </Box>
    </Typography>
    {dictionary.text.map(item => (
      <Typography
        key={item}
        variant="p3"
        component="p"
        color="secondary.c800"
        sx={{ mb: { xs: 4, sm: 3 } }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);
