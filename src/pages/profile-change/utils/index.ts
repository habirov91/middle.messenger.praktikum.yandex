import { IInput } from 'shared/ui/atoms/input/types';

export const profileChangeData: IInput[] = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'login', placeholder: 'Логин', type: 'text' },
  { name: 'first_name', placeholder: 'Имя', type: 'text' },
  { name: 'second_name', placeholder: 'Фамилия', type: 'text' },
  { name: 'display_name', placeholder: 'Имя в чате', type: 'text' },
  { name: 'phone', placeholder: 'Номер телефона', type: 'text' },
];
