import { Controller, FormControllerProps } from 'shared/classes';
import {Store} from 'shared/store';
import {ChatsAPI} from 'shared/api';
import {catchDec, validationDec} from 'shared/decorators';
import { Indexed } from 'shared/types';
import { IChatsInfo, ICreateChat } from 'shared/api/chats/types';
import ConversationController from '../../../../../pages/chat-selected/modules/conversation/controller';
import { validationSchema } from '../utils';

class ChatsController extends Controller<ICreateChat> {
  @catchDec
  public async getChats() {
    const newChats = await ChatsAPI.getChats();
    Store.set('chats', newChats);
    this.connectToChats(newChats);
  }

  @catchDec
  public async connectToChats(chats: IChatsInfo[]) {
    chats.forEach(({ id }: Indexed) => this.connectToChat(id));
  }

  @catchDec
  public async connectToChat(id: number) {
    const res = await ChatsAPI.getChat(id);

    ConversationController.open(res.token, id);
  }

  @validationDec(validationSchema)
  @catchDec
  public async createChat(_params: FormControllerProps, callback: () => void) {
    await ChatsAPI.createChat(this.data);

    this.getChats();
    callback();
  }
}

export default new ChatsController();
