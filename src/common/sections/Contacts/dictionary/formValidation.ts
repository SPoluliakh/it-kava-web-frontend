import { TLocale } from '@/i18n-config';
import { TValidateDictionary } from '../interfaces';

const ua: TValidateDictionary = {
  fullName: {
    min: 'не менше 3 символів',
    required: "Обов'язкове поле",
  },
  companyName: {
    min: 'не менше 3 символів',
    required: "Обов'язкове поле",
  },
  email: {
    required: "Обов'язкове поле",
    matches: 'Некоректний формат email',
  },
  comment: {
    min: 'не менше 3 символів',
    required: "Обов'язкове поле",
  },
};

const en: TValidateDictionary = {
  fullName: {
    min: "Don't less 3 symbol",
    required: 'Required field',
  },
  companyName: {
    min: "Don't less 3 symbol",
    required: 'Required field',
  },
  email: {
    required: 'Required field',
    matches: 'Incorrect email',
  },
  comment: {
    min: "Don't less 3 symbol",
    required: 'Required field',
  },
};

export const formValidationDictionary: Record<TLocale, TValidateDictionary> = {
  en,
  ua,
};
