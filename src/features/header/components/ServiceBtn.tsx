import { Button } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton } from '@/common/components';
import { Popup } from '@/common/components/Popup';
import { CallbackForm } from '@/common/components/CallbackForm';
import { useApollo, usePopup } from '@/common/components/Popup/hooks';
import { useForm } from '@/common/components/CallbackForm/hooks';

interface Props {
  variant?: 'icon' | 'text';
  orderServiceBtn: string;
}

export const ServiceBtn = ({ variant = 'icon', orderServiceBtn }: Props) => {
  const { handleClose, handleOpen, isOpen } = usePopup();
  const { onSubmit } = useApollo(handleClose);
  const { dictionary } = useForm(onSubmit);

  if (variant === 'text')
    return (
      <>
        <Button variant="contained" size="large" sx={{ alignSelf: 'center' }} onClick={handleOpen}>
          {orderServiceBtn}
        </Button>
        <Popup title={dictionary.title} open={isOpen} onClose={handleClose}>
          <CallbackForm onSubmit={onSubmit} />
        </Popup>
      </>
    );

  return (
    <>
      <IconButton variant="icon" aria-label={orderServiceBtn} onClick={handleOpen}>
        <ShoppingBasketIcon />
      </IconButton>
      <Popup title={dictionary.title} open={isOpen} onClose={handleClose}>
        <CallbackForm onSubmit={onSubmit} />
      </Popup>
    </>
  );
};
