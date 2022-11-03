import { BlockProps } from '../../../types';
import { Chat } from './components/chat';
import { Input } from '../../atoms/input';
import { Link } from '../../atoms/link';

export interface IChats extends BlockProps {
  profile: Link;
  search: Input;
  chatList: Chat[];
}
