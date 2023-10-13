import { useMemo, useState } from 'react';

export const usePortfolioVariants = (portfolioMenu: { name: string; href: string }[]) => {
  const [selectedItem, setSelectedItem] = useState<string>(portfolioMenu[0].name);

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const portfolioVariant = useMemo(
    () => portfolioMenu.filter(course => course.name !== selectedItem),
    [selectedItem, portfolioMenu]
  );

  return { portfolioVariant, selectedItem, handleMenuItemClick };
};
