import { IFields } from 'shared/ui/molecules/form/types';
import { getFormValues } from './get-form-values';
import { validateForm } from './validate-form';
import { ValidationSchema } from '../types';

interface HandleSubmitProps {
  fields: IFields[];
  e: SubmitEvent;
  validationSchema?: ValidationSchema;
}

export function handleSubmit({ fields, e, validationSchema }: HandleSubmitProps) {
  e.preventDefault();

  const formValues = getFormValues(e.target);

  if (validationSchema) {
    validateForm(fields, formValues, validationSchema);
  }

  console.log(formValues);
}
