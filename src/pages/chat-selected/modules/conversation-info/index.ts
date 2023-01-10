import Block from 'shared/classes/block';
import {connect} from 'shared/functions/connect';
import {Avatar, Button, ContentBlock, Modal} from 'shared/ui';
import template from './conversation-info.tmpl';
import { IConversationInfo } from './types';
import infoIcon from '../../../../../static/icons/infoIcon';
import userAvatar from '../../../../../static/images/userAvatar.png';
import mapStateToConversationInfo from './utils';

export default class ConversationInfo extends Block<IConversationInfo> {
  constructor(props: IConversationInfo) {
    super(template, props);
  }

  render() {
    const { avatar, title, button, modal } = this.props;

    return this.compile({
      avatar,
      title,
      button,
      modal,
    });
  }
}

const conversationInfo = connect<IConversationInfo>(mapStateToConversationInfo);

const ConversationInfoHoc = conversationInfo(ConversationInfo);

export function ConversationInfoModule() {
  const content = new ContentBlock({
    title: '',
    content: '',
  });

  const modal = new Modal({
    content,
    isModalOpen: false,
  });

  const button = new Button({
    type: 'button',
    content: infoIcon,
    transparent: true,
    events: {
      click: () => modal.setProps({ isModalOpen: true }),
    },
  });

  return new ConversationInfoHoc({
    modal,
    avatar: new Avatar({
      source: userAvatar,
    }),
    title: '',
    button,
  });
}
