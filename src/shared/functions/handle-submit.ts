import {getFormValues} from './get-form-values';
import { validateForm } from './validate-form';
import { FormValues, ValidationSchema } from '../types';
import { IFields } from '../ui/atoms/form/types';

interface HandleSubmitProps {
  fields: IFields[];
  e: SubmitEvent;
  validationSchema?: ValidationSchema;
}

export function handleSubmit<T extends FormValues>({
  fields,
  e,
  validationSchema,
}: HandleSubmitProps) {
  e.preventDefault();

  const data = getFormValues<T>(e.target);

  return {
    data,
    isValid: validationSchema
      ? validateForm(fields, data, validationSchema)
      : true,
  };
}
