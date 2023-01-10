import Block from '../../../../classes/block';
import template from './error.tmpl';
import { IFormError } from './types';

export default class FormError extends Block<IFormError> {
  constructor(props: IFormError) {
    super(template, props);
  }

  render() {
    const { error } = this.props;

    return this.compile({ error });
  }
}
