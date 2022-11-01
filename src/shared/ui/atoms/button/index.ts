import {Block} from "shared/classes";
import {template} from './button.tmpl';
import { IButton } from './types';


export class Button extends Block {
  constructor(props: IButton) {
    super(template, props);
  }

  render() {
    const { type, content } = this.props;

    return this.compile({ type, content });
  }
}
