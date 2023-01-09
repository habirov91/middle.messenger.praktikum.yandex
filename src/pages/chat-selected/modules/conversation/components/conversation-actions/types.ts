import { BlockProps } from 'shared/types';
import {Button,Form} from 'shared/ui';


export interface IConversationActions extends BlockProps {
  attachments: Button;
  messageForm: Form;
}
