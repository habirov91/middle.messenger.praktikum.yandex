import {BlockProps} from "shared/types";
import {Form, Link} from "shared/ui";

export interface IRegister extends BlockProps {
  form: Form;
  link?: Link;
}
