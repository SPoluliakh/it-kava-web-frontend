import {
  SubmitActionsInterface,
  SubmitValuesInterface,
} from '@/common/components/Popup/interfaces';

type CloseFuncType = () => void;

export const useApollo = (onClose: CloseFuncType) => {
  const onSubmit = (values: SubmitValuesInterface, actions: SubmitActionsInterface) => {
    actions.resetForm();
    onClose();
  };

  return {
    onSubmit,
  };
};
