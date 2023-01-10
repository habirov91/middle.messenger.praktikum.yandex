import Block from '../../../classes/block';
import {template} from './button.tmpl';
import { IButton } from './types';

export class Button extends Block<IButton> {
  constructor(props: IButton) {
    super(template, props);
  }

  render() {
    const { type, content, transparent } = this.props;

    return this.compile({ type, content, transparent });
  }
}
