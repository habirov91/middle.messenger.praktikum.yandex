import {BlockProps} from "shared/types";
import {Avatar, Button} from "shared/ui";


export interface IConversationInfo extends BlockProps {
  avatar: Avatar;
  username: string;
  button: Button;
}
