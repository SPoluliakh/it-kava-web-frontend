import { FormikHelpers } from 'formik';
import { TLocale } from '@/i18n-config';

export type TFieldNames = 'name' | 'email' | 'phone' | 'message';

export type TFormValues = Record<TFieldNames, string>;

export type TSubmit = (values: TFormValues, actions: FormikHelpers<TFormValues>) => void;

type TValidateTypes = 'min' | 'required' | 'matches';
export type TValidateDictionary = Omit<
  Record<TFieldNames, Partial<Record<TValidateTypes, string>>>,
  'phone'
>;

type TFormFieldTypes = 'label';
export type TFormFieldDictionary = Record<TFieldNames, Record<TFormFieldTypes, string>>;
export type TFormBtnDictionary = Record<TLocale, string>;
export type TPolicyDictionary = Record<TLocale, string[]>;
export type TTitleDictionary = Record<TLocale, string>;

export interface IFieldListItem {
  name: TFieldNames;
  required?: boolean;
}
