import { IPortfolio, IPortfolioMenu } from '../interfaces';
import { useChangePortfolio, usePortfolioVariants } from '../hooks';
import { MobilePortfolioTabsItem } from './MobilePortfolioTabsItem';
import { PortfolioInfo } from './PortfolioInfo';
import { useLang } from '@/features/header/hooks';
import { useMedia } from '@/common/hooks';

interface Props {
  portfolioMenu: IPortfolioMenu[];
  portfolio: IPortfolio[];
}

export const MobilePortfolioTabsPanel = ({ portfolioMenu, portfolio }: Props) => {
  const { handlePanelChange, expanded, handleExpandedChange } = useChangePortfolio();
  const { portfolioVariant, selectedItem, handleMenuItemClick } =
    usePortfolioVariants(portfolioMenu);
  const currentLocal = useLang();
  const { isXs1Up } = useMedia();

  return (
    <>
      <MobilePortfolioTabsItem
        expanded={expanded}
        handlePanelChange={handlePanelChange}
        selectedItem={selectedItem}
        portfolioVariant={portfolioVariant}
        handleMenuItemClick={handleMenuItemClick}
        handleExpandedChange={handleExpandedChange}
      />

      <PortfolioInfo portfolio={portfolio} currentLocal={currentLocal} isXs1Up={isXs1Up} />
    </>
  );
};
