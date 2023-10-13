import { useState, ChangeEvent } from 'react';

export const useCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return { checked, handleChange };
};
