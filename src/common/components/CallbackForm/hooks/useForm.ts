import { useFormik } from 'formik';
import * as yup from 'yup';
import { SubmitInterface } from '../../Popup/interfaces';
import { emailRegex } from '@/common/variables';
import { TFormValues, IFieldListItem, TFieldNames, TValidateDictionary } from '../interfaces';
import {
  formBtnDictionary,
  formPolicyDictionary,
  formFieldDictionary,
  formValidationDictionary,
  formTitleDictionary,
} from '../dictionary';
import { useCurrentLocal } from '@/common/hooks';

const initialValues: TFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const fieldList: IFieldListItem[] = [
  { name: 'name', required: true },
  { name: 'email', required: true },
  { name: 'phone' },
  { name: 'message' },
];

const validationSchema = (dictionary: TValidateDictionary) =>
  yup.object().shape<Partial<Record<TFieldNames, yup.AnySchema>>>({
    name: yup.string().min(3, dictionary.name.min).required(dictionary.name.required).trim(),
    phone: yup.string().trim(),
    email: yup
      .string()
      .required(dictionary.email.required)
      .trim()
      .matches(emailRegex, dictionary.email.matches),
    message: yup.string().trim(),
  });

export const useForm = (onSubmit: SubmitInterface) => {
  const currentLocal = useCurrentLocal();
  const form = useFormik({
    initialValues,
    validationSchema: validationSchema(formValidationDictionary[currentLocal]),
    onSubmit,
  });
  const dictionary = {
    field: formFieldDictionary[currentLocal],
    btn: formBtnDictionary[currentLocal],
    policy: formPolicyDictionary[currentLocal],
    title: formTitleDictionary[currentLocal],
  };

  return { form, fieldList, dictionary };
};
