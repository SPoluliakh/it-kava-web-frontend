import { useState } from 'react';

export const useTabsChange = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return { value, handleChange };
};
