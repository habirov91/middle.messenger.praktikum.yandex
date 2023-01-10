import {
  Controller,
  FormControllerProps,
} from 'shared/classes/controller';
import {Store} from 'shared/store';
import {ChatsAPI, UserAPI} from 'shared/api';
import { Indexed } from 'shared/types';
import {catchDec, validationDec} from 'shared/decorators';
import validationSchema from '../utils/validation-schema';
import { IAddMember } from '../types';

class ConversationController extends Controller<IAddMember> {
  @catchDec
  public async removeMember(id: number) {
    const { messages } = Store.getState();
    const data = {
      users: [id],
      chatId: messages.chat,
    };

    await ChatsAPI.removeChatMember(data);

    this.updateUsers();
  }

  @validationDec(validationSchema)
  @catchDec
  public async addMember(_props: FormControllerProps) {
    const { messages } = Store.getState();
    const users = await UserAPI.findUser(this.data);

    // TODO: make a dropdown menu with list of users from last api call
    const data = {
      users: [users[0].id],
      chatId: messages.chat,
    };

    await ChatsAPI.addChatMember(data);

    this.updateUsers();
  }

  @catchDec
  public async updateUsers() {
    const { currChats, messages } = Store.getState();

    const members = await ChatsAPI.getChatMembers(messages.chat);
    const chats = currChats.map((item: Indexed) => {
      if (item.id === messages.chat) {
        item.members = members;
      }
      return item;
    });

    Store.set('currChants', chats);
  }
}

export default new ConversationController();
