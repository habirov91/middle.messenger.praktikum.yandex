import { BlockProps } from '../../../../../types';
import { Avatar } from '../../../../atoms/avatar';
import { Link } from '../../../../atoms/link';

export interface IChat extends BlockProps {
  avatar: Avatar;
  username: Link;
  sender: string;
  message: string;
  time: string;
}
