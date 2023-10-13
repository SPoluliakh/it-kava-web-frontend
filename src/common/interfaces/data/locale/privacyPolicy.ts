import { ITextBannerDictionary } from '@/common/sections/TextBanner/interfaces';

export interface IPrivacyPolicyDictionary {
  banner: ITextBannerDictionary;
  content: {
    text: string[];
  };
}
