import { usePathname } from 'next/navigation';

export const useCurrentHref = (href: string) => {
  const pathName = usePathname().split('/')[2];
  const currentHref = href.slice(1) === pathName ? 'current' : '';
  return currentHref;
};
