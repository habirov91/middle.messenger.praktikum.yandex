import { FormValues } from '../types';

export function getFormValues(eventTarget: EventTarget | null): FormValues {
  const form = eventTarget as HTMLElement;

  const nodeList = form.querySelectorAll('input');

  if (nodeList.length === 0) {
    throw Error('No input fields were found');
  }

  const inputFields = Array.from(nodeList);

  const formValues: FormValues = {};

  inputFields.forEach((input) => {
    formValues[input.name] = input.value;
  });

  return formValues;
}
