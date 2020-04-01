import { useCallback, useState } from 'react';

export interface ControlledInput {
  readonly value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
type UseControlledInput = (defaultValue: string) => ControlledInput;
export const useControlledInput: UseControlledInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>>(e => {
    setValue(e.target.value);
  }, []);

  return {
    value,
    onChange,
  };
};
