import { FormValues, ValidationSchema } from '../types';
import { IFields } from '../ui/atoms/form/types';
import {getCurField} from './get-cur-field';
import { setErrors, removeErrors } from './handle-error';

export function validateForm(
  fields: IFields[],
  formValues: FormValues,
  validationSchema: ValidationSchema,
) {
  let isValid = true;

  Object.entries(formValues).forEach(([name, value]) => {
    if (!validationSchema[name]) {
      isValid = false;
      throw new Error(`No validation rule for field ${name}`);
    }

    const field = getCurField(name, fields);

    if (!field) {
      isValid = false;
      return;
    }
    const { rule, error } = validationSchema[name];

    if (rule instanceof RegExp) {
      rule.lastIndex = 0;
      if (!rule.test(value)) {
        isValid = setErrors(field, error);
      } else {
        removeErrors(field);
      }
    } else if (typeof rule === 'function') {
      if (!rule(value)) {
        isValid = setErrors(field, error);
      } else {
        removeErrors(field);
      }
    } else {
      const matchField = rule.equal;
      if (formValues[matchField] !== value) {
        isValid = setErrors(field, error);
      } else {
        removeErrors(field);
      }
    }
  });

  return isValid;
}
