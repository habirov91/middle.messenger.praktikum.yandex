import Block from 'shared/classes/block';
import { ChatsModule, Sidebar,  MainLayout } from 'shared/ui';
import SystemMessage from './components/systemMessage';
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

export default new ChatSelect({
  chats: sidebar,
  content: new SystemMessage({
    message: 'Выберите чат чтобы отправить сообщение',
  }),
});
