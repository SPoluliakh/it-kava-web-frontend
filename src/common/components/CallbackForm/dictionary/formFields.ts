import { TLocale } from '@/i18n-config';
import { TFormFieldDictionary } from '../interfaces';

const ua: TFormFieldDictionary = {
  name: {
    label: "Ім'я*",
  },
  phone: {
    label: 'Телефон',
  },
  email: {
    label: 'E-mail*',
  },
  message: {
    label: 'Коментарій',
  },
};

const en: TFormFieldDictionary = {
  name: {
    label: 'Name*',
  },
  phone: {
    label: 'Phone',
  },
  email: {
    label: 'Email*',
  },
  message: {
    label: 'Comment',
  },
};

export const formFieldDictionary: Record<TLocale, TFormFieldDictionary> = {
  en,
  ua,
};
