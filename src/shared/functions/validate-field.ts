import { Input } from 'shared/ui/atoms/input';
import { FormError } from 'shared/ui/atoms/form-error';
import { IFields } from 'shared/ui/molecules/form/types';
import { getCurField } from './get-cur-field';
import { ValidationSchema } from '../types';

export function validateField(
  input: Input,
  formError: FormError,
  validationSchema: ValidationSchema,
  fields?: IFields[],
) {
  const { value, name } = input.element as HTMLInputElement;

  if (!validationSchema[name]) {
    return;
  }

  const { rule, error } = validationSchema[name];

  if (rule instanceof RegExp) {
    rule.lastIndex = 0;
    if (!rule.test(value)) {
      input.setProps({ error });
      formError.setProps({ error });
    } else {
      input.setProps({ error: undefined });
      formError.setProps({ error: undefined });
    }
  } else {
    if (!fields) {
      return;
    }
    const matchField = rule.equal;
    const field = getCurField(matchField, fields);

    if (!field || !field.input.element) {
      return;
    }

    const requiredVal = (field.input.element as HTMLInputElement).value;

    if (requiredVal !== value) {
      input.setProps({ error });
      formError.setProps({ error });
    } else {
      input.setProps({ error: undefined });
      formError.setProps({ error: undefined });
    }
  }
}
