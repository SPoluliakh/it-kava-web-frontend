import Image from 'next/image';
import { Box, Button, Grid, Typography } from '@mui/material';
import { ArrowLeft } from '@/common/components/icons';
import { IPortfolio, lang } from '../interfaces';
import { useSize } from '../hooks';

interface Props {
  portfolio: IPortfolio[];
  currentLocal: lang;
  isXs1Up: boolean;
}

export const PortfolioInfo = ({ portfolio, currentLocal, isXs1Up }: Props) => {
  const { width, height } = useSize();
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 4, md: 2 }}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {portfolio.map(({ id, image, title, text, logo }) => (
        <Grid item xs={12} xs1={6} md={3} key={id}>
          <Box
            sx={{
              borderRadius: '4px',
              overflow: 'hidden',
              border: ' 1px solid  #E3EFFF',
            }}
          >
            <Image src={image} alt={title} width={width} height={height} />
            <Box
              sx={{
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '16px 0 8px 16px',
              }}
            >
              {isXs1Up && (
                <Box sx={{ maxWidth: '222px' }}>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ color: 'primary.c500', textTransform: 'uppercase' }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="p3" component="p">
                    {text[currentLocal]}
                  </Typography>
                </Box>
              )}
              {!isXs1Up && (
                <Typography variant="h2" sx={{ color: 'primary.c500' }}>
                  {logo}
                </Typography>
              )}
              <Button href="#" sx={{ px: 0, width: '40px !important' }}>
                <ArrowLeft />
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
