import { Link, Button, ContentBlock, Form, Modal } from 'shared/ui';
import {connect} from 'shared/functions';
import {Store} from 'shared/store';
import Block from '../../../classes/block';
import { template } from './chats.tmpl';
import Input from '../../atoms/form/input';
import FormError from '../../atoms/form/error';
import ChatsController from './controller';
import { IChats } from './types';
import burgerIcon from '../../../../../static/icons/burgerIcon';

import mapStateToChats, { chatAddFields } from './utils';

export class Chats extends Block<IChats> {
  constructor(props: IChats) {
    super(template, props);
  }

  render() {
    const { profile, search, chatList, chatAdd, modal } = this.props;
    const { chats, user } = Store.getState();

    if (!chats && user) {
      ChatsController.getChats();
    }

    return this.compile({
      profile,
      search,
      chatAdd,
      modal,
      chatList,
    });
  }
}

const chats = connect<IChats>(mapStateToChats);

const ChatsHoc = chats(Chats);

export function ChatsModule(): Chats {
  const link = new Link({
    content: burgerIcon,
    url: 'profile',
  });

  const search = new Input({
    type: 'text',
    name: 'chatSearch',
    events: {
      keyup: (e: InputEvent) => {
        const input = e.target as HTMLInputElement;
        console.log(input.value);
      },
    },
  });

  const fields = chatAddFields.map(({ name, placeholder, type }) => ({
    input: new Input({ type, name, placeholder }),
    error: new FormError({}),
  }));

  const modal = new Modal({
    content: '',
    isModalOpen: false,
  });

  const callback = () => modal.setProps({ isModalOpen: false });

  const form = new Form({
    fields,
    button: new Button({
      type: 'submit',
      content: 'Create',
    }),
    vertical: true,
    events: {
      submit: (e: SubmitEvent) =>
        ChatsController.createChat({ e, fields }, callback),
    },
  });

  const content = new ContentBlock({
    title: 'Create new chat',
    content: form,
  });

  modal.setProps({ content });

  const chatAdd = new Button({
    type: 'button',
    content: 'Добавить чат',
    transparent: true,
    events: {
      click: () => modal.setProps({ isModalOpen: true }),
    },
  });

  return new ChatsHoc({
    profile: link,
    search,
    chatAdd,
    modal,
    chatList: [],
  });
}
