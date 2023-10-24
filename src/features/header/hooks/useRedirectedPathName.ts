import { usePathname } from 'next/navigation';
import { TLocale } from '@/i18n-config';

export const useRedirectedPathName = () => {
  const pathName = usePathname();
  const segments = pathName.split('/');
  const currentLocal = segments[1];

  const getHref = (local: TLocale) => {
    segments[1] = local;

    return segments.join('/');
  };

  return { getHref, currentLocal };
};
