import { BlockProps } from 'shared/types';
import { Avatar, Link } from 'shared/ui';

export interface IProfileInfo extends BlockProps {
  avatar: Avatar;
  username: string;
  profileFields: IProfileField[];
  links: Link[];
}

export interface IProfileField {
  label: string;
  value: string;
}
