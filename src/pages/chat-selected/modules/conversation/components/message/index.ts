import Block from 'shared/classes/block';
import template from './message.tmpl';
import { IMessage } from './types';

export default class Message extends Block<IMessage> {
  constructor(props: IMessage) {
    super(template, props);
  }

  render() {
    const { own, content, status, time } = this.props;

    return this.compile({
      own,
      content,
      status,
      time,
    });
  }
}
