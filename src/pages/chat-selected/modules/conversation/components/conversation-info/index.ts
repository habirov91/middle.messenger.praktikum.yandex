import { Block } from 'shared/classes';
import { template } from './conversation-info.tmpl';
import { IConversationInfo } from './types';

export class ConversationInfo extends Block<IConversationInfo> {
  constructor(props: IConversationInfo) {
    super(template, props);
  }

  render() {
    const { avatar, username, button } = this.props;

    return this.compile({
      avatar,
      username,
      button,
    });
  }
}
