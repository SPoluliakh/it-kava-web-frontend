import { useMedia } from '@/common/hooks';

export const useMediaVariant = () => {
  const { isSmUp, isXs1Up, isMdUp } = useMedia();

  if (isMdUp) return 'desktop';
  if (isSmUp) return 'xs1Up';
  if (isXs1Up) return 'tablet';

  return 'tablet';
};
