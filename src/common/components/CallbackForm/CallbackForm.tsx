import { Button, Stack } from '@mui/material';
import { useForm } from './hooks';
import { SubmitInterface } from '@/common/components/Popup/interfaces';
import { TextField } from '../TextField';
import { CheckBox } from '../CheckBox';
import { PrivacyPolicy } from '../PrivacyPolicy';
import { useCheckbox } from '../CheckBox/hooks';

interface Props {
  onSubmit: SubmitInterface;
}

export const CallbackForm = ({ onSubmit }: Props) => {
  const {
    form: { errors, values, touched, isValid, handleChange, handleBlur, handleSubmit },
    fieldList,
    dictionary,
  } = useForm(onSubmit);

  const { checked, handleChange: handleAgreeChange } = useCheckbox();

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      sx={{
        justifyContent: { sm: ' center' },
        width: { sm: '100%' },
        height: '100%',
        flexGrow: 1,
      }}
    >
      {fieldList.map(it => (
        <TextField
          key={it.name}
          name={it.name}
          label={dictionary.field[it.name].label}
          value={values[it.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors[it.name]}
          touched={touched[it.name]}
        />
      ))}
      <CheckBox checked={checked} handleChange={handleAgreeChange}>
        <PrivacyPolicy text={dictionary.policy} />
      </CheckBox>
      <Button
        variant="contained"
        type="submit"
        disabled={!isValid || !checked}
        sx={{
          width: '100%',
          height: '40px',
          mt: { xs: 'auto', sm: '48px' },
        }}
      >
        {dictionary.btn}
      </Button>
    </Stack>
  );
};
