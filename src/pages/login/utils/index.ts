import { IInput } from 'shared/ui/atoms/form/input/types';

export const fieldsData: IInput[] = [
  { name: 'login', placeholder: 'Логин', type: 'text' },
  { name: 'password', placeholder: 'Пароль', type: 'password' },
];

const noEmptyString = /([^\s])/g;

export const validationSchema = {
  login: {
    rule: noEmptyString,
    error: 'Enter login',
  },
  password: {
    rule: noEmptyString,
    error: 'Enter password',
  },
};
