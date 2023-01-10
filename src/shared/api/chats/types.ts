import { IUserInfo } from '../user/types';

export interface ILastMessageInfo {
  user: IUserInfo;
  time: string;
  content: string;
}

export interface IChatsInfo {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: ILastMessageInfo | null;
  title: string;
  unread_count: number;
}

export interface IChatId {
  id: number;
}

export interface IChatToken {
  token: string;
}

export interface ICreateChat {
  title: string;
}

export interface IChatMembers extends IUserInfo {
  role: string;
}

export interface IChatMemberAction {
  users: number[];
  chatId: number;
}
