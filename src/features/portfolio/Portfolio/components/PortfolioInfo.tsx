import Image from 'next/image';
import { Box, Button, Grid, Typography } from '@mui/material';
import { ArrowLeft } from '@/common/components/icons';
import { IPortfolio, lang } from '../interfaces';

interface Props {
  portfolio: IPortfolio[];
  currentLocal: lang;
  isSmUp: boolean;
}

export const PortfolioInfo = ({ portfolio, currentLocal, isSmUp }: Props) => (
  <Grid
    container
    spacing={{ xs: 2, sm: 4, md: 3 }}
    sx={{
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    {portfolio.map(({ id, image, title, text, logo }) => (
      <Grid item xs={12} sm={4} md={3} key={id}>
        <Box
          sx={{
            borderRadius: '4px',
            overflow: 'hidden',
            border: ' 1px solid  #E3EFFF',
          }}
        >
          <Image
            src={image}
            alt={title}
            width={isSmUp ? '312' : '342'}
            height={isSmUp ? '240' : '264'}
          />
          <Box
            sx={{
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: '16px 0 8px 16px',
            }}
          >
            {isSmUp && (
              <Box>
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
            {!isSmUp && (
              <Typography variant="h2" sx={{ color: 'primary.c500' }}>
                {logo}
              </Typography>
            )}
            <Button href="#">
              <ArrowLeft />
            </Button>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
);
