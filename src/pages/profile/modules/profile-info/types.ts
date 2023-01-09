import { BlockProps } from 'shared/types';
import {Modal, Link, Avatar} from 'shared/ui';

export interface IProfileInfo extends BlockProps {
  avatar: Avatar;
  modal: Modal;
  username: string;
  profileFields: IProfileField[];
  links: Link[];
}

export interface IProfileField {
  label: string;
  value: string;
}

export enum ProfileFields {
  email = 'Email',
  first_name = 'Name',
  second_name = 'Surname',
  display_name = 'Chat name',
  phone = 'Phone',
}

export interface AvatarForm {
  avatar: File;
}
