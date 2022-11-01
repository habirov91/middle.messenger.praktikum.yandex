import {Chats} from "shared/ui";
import {BlockProps} from "shared/types";
import {SystemMessage} from './components/system-message';

export interface IChatSelect extends BlockProps {
  chats: Chats;
  content: SystemMessage;
}
