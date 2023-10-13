import { ReactNode } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import { ButtonClose } from './components';

interface Props {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

export const Popup = ({ children, title, open, onClose }: Props) => (
  <Dialog
    onClose={onClose}
    open={open}
    aria-labelledby="draggable-dialog-title"
    sx={{
      '& .MuiPaper-root': {
        width: { xs: '100%', sm: '394px' },
        height: { xs: '100%', sm: 'auto' },
        maxHeight: { xs: '100%' },
        m: 0,
        p: '32px 16px',
        backgroundColor: 'primary.c50',
      },
    }}
  >
    <ButtonClose
      onClick={onClose}
      size={24}
      sx={{
        position: 'absolute',
        right: 4,
        top: 4,
        color: 'primary.c500',
      }}
    />
    <DialogTitle
      variant={'h1'}
      component={'h1'}
      color={'primary.c500'}
      sx={{
        p: 0,
        mb: { xs: '70px', sm: '16px' },
      }}
    >
      {title}
    </DialogTitle>
    {children}
  </Dialog>
);
