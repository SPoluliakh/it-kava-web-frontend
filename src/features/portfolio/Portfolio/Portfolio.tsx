import { Box, Button, Container } from '@mui/material';
import { usePortfolio, usePortfolioMenu, useTabsChange } from './hooks';
import { MobilePortfolioTabsPanel, PortfolioTabsPanel } from './components';
import { useMedia } from '@/common/hooks';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IPortfolioDictionary['portfolio'];
}

export const Portfolio = ({ dictionary }: Props) => {
  const { isSmUp } = useMedia();
  const portfolioMenu = usePortfolioMenu(dictionary);
  const { value, handleChange } = useTabsChange();
  const { isShowBtn, handleLoadMore, portfolio } = usePortfolio();
  return (
    <Box
      sx={{
        py: { xs: 3, sm: 0 },
        backgroundColor: 'secondary.c50',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {!isSmUp ? (
          <MobilePortfolioTabsPanel portfolioMenu={portfolioMenu} portfolio={portfolio} />
        ) : (
          <PortfolioTabsPanel
            handleChange={handleChange}
            portfolioMenu={portfolioMenu}
            value={value}
            portfolio={portfolio}
          />
        )}
        {isShowBtn && (
          <Button
            onClick={handleLoadMore}
            variant="contained"
            color="primary"
            sx={{
              mt: '24px',
              py: '6px',
              width: { xs: '100%', sm: '155px' },
            }}
          >
            {dictionary.showMoreBtn}
          </Button>
        )}
      </Container>
    </Box>
  );
};
