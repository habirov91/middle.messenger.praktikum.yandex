import {Link} from "shared/ui";
import {BlockProps} from "../../../types";
import {Button} from '../../atoms/button';
import {Input} from '../../atoms/input';
import {FormError} from '../../atoms/form-error';


export interface IFields {
  input: Input;
  error?: FormError;
}

export interface IForm extends BlockProps {
  vertical?: boolean;
  fields: IFields[];
  button: Button;
  link?: Link;
}
