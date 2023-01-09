import { Avatar } from 'shared/ui';
import { BlockProps } from 'shared/types';

export interface IChat extends BlockProps {
  avatar: Avatar;
  title: string;
  sender: string;
  message: string;
  time: string;
  unread: number;
}
