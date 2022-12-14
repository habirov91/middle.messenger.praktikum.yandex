import { Block } from 'shared/classes';
import { ChatsModule, MainLayout } from 'shared/ui';
import { renderDom } from 'shared/functions/render-dom';
import { ConversationModule } from './modules/conversation';
import { IChatSelected } from './types';

class ChatSelected extends Block<IChatSelected> {
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

const conversation = ConversationModule();

const content = new ChatSelected({
  chats: ChatsModule(),
  content: conversation,
});

renderDom('#root', content);
