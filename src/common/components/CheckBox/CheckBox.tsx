import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ISxProps } from '../../interfaces';

interface Props {
  children: React.ReactNode;
  sx?: ISxProps;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({ children, sx, handleChange, checked }: Props) => (
  <FormControlLabel
    control={
      <Checkbox
        required={true}
        checked={checked}
        onChange={handleChange}
        color="primary"
        sx={{
          '& .MuiSvgIcon-root': {
            color: 'primary.c300',
            borderRadius: '4px',
          },
        }}
      />
    }
    label={children}
    sx={{
      justifyContent: 'flex-start',
      mr: 0,
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '150%',
      textAlign: 'left',
      color: 'secondary.c900',
      ...sx,
    }}
  />
);
