import Block from 'shared/classes/block';
import template from './conversation-actions.tmpl';
import { IConversationActions } from './types';

export default class ConversationActions extends Block<IConversationActions> {
  constructor(props: IConversationActions) {
    super(template, props);
  }

  render() {
    const { attachments, messageForm } = this.props;

    return this.compile({
      attachments,
      messageForm,
    });
  }
}
