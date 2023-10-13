import { Box, Button, Stack } from '@mui/material';
import { useForm } from './hooks';
import { SubmitInterface } from '@/common/components/Popup/interfaces';
import { TextField } from '../TextField';
import { CheckBox } from '../CheckBox';
import { PrivacyPolicy } from '../PrivacyPolicy';

interface Props {
  onSubmit: SubmitInterface;
}

export const CallbackForm = ({ onSubmit }: Props) => {
  const {
    form: { errors, values, touched, isValid, handleChange, handleBlur, handleSubmit },
    fieldList,
    dictionary,
  } = useForm(onSubmit);

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      sx={{
        justifyContent: { sm: ' center' },
        width: { sm: '100%' },
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
      <Box>
        <CheckBox>
          <PrivacyPolicy text={dictionary.policy} />
        </CheckBox>
        <Button
          variant="contained"
          type="submit"
          disabled={!isValid}
          sx={{
            width: '100%',
            height: '40px',
            mt: '48px',
          }}
        >
          {dictionary.btn}
        </Button>
      </Box>
    </Stack>
  );
};
