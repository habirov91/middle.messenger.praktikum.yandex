import {Block} from "shared/classes";
import {template} from './system-message.tmpl';
import { ISystemMessage } from './types';

export class SystemMessage extends Block {
  constructor(props: ISystemMessage) {
    super(template, props);
  }

  render() {
    const { message } = this.props;

    return this.compile({ message });
  }
}
