import {ILink} from "shared/ui/atoms/link/types";
import { IProfileField } from '../types';

export const profileData: IProfileField[] = [
  { label: 'Почта', value: 'habirov-91@yandex.ru' },
  { label: 'Логин', value: 'Ildus' },
  { label: 'Имя', value: 'Ильдус' },
  { label: 'Фамилия', value: 'Хабиров' },
  { label: 'Имя в чате', value: 'volume88' },
  { label: 'Телефон', value: '+00000000000' },
];

export const profileLinks: ILink[] = [
  { url: 'profileChange.html', content: 'Изменить данные' },
  { url: 'passwordChange.html', content: 'Изменить пароль' },
  { url: 'login.html', content: 'Выйти' },
];
