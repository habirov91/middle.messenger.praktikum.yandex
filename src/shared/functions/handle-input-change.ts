import {Input} from "shared/ui/atoms/input";

export const handleInputChange = (input: Input, e: FocusEvent) => {
  const element = e.target as HTMLInputElement;
  input.setProps({ value: element.value });
};
