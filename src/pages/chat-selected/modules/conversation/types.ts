import { BlockProps } from 'shared/types';
import { ConversationInfo } from './components/conversation-info';
import { ConversationActions } from './components/conversation-actions';
import { Message } from './components/message';

export interface IConversation extends BlockProps {
  topBar: ConversationInfo;
  messages: Message[];
  bottomBar: ConversationActions;
}
