import { BlockProps } from 'shared/types';
import {Sidebar} from 'shared/ui';
import SystemMessage from './components/systemMessage';

export interface IChatSelect extends BlockProps {
  chats: Sidebar;
  content: SystemMessage;
}
