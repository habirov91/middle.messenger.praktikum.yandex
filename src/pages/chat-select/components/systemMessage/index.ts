import Block from 'shared/classes/block';
import template from './system-message.tmpl';
import { ISystemMessage } from './types';

export default class SystemMessage extends Block<ISystemMessage> {
  constructor(props: ISystemMessage) {
    super(template, props);
  }

  render() {
    const { message } = this.props;

    return this.compile({ message });
  }
}
