import Input from '../ui/atoms/form/input';
import FormError from '../ui/atoms/form/error';
import FileInput from '../ui/atoms/form/fileInput';
import { ValidationSchema } from '../types';
import { IFields } from '../ui/atoms/form/types';
import { setErrors, removeErrors } from './handle-error';
import {getCurField} from './get-cur-field';

export function validateField(
  input: Input | FileInput,
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
      setErrors({ input, error: formError }, error);
    } else {
      removeErrors({ input, error: formError });
    }
  } else if (typeof rule === 'function') {
    if (!rule(value)) {
      setErrors({ input, error: formError }, error);
    } else {
      removeErrors({ input, error: formError });
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
      setErrors({ input, error: formError }, error);
    } else {
      removeErrors({ input, error: formError });
    }
  }
}
