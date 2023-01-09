import { staticUrl } from 'shared/classes/request';
import {Button, ContentBlock, Modal, Avatar, Form} from 'shared/ui';
import { Indexed } from 'shared/types';
import { IChatMembers } from 'shared/api/chats/types';
import ChatMembers from '../components/chat-members';
import Input from '../../../../../shared/ui/atoms/form/input';
import FormError from '../../../../../shared/ui/atoms/form/error';
import ChatMember from '../components/chat-member';
import ConversationInfoController from '../controller';
import userAvatar from '../../../../../../static/images/userAvatar.png';
import infoIcon from '../../../../../../static/icons/infoIcon';


const mapStateToConversationInfo = ({
  currChats,
  messages,
  chats,
}: Indexed) => {
  if (currChats && chats && messages) {
    const chat = currChats.find((item: Indexed) => item.id === messages.chat);
    const { title, avatar } = chats.find(
      (item: Indexed) => item.id === messages.chat,
    );
    if (chat.members.length > 0) {
      const members = chat.members.map(
        ({ display_name, login, id, role }: IChatMembers) =>
          new ChatMember({
            username: display_name ?? login,
            button:
              role === 'admin'
                ? 'admin'
                : new Button({
                    type: 'button',
                    content: 'Remove',
                    events: {
                      click: () => ConversationInfoController.removeMember(id),
                    },
                  }),
          }),
      );

      const fields = [
        {
          input: new Input({
            name: 'login',
            type: 'text',
            placeholder: 'Логин',
          }),
          error: new FormError({}),
        },
      ];

      const form = new Form({
        fields,
        button: new Button({
          type: 'submit',
          content: 'Add user',
        }),
        events: {
          submit: (e: SubmitEvent) =>
            ConversationInfoController.addMember({ fields, e }),
        },
      });

      const content = new ContentBlock({
        title: 'Manage content',
        content: new ChatMembers({
          form,
          members,
        }),
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

      return {
        title: title ?? '',
        avatar: new Avatar({
          source: avatar ? `${staticUrl}${avatar}` : userAvatar,
        }),
        modal,
        button,
      };
    }
  }
  return {};
};

export default mapStateToConversationInfo;
