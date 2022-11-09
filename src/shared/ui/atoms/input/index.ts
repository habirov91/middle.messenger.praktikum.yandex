import { Block } from '../../../classes';
import { template } from './input.tmpl';
import { IInput } from './types';

export class Input extends Block<IInput> {
  constructor(props: IInput) {
    super(template, props);
  }

  render() {
    const { type, name, placeholder, error, value } = this.props;

    return this.compile({ type, name, placeholder, error, value });
  }
}
