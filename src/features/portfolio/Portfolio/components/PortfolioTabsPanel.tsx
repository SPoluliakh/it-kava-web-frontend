import { Tab, Tabs } from '@mui/material';
import { PortfolioInfo } from './PortfolioInfo';
import { useLang } from '@/features/header/hooks';
import { IPortfolio, IPortfolioMenu } from '../interfaces';
import { useMedia } from '@/common/hooks';

type handleChange = (event: React.SyntheticEvent, newValue: number) => void;

interface Props {
  portfolioMenu: IPortfolioMenu[];
  value: number;
  handleChange: handleChange;
  portfolio: IPortfolio[];
}

export const PortfolioTabsPanel = ({ portfolioMenu, value, handleChange, portfolio }: Props) => {
  const currentLocal = useLang();
  const { isXs1Up } = useMedia();
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="portfolio variants"
        sx={{ mb: '32px', minHeight: '24px' }}
      >
        {portfolioMenu.map(({ name }) => (
          <Tab
            key={name}
            label={name}
            sx={{
              color: 'primary.c500',
              textTransform: 'none',
              fontSize: '22px',
              fontStyle: 'normal',
              fontWeight: 700,
              '&.MuiTab-root': {
                p: 0,
              },
              '&.MuiTab-root:not(:last-child)': {
                mr: '48px',
              },
              '&.MuiButtonBase-root': {
                minHeight: '24px',
                pb: '8px',
              },
            }}
          />
        ))}
      </Tabs>
      <PortfolioInfo portfolio={portfolio} currentLocal={currentLocal} isXs1Up={isXs1Up} />
    </>
  );
};
