import { TVariant } from '../interfaces';

const variant = {
  regular: {
    width: { xs: '100%', xs1: '342px', sm: '205px' },
    mt: { xs: '56px', sm: 0 },
    height: '36px',
  },
  fixed: {
    maxWidth: '56px',
    height: '56px',
    border: 'none',
    p: 0,
    position: 'fixed',
    bottom: { xs: '8px', sm: '24px', md: '32px' },
    right: { xs: '8px', sm: '24px', md: '32px' },

    zIndex: 10,
  },
};

export const useBtnVariant = (type: TVariant) => {
  const btnVariant = variant[type];
  return btnVariant;
};
