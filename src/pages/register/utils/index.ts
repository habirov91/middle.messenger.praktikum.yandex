import {IInput} from "shared/ui/atoms/input/types";


export const registerData: IInput[] = [
  { name: 'Почта', placeholder: 'habirov-91@yandex.ru', type: 'email' },
  { name: 'Логин', placeholder: 'Ildus', type: 'text' },
  { name: 'Имя', placeholder: 'Ильдус', type: 'text' },
  { name: 'Фамилия', placeholder: 'Хабиров', type: 'text' },
  { name: 'Телефон', placeholder: '+00000000000', type: 'text' },
  { name: 'Пароль', placeholder: 'Password', type: 'password' },
  {
    name: 'Пароль (еще раз)',
    placeholder: 'Confirm password',
    type: 'password',
  },
];
