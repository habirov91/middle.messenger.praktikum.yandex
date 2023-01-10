import { IFields } from '../ui/atoms/form/types';

export function setFormError(fields: IFields[], error: string) {
  fields.forEach((field) => {
    field.input.setProps({ error });
    field.error?.setProps({ error });
  });
}
