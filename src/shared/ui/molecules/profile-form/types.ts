import {BlockProps} from "../../../types";
import {Avatar} from "../../atoms/avatar";
import {Form} from "../form";


export interface IProfileForm extends BlockProps {
  avatar: Avatar;
  form: Form;
}
