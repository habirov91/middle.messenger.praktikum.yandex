import { BlockProps } from 'shared/types';
import ConversationInfo from '../conversation-info';
import ConversationActions from './components/conversation-actions';
import Message from './components/message';

export interface IConversation extends BlockProps {
  topBar: ConversationInfo;
  messages: Message[];
  bottomBar: ConversationActions;
}

export interface IMessageData {
  id: number;
  user_id: number;
  chat_id: number;
  type: string;
  time: string;
  content: string;
  is_read: boolean;
  file: File | null;
}

export type MessageForm = {
  message: string;
};
