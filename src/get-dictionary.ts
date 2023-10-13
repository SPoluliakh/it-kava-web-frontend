import 'server-only';
import type { TLocale } from '@/i18n-config';
import {
  INotFoundDictionary,
  IHomeDictionary,
  IAboutDictionary,
  ICommonDictionary,
  IPortfolioDictionary,
  IPrivacyPolicyDictionary,
} from '@/common/interfaces/data/locale';

const common: Record<TLocale, () => Promise<ICommonDictionary>> = {
  en: () => import('@/data/locale/_common/en.json').then(module => module.default),
  ua: () => import('@/data/locale/_common/ua.json').then(module => module.default),
};
const home: Record<TLocale, () => Promise<IHomeDictionary>> = {
  en: () => import('@/data/locale/home/en.json').then(module => module.default),
  ua: () => import('@/data/locale/home/ua.json').then(module => module.default),
};
const about: Record<TLocale, () => Promise<IAboutDictionary>> = {
  en: () => import('@/data/locale/about/en.json').then(module => module.default),
  ua: () => import('@/data/locale/about/ua.json').then(module => module.default),
};
const notFound: Record<TLocale, () => Promise<INotFoundDictionary>> = {
  en: () => import('@/data/locale/not-found/en.json').then(module => module.default),
  ua: () => import('@/data/locale/not-found/ua.json').then(module => module.default),
};
const portfolio: Record<TLocale, () => Promise<IPortfolioDictionary>> = {
  en: () => import('@/data/locale/portfolio/en.json').then(module => module.default),
  ua: () => import('@/data/locale/portfolio/ua.json').then(module => module.default),
};
const privacyPolicy: Record<TLocale, () => Promise<IPrivacyPolicyDictionary>> = {
  en: () => import('@/data/locale/privacy-policy/en.json').then(module => module.default),
  ua: () => import('@/data/locale/privacy-policy/ua.json').then(module => module.default),
};

export const getDictionary = {
  common: async (locale: TLocale) => common[locale](),
  home: async (locale: TLocale) => home[locale](),
  about: async (locale: TLocale) => about[locale](),
  notFound: async (locale: TLocale) => notFound[locale](),
  portfolio: async (locale: TLocale) => portfolio[locale](),
  privacyPolicy: async (locale: TLocale) => privacyPolicy[locale](),
};
