import {Block} from "../../../classes";
import {template} from './chats.tmpl';

import {Chat} from './components/chat';
import {Avatar} from "../../atoms/avatar";
import {Link} from "../../atoms/link";
import {Input} from "../../atoms/input";

import { IChats } from './types';
import {BurgerIcon} from "../../../../../static/icons/burger-icon";
import userAvatar from '../../../../../static/images/user-avatar.png';
import {chatsData} from "../../../data/chats-data";



export class Chats extends Block {
  constructor(props: IChats) {
    super(template, props);
  }

  render() {
    const { profile, search, chatList } = this.props;

    return this.compile({
      profile,
      search,
      chatList,
    });
  }
}

export function ChatsModule(): Chats {
  const link = new Link({
    content: BurgerIcon,
    url: 'profile.html',
  });

  const chatList = chatsData.map(
    ({ username, sender, message, time }) =>
      new Chat({
        avatar: new Avatar({
          source: userAvatar,
        }),
        username: new Link({ content: username, url: 'chatSelected.html' }),
        sender,
        message,
        time,
      }),
  );

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

  return new Chats({
    profile: link,
    search,
    chatList,
  });
}
