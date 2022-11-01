import {Block} from "../../../classes";
import {template} from './form-error.tmpl';
import { IFormError } from './types';


export class FormError extends Block {
  constructor(props: IFormError) {
    super(template, props);
  }

  render() {
    const { error } = this.props;

    return this.compile({ error });
  }
}
