import {BlockProps} from "shared/types";
import {Form, Link} from "shared/ui";

export interface ILogin extends BlockProps {
  form: Form;
  link?: Link;
}
