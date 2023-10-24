import { useMedia } from '@/common/hooks';

export const useSize = () => {
  const { isXs1Up, isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { width: 530, height: 469 };
  if (isSmUp) return { width: 436, height: 386 };
  if (isXs1Up) return { width: 472, height: 471 };
  return { width: 348, height: 348 };
};
