import { BlockProps } from 'shared/types';
import { Link, Button, Modal } from 'shared/ui';
import Input from '../../atoms/form/input';
import Chat from './components/chat';

export interface IChats extends BlockProps {
  profile: Link;
  search: Input;
  chatAdd: Button;
  modal: Modal;
  chatList: Chat[];
}
