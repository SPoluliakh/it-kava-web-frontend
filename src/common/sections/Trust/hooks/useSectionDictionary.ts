import { useCurrentLocal } from '@/common/hooks';
import { sectionDictionary } from '../dictionary';

export const useSectionDictionary = () => {
  const currentLocal = useCurrentLocal();
  return sectionDictionary[currentLocal];
};
