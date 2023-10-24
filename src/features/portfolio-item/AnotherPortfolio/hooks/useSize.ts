import { useMedia } from '@/common/hooks';

export const useSize = () => {
  const { isXs1Up, isSmUp, isMdUp, isLgUp } = useMedia();
  if (isLgUp) return { width: 1312, height: 640 };
  if (isMdUp) return { width: 1120, height: 640 };
  if (isSmUp) return { width: 928, height: 640 };
  if (isXs1Up) return { width: 720, height: 640 };
  return { width: 342, height: 216 };
};
