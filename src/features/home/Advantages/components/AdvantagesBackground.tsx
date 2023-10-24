import { Box } from '@mui/material';

export const AdvantagesBackground = () => (
  <Box
    sx={{
      width: {
        xs: '100%',
        xs1: '548px',
        md: '648px',
      },
      height: { xs: '342px', xs1: '548px', md: '648px' },
      mb: { xs: 4, sm: 0 },
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url("/images/advantages/img-1440@2x.png")',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      marginRight: { xs1: 'auto' },
    }}
  />
);
