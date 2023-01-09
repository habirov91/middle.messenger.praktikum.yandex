import { BlockProps } from 'shared/types';
import {Sidebar} from 'shared/ui';
import { Conversation } from './modules/conversation';

export interface IChatSelected extends BlockProps {
  chats: Sidebar;
  content: Conversation;
}
