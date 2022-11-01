import {Chats} from "shared/ui";
import {BlockProps} from "shared/types";
import { Conversation } from './modules/conversation';

export interface IChatSelected extends BlockProps {
  chats: Chats;
  content: Conversation;
}
