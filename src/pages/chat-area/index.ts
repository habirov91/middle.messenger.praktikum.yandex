import { Block } from 'shared/classes';
import { ChatsModule, MainLayout } from 'shared/ui';
import { renderDom } from 'shared/functions/render-dom';
import { SystemMessage } from './components/system-message';
import { IChatSelect } from './types';

class ChatSelect extends Block<IChatSelect> {
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

const content = new ChatSelect({
  chats,
  content: new SystemMessage({
    message: 'Выберите чат чтобы отправить сообщение',
  }),
});

renderDom('#root', content);
