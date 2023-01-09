import {Form} from 'shared/ui';
import { BlockProps } from 'shared/types';
import ChatMember from '../chat-member';

export interface IChatMembers extends BlockProps {
  form: Form;
  members: ChatMember[];
}
