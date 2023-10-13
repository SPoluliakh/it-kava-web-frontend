import { TLocale } from '@/i18n-config';
import { TValidateDictionary } from '../interfaces';

const ua: TValidateDictionary = {
  name: {
    min: 'Не менше 3 символів',
    required: "Обов'язкове поле",
  },
  email: {
    required: "Обов'язкове поле",
    matches: 'Некоректний формат email',
  },
  message: {
    min: 'Не менше 3 символів',
    required: "Обов'язкове поле",
  },
};

const en: TValidateDictionary = {
  name: {
    min: "Don't less 3 symbol",
    required: 'Required field',
  },
  email: {
    required: 'Required field',
    matches: 'Incorrect email',
  },
  message: {
    min: "Don't less 3 symbol",
    required: 'Required field',
  },
};

export const formValidationDictionary: Record<TLocale, TValidateDictionary> = {
  en,
  ua,
};
