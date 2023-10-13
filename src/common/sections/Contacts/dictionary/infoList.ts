import { TLocale } from '@/i18n-config';
import { IContactsInfoDictionary } from '../interfaces';

const ua: IContactsInfoDictionary = {
  connect: {
    title: 'Контакт',
  },
  support: {
    title: 'Підтримка',
  },
};

const en: IContactsInfoDictionary = {
  connect: {
    title: 'Connect',
  },
  support: {
    title: 'Support',
  },
};

export const infoListDictionary: Record<TLocale, IContactsInfoDictionary> = {
  en,
  ua,
};
