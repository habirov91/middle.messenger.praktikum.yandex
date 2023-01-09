import { BlockProps } from 'shared/types';
import {Avatar, Form} from 'shared/ui';

export interface IProfileForm extends BlockProps {
  avatar: Avatar;
  form: Form;
}

export interface ProfileChangeForm {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
}

export interface PasswordChangeForm {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm?: string;
}
