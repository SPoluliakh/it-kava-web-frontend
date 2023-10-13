import { FC } from 'react';
import { FormikHelpers } from 'formik';
import { TLocale } from '@/i18n-config';

export type TFieldNames = 'fullName' | 'companyName' | 'email' | 'phone' | 'comment';

export type TFormValues = Record<TFieldNames, string>;

export type TSubmit = (values: TFormValues, actions: FormikHelpers<TFormValues>) => void;

export interface ISocialItem {
  url: string;
  icon: FC;
}

type TValidateTypes = 'min' | 'required' | 'matches';
export type TValidateDictionary = Omit<
  Record<TFieldNames, Partial<Record<TValidateTypes, string>>>,
  'phone'
>;

type TFormFieldTypes = 'label';
export type TFormFieldDictionary = Record<TFieldNames, Record<TFormFieldTypes, string>>;
export type TFormBtnDictionary = Record<TLocale, string>;

type TSectionTypes = 'title' | 'text';
export type TSectionDictionary = Record<TSectionTypes, string>;

export interface IContactsInfoDictionary {
  connect: {
    title: string;
  };
  support: {
    title: string;
  };
}

export interface IFieldListItem {
  name: TFieldNames;
  order: number;
  required?: boolean;
}
