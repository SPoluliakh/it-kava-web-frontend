import { usePathname } from 'next/navigation';
import { TLocale, i18n } from '@/i18n-config';

export const useRedirectedPathName = () => {
  const pathName = usePathname();
  const segments = pathName.split('/');
  const currentLocal = segments[1];

  const redirectedPathName = (locale: TLocale) => {
    if (!pathName) return '/';
    segments[1] = locale;
    return segments.join('/');
  };

  const altLocal = i18n.locales.find(it => it !== currentLocal) || i18n.defaultLocale;
  const altPath = redirectedPathName(altLocal);

  return { redirectedPathName, pathName, altPath, altLocal };
};
