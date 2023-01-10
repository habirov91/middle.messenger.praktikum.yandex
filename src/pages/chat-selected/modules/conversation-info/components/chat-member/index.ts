import Block from 'shared/classes/block';
import template from './chat-member.tmpl';
import { IChatMember } from './types';

export default class ChatMember extends Block<IChatMember> {
  constructor(props: IChatMember) {
    super(template, props);
  }

  render() {
    const { username, button } = this.props;

    return this.compile({ username, button });
  }
}
