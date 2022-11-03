import { IInput } from 'shared/ui/atoms/input/types';

export const passwordData: IInput[] = [
  { name: 'oldPassword', placeholder: 'Старый пароль', type: 'password' },
  { name: 'newPassword', placeholder: 'Новый пароль', type: 'password' },
  {
    name: 'newPasswordConfirm',
    placeholder: 'Повторите новый пароль',
    type: 'password',
  },
];
