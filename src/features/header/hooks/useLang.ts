import { usePathname } from 'next/navigation';

type lang = 'en' | 'ua';

export const useLang = () => {
  const pathName = usePathname();
  const segments = pathName.split('/');
  const currentLocal = segments[1];
  return currentLocal as lang;
};
