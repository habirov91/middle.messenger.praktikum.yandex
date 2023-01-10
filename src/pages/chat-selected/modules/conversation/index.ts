import Block from 'shared/classes/block';
import {Button, Form} from 'shared/ui';
import {handleInputChange} from 'shared/functions/handle-input-change';
import {connect} from 'shared/functions/connect';
import { ConversationInfoModule } from '../conversation-info';
import template from './conversation.tmpl';
import Input from '../../../../shared/ui/atoms/form/input';
import ConversationActions from './components/conversation-actions';
import ConversationController from './controller';
import { IConversation } from './types';
import optionsIcon from '../../../../../static/icons/optionsIcon';
import mapStateToConversation from './utils';

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

const conversation = connect<IConversation>(mapStateToConversation);

const ConversationHoc = conversation(Conversation);

export function ConversationModule(): Conversation {
  const optionsButton = new Button({
    type: 'button',
    content: optionsIcon,
    transparent: true,
  });

  const messageFields = [
    {
      input: new Input({
        name: 'message',
        placeholder: 'Напишите сообщение...',
        type: 'text',
      }),
    },
  ];

  messageFields[0].input.setProps({
    events: {
      blur: (e: FocusEvent) => {
        handleInputChange(messageFields[0].input, e);
      },
    },
  });

  const messageButton = new Button({
    type: 'submit',
    content: 'send message',
  });

  const messageForm = new Form({
    fields: messageFields,
    button: messageButton,
    events: {
      submit: (e: SubmitEvent) =>
        ConversationController.send({ e, fields: messageFields }),
    },
  });

  const bottomBar = new ConversationActions({
    attachments: optionsButton,
    messageForm,
  });

  return new ConversationHoc({
    topBar: ConversationInfoModule(),
    messages: [],
    bottomBar,
  });
}
