import { useMedia } from '@/common/hooks';

export const useSize = () => {
  const { isXs1Up, isSmUp, isMdUp, isLgUp } = useMedia();
  if (isLgUp) return { width: 316, height: 240 };
  if (isMdUp) return { width: 268, height: 240 };
  if (isSmUp) return { width: 456, height: 348 };
  if (isXs1Up) return { width: 358, height: 268 };
  return { width: 342, height: 264 };
};
