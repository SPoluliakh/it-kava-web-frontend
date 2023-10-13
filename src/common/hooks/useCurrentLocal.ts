import { usePathname } from 'next/navigation';
import { TLocale } from '@/i18n-config';

export const useCurrentLocal = () => {
  const pathName = usePathname();
  const segments = pathName.split('/');
  return segments[1] as TLocale;
};
