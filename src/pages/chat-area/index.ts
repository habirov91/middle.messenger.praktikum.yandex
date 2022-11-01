import {Block} from "shared/classes";
import {ChatsModule, Sidebar, MainLayout} from "shared/ui";
import {renderDom} from "shared/functions/render-dom";
import {SystemMessage} from './components/system-message';
import { IChatSelect } from './types';

class ChatSelect extends Block {
  constructor(props: IChatSelect) {
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

const chats = ChatsModule();

const sidebar = new Sidebar({
  content: chats,
});

const content = new ChatSelect({
  chats: sidebar,
  content: new SystemMessage({
    message: 'Выберите чат чтобы отправить сообщение',
  }),
});

renderDom('#root', content);
