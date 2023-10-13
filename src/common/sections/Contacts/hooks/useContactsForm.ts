import { useFormik } from 'formik';
import * as yup from 'yup';
import { emailRegex } from '@/common/variables';
import {
  TFormValues,
  TSubmit,
  TFieldNames,
  TValidateDictionary,
  IFieldListItem,
} from '../interfaces';
import { formBtnDictionary, formFieldDictionary, formValidationDictionary } from '../dictionary';
import { useCurrentLocal } from '@/common/hooks';

const initialValues: TFormValues = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  comment: '',
};

const fieldList: IFieldListItem[] = [
  { name: 'fullName', order: 1, required: true },
  { name: 'companyName', order: 2, required: true },
  { name: 'phone', order: 3 },
  { name: 'email', order: 4, required: true },
];

const onSubmit: TSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const validationSchema = (dictionary: TValidateDictionary) =>
  yup.object().shape<Partial<Record<TFieldNames, yup.AnySchema>>>({
    fullName: yup
      .string()
      .min(3, dictionary.fullName.min)
      .required(dictionary.fullName.required)
      .trim(),
    companyName: yup
      .string()
      .min(3, dictionary.companyName.min)
      .required(dictionary.companyName.required)
      .trim(),
    email: yup
      .string()
      .required(dictionary.email.required)
      .trim()
      .matches(emailRegex, dictionary.email.matches),
    comment: yup
      .string()
      .min(3, dictionary.comment.min)
      .required(dictionary.comment.required)
      .trim(),
  });

export const useContactsForm = () => {
  const currentLocal = useCurrentLocal();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(formValidationDictionary[currentLocal]),
    onSubmit,
  });

  const dictionary = {
    field: formFieldDictionary[currentLocal],
    btn: formBtnDictionary[currentLocal],
  };

  return { formik, dictionary, fieldList };
};
