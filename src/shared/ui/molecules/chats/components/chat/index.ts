
import {template} from './chat.tmpl';
import { IChat } from './types';
import {Block} from "../../../../../classes";

export class Chat extends Block {
  constructor(props: IChat) {
    super(template, props);
  }

  render() {
    const { avatar, username, sender, message, time } = this.props;

    return this.compile({
      avatar,
      username,
      sender,
      message,
      time,
    });
  }
}
