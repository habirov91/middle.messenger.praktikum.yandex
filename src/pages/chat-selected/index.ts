import Block from 'shared/classes/block';
import { ChatsModule, Sidebar, MainLayout } from 'shared/ui';
import { ConversationModule } from './modules/conversation';
import { IChatSelected } from './types';

class ChatSelected extends Block {
  constructor(props: IChatSelected) {
    super(MainLayout.template, props);
  }

  render() {
    const { chats, content } = this.props;

    return this.compile({
      chats,
      content,
    });
  }
}

const sidebar = new Sidebar({
  content: ChatsModule(),
});

const conversation = ConversationModule();

export default new ChatSelected({
  chats: sidebar,
  content: conversation,
});
