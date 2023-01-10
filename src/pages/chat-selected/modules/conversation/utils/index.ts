import {getTime} from 'shared/functions/get-time';
import { Indexed } from 'shared/types';
import Message from '../components/message';
import { IMessageData } from '../types';

const mapStateToConversation = ({ user, messages }: Indexed) => {
  if (user && messages) {
    if (messages.data.length === 0) {
      return {
        messages: [],
      };
    }

    const conversationContent = messages.data.map(
      ({ user_id, content, is_read, time }: IMessageData) =>
        new Message({
          own: user.id === user_id,
          content,
          status: is_read ? 'read' : 'unread',
          time: getTime(time),
        }),
    );

    return { messages: conversationContent };
  }
  return {};
};

export default mapStateToConversation;
