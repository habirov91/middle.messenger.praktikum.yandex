import { FormValues } from '../types';

export function getFormValues<T extends FormValues>(
  eventTarget: EventTarget | null,
): T {
  const form = eventTarget as HTMLElement;

  const nodeList = form.querySelectorAll('input');

  if (nodeList.length === 0) {
    throw Error('No input fields were found');
  }

  const inputFields = Array.from(nodeList);

  return Object.fromEntries(
    inputFields.map(({ name, value, type, files }) => {
      if (type === 'file' && files) {
        return [name, files[0]];
      }
      return [name, value];
    }),
  ) as T;
}
