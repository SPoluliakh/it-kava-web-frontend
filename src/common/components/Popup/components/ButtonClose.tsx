import { IconButton } from '@mui/material';
import { Close } from '@/common/icons';
import { ISxProps } from '@/common/interfaces';

interface Props {
  onClick(event: React.KeyboardEvent | React.MouseEvent): void;
  size?: number;
  color?: string;
  sx?: ISxProps;
}

export const ButtonClose = ({ onClick, sx, size }: Props) => (
  <IconButton aria-label="close" onClick={onClick} sx={sx}>
    <Close size={size} />
  </IconButton>
);
