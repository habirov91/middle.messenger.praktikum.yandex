import { IInput } from 'shared/ui/atoms/form/input/types';

const fieldsData: IInput[] = [
  { name: 'oldPassword', placeholder: 'Старый пароль', type: 'password' },
  { name: 'newPassword', placeholder: 'Новый пароль', type: 'password' },
  {
    name: 'newPasswordConfirm',
    placeholder: 'Повторите пароль',
    type: 'password',
  },
];

export default fieldsData;
