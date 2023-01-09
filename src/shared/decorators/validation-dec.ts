import { handleSubmit } from 'shared/functions';
import { FormControllerProps } from 'shared/classes';
import { FormValues, ValidationSchema } from '../types';

export function validationDec(
  validationSchema: ValidationSchema,
  dataKey?: string,
) {
  return function <T extends FormValues>(
    target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: FormControllerProps[]) {
      const { fields, e } = args[0];

      const { data, isValid } = handleSubmit<T>({
        fields,
        e,
        validationSchema,
      });

      if (isValid && target) {
        if (dataKey) {
          target[dataKey] = data;
        } else {
          target.data = data;
        }
        originalMethod.apply(this, args);
      }
    };
    return descriptor;
  };
}
