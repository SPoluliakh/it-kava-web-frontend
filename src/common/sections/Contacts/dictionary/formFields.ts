import { TLocale } from '@/i18n-config';
import { TFormFieldDictionary } from '../interfaces';

const ua: TFormFieldDictionary = {
  fullName: {
    label: "Iм'я та Призвіще",
  },
  companyName: {
    label: 'Назва компанії',
  },
  phone: {
    label: 'Телефон',
  },
  email: {
    label: 'E-mail',
  },
  comment: {
    label: 'Коментарій',
  },
};

const en: TFormFieldDictionary = {
  fullName: {
    label: 'Full name',
  },
  companyName: {
    label: 'Company',
  },
  phone: {
    label: 'Phone',
  },
  email: {
    label: 'Email',
  },
  comment: {
    label: 'Comment',
  },
};

export const formFieldDictionary: Record<TLocale, TFormFieldDictionary> = {
  en,
  ua,
};
