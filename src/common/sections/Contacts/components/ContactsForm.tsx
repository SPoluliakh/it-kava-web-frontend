import { Button, Stack, SxProps, Theme } from '@mui/material';
import { TextField } from '@/common/components';
import { useContactsForm } from '../hooks';

interface Props {
  sx?: SxProps<Theme>;
}

export const ContactsForm = ({ sx }: Props) => {
  const {
    formik: { errors, values, touched, handleChange, handleBlur, handleSubmit, isValid },
    dictionary,
    fieldList,
  } = useContactsForm();

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      sx={{
        justifyContent: { xs1: ' center' },
        width: { sm: '644px' },
        ...sx,
      }}
    >
      <Stack
        sx={{
          display: { xs1: 'grid' },
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: { xs: 1 },
          columnGap: { sm: 3 },
          mb: { xs: 1, sm: 3 },
        }}
      >
        {fieldList.map(it => (
          <TextField
            key={it.name}
            name={it.name}
            className={it.required ? 'required' : ''}
            label={dictionary.field[it.name].label}
            value={values[it.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors[it.name]}
            touched={touched[it.name]}
            sxVariant="contacts"
            sx={{ order: it.order }}
          />
        ))}

        <TextField
          name="comment"
          label={dictionary.field.comment.label}
          value={values.comment}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.comment}
          touched={touched.comment}
          sxVariant="contacts"
          multiline
          minRows={3}
          maxRows={6}
          sx={{ gridColumn: '1 / span 2', order: 5 }}
        />
      </Stack>
      <Button
        type="submit"
        variant="contained"
        disabled={!isValid}
        sx={{
          alignSelf: { xs1: 'flex-end' },
          mr: { xs1: '76px', md: 0 },
          width: { xs: '100%', xs1: '166px' },
        }}
      >
        {dictionary.btn}
      </Button>
    </Stack>
  );
};
