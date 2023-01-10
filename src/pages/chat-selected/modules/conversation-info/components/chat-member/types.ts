import {Button} from 'shared/ui';
import { BlockProps } from 'shared/types';

export interface IChatMember extends BlockProps {
  username: string;
  button: Button | string;
}
