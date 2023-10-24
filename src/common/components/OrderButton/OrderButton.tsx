import { Button } from '@mui/material';
import { Popup } from '../Popup';
import { IPortfolioDictionary } from '@/common/interfaces/data/locale';
import { useApollo, usePopup } from '../Popup/hooks';
import { CallbackForm } from '../CallbackForm';
import { useForm } from '../CallbackForm/hooks';
import { Phone } from '@/common/icons';
import { useBtnVariant } from './hooks';
import { TVariant } from './interfaces';

interface Props {
  dictionary?: IPortfolioDictionary['banner'];
  variant: TVariant;
}

export const OrderButton = ({ dictionary, variant }: Props) => {
  const { handleClose, handleOpen, isOpen } = usePopup();
  const { onSubmit } = useApollo(handleClose);
  const { dictionary: translate } = useForm(onSubmit);

  const btnVariant = useBtnVariant(variant);
  return (
    <>
      <Button
        variant={variant === 'regular' ? 'contained' : 'text'}
        color="secondary"
        onClick={handleOpen}
        sx={{
          ...btnVariant,
        }}
      >
        {dictionary?.orderServiceBtn ?? <Phone />}
      </Button>
      <Popup title={translate.title} open={isOpen} onClose={handleClose}>
        <CallbackForm onSubmit={onSubmit} />
      </Popup>
    </>
  );
};
