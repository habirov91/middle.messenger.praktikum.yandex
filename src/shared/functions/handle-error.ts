import { IFields } from '../ui/atoms/form/types';

export const setErrors = (field: IFields, error: string) => {
  field.input.setProps({ error });
  field.error?.setProps({ error });
  return false;
};

export const removeErrors = (field: IFields) => {
  field.input.setProps({ error: undefined });
  field.error?.setProps({ error: undefined });
};
