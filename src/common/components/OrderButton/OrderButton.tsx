import { Button } from '@mui/material';
import { Popup } from '../Popup';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';
import { useApollo, usePopup } from '../Popup/hooks';
import { CallbackForm } from '../CallbackForm';
import { useForm } from '../CallbackForm/hooks';

interface Props {
  dictionary: IPortfolioDictionary['banner'];
}

export const OrderButton = ({ dictionary }: Props) => {
  const { handleClose, handleOpen, isOpen } = usePopup();
  const { onSubmit } = useApollo(handleClose);
  const { dictionary: translate } = useForm(onSubmit);
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        sx={{ width: { xs: '100%', sm: '204px' }, mt: { xs: '56px', sm: 0 }, height: '40px' }}
      >
        {dictionary.orderServiceBtn}
      </Button>
      <Popup title={translate.title} open={isOpen} onClose={handleClose}>
        <CallbackForm onSubmit={onSubmit} />
      </Popup>
    </>
  );
};
