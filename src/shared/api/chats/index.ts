import {BaseAPI, Request} from 'shared/classes';
import { IUserInfo } from '../user/types';
import {
  IChatId,
  IChatMemberAction,
  IChatsInfo,
  IChatToken,
  ICreateChat,
} from './types';

class Chats extends BaseAPI<
  undefined,
  Promise<IChatsInfo[] | IChatToken | IUserInfo[] | string>
> {
  public async getChats() {
    const res = await Request.get<undefined, IChatsInfo[]>('chats');

    return res;
  }

  public async getChat(id: number) {
    const res = await Request.post<IChatId, IChatToken>(`chats/token/${id}`);

    return res;
  }

  public async createChat(data: ICreateChat) {
    const res = await Request.post<ICreateChat, string>(`chats`, {
      data,
    });

    return res;
  }

  public async getChatMembers(id: number) {
    const res = await Request.get<number, IUserInfo[]>(`chats/${id}/users`);

    return res;
  }

  public async addChatMember(data: IChatMemberAction) {
    const res = await Request.put<IChatMemberAction, string>(`chats/users`, {
      data,
    });

    return res;
  }

  public async removeChatMember(data: IChatMemberAction) {
    const res = await Request.delete<IChatMemberAction, string>(`chats/users`, {
      data,
    });

    return res;
  }
}
export const ChatsAPI = new Chats();
