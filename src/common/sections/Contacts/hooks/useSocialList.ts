import { ISocialItem } from '../interfaces';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/common/icons';

const socialList: ISocialItem[] = [
  {
    url: '#',
    icon: FacebookIcon,
  },
  {
    url: '#',
    icon: LinkedInIcon,
  },
  {
    url: '#',
    icon: TwitterIcon,
  },
];

export const useSocialList = () => socialList;
