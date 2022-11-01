import {Block} from "../../../classes";
import {template} from './form.tmpl';
import { IForm } from './types';


export class Form extends Block {
  constructor(props: IForm) {
    super(template, props);
  }

  render() {
    const { vertical, fields, button } = this.props;

    return this.compile({ vertical, fields, button });
  }
}
