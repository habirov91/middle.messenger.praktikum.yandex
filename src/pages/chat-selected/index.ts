import {Block} from "shared/classes";
import {ChatsModule, MainLayout, Sidebar} from "shared/ui";
import {renderDom} from "shared/functions/render-dom";
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

const content = new ChatSelected({
  chats: sidebar,
  content: conversation,
});

renderDom('#root', content);
