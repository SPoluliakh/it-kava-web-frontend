import { useCurrentLocal } from '@/common/hooks';
import { infoListDictionary } from '../dictionary';

export const useInfoDictionary = () => {
  const currentLocal = useCurrentLocal();
  return infoListDictionary[currentLocal];
};
