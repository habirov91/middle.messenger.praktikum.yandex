import { BlockProps } from 'shared/types';
import {Button, Avatar, Modal} from 'shared/ui';

export interface IConversationInfo extends BlockProps {
  avatar: Avatar;
  title: string;
  button: Button;
  modal: Modal;
}

export interface IAddMember {
  login: string;
}
