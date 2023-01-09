import { BlockProps } from 'shared/types';
import {ContentBlock, Link} from 'shared/ui';

export interface ILogin extends BlockProps {
  form: ContentBlock;
  link: Link;
}

export type LoginForm = {
  login: string;
  password: string;
};
