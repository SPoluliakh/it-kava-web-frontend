import { TOrderedServiceItemName } from '@/common/interfaces';
import { ITextBannerDictionary } from '@/common/sections/TextBanner/interfaces';

export interface IAboutDictionary {
  banner: ITextBannerDictionary;
  featureOne: {
    title: string;
    coloredSubtitle: string[];
    text: string[];
  };
  services: {
    title: string;
    subtitle: string;
    list: Record<TOrderedServiceItemName, { title: string; text: string }>;
  };
  ourVision: {
    title: string;
    text: string;
  };
  achievements: {
    title: string;
    subtitle: string;
    text: string;
    list: Array<{
      value: string;
      head: string;
    }>;
  };
  trust: {
    title: string;
    text: string;
  };
}
