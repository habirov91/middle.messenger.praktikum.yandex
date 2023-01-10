import Block from '../../../classes/block';
import {template} from './form.tmpl';
import { IForm } from './types';

export class Form extends Block<IForm> {
  constructor(props: IForm) {
    super(template, props);
  }

  render() {
    const { vertical, fields, button } = this.props;

    return this.compile({ vertical, fields, button });
  }
}
