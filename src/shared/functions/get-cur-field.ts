import {IFields} from "shared/ui/molecules/form/types";

export function getCurField(name: string, fields: IFields[]) {
  return fields.find(({ input: { element } }) => {
    if (!element) {
      return false;
    }

    return (element as HTMLInputElement).name === name;
  });
}
