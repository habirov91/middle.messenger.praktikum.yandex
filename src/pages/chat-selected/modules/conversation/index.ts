import { Block } from 'shared/classes';
import { Button, Avatar, Input, Form, FormError } from 'shared/ui';
import { handleInputChange } from 'shared/functions/handle-input-change';
import { handleSubmit } from 'shared/functions/handle-submit';
import { validateField } from 'shared/functions/validate-field';
import { validationSchema } from 'shared/data/user-validation-schema';
import { InfoIcon } from '../../../../../static/icons/info-icon';
import { OptionsIcon } from '../../../../../static/icons/options-icon';
import userAvatar from '../../../../../static/images/user-avatar.png';
import { template } from './conversation.tmpl';
import { ConversationInfo } from './components/conversation-info';
import { Message } from './components/message';
import { ConversationActions } from './components/conversation-actions';
import { IConversation } from './types';
import { conversationData, MessageData } from './utils';

export class Conversation extends Block<IConversation> {
  constructor(props: IConversation) {
    super(template, props);
  }

  render() {
    const { topBar, messages, bottomBar } = this.props;

    return this.compile({
      topBar,
      messages,
      bottomBar,
    });
  }
}

export function ConversationModule(): Conversation {
  const infoButton = new Button({
    type: 'button',
    content: InfoIcon,
  });

  const topBar = new ConversationInfo({
    avatar: new Avatar({
      source: userAvatar,
    }),
    username: 'Вадим',
    button: infoButton,
  });

  const messages = conversationData.map(
    ({ own, content, status, time }) =>
      new Message({
        own,
        content,
        status,
        time,
      }),
  );

  const optionsButton = new Button({
    type: 'button',
    content: OptionsIcon,
  });

  const messageFields = MessageData.map(({ name, placeholder, type }) => ({
    input: new Input({ name, placeholder, type }),
    error: new FormError({}),
  }));

  messageFields.forEach(({ input, error }) => {
    input.setProps({
      events: {
        blur: (e: FocusEvent) => {
          handleInputChange(input, e);
          validateField(input, error, validationSchema, messageFields);
        },
      },
    });
  });

  const messageButton = new Button({
    type: 'submit',
    content: 'Отправить сообщение',
  });

  const messageForm = new Form({
    fields: messageFields,
    button: messageButton,
    events: {
      submit: (e: SubmitEvent) => handleSubmit({ e, fields: messageFields }),
    },
  });

  const bottomBar = new ConversationActions({
    attachments: optionsButton,
    messageForm,
  });

  return new Conversation({
    topBar,
    messages,
    bottomBar,
  });
}
