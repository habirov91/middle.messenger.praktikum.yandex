import Block from '../../../../../classes/block';
import template from './chat.tmpl';
import { IChat } from './types';

export default class Chat extends Block<IChat> {
  constructor(props: IChat) {
    super(template, props);
  }

  render() {
    const { avatar, title, sender, message, unread, time } = this.props;

    return this.compile({
      avatar,
      title,
      sender,
      message,
      time,
      unread,
    });
  }
}
