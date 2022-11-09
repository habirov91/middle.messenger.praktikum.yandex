import { ValidationSchema } from '../types';

const nameRule = /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$/g;
const loginRule = /^(?=.*[a-zA-Z])([a-zA-Z0-9_-]{3,20})$/g;
const mailRule = /^[-.\/?*()!#&+\w\s]+[@][a-zA-Z]+[.][a-zA-Z]+$/g;
const passwordRule = /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9_-]{8,40})$/g;
const phoneRule = /^[+]?[0-9]{10,15}$/g;
export const noEmptyRule = /([^\s])/g;

export const validationSchema: ValidationSchema = {
  first_name: {
    rule: nameRule,
    error: 'Имя должно начинаться с заглавной буквы и содержать только буквы (или -)',
  },
  second_name: {
    rule: nameRule,
    error: 'Фамилия должна начинаться с заглавной буквы и содержать только буквы (или -)',
  },
  login: {
    rule: loginRule,
    error: 'Логин должен иметь длину 3-20 и не содержать пробелов и специальных символов (исключая - и _).',
  },
  display_name: {
    rule: noEmptyRule,
    error: 'Введите название чата',
  },
  email: {
    rule: mailRule,
    error: 'Адрес электронной почты должен содержать @yourProvider.yourDomain в конце',
  },
  phone: {
    rule: phoneRule,
    error: 'Телефон должен иметь длину 10-15 и содержать цифры (или + в начале).',
  },
  password: {
    rule: passwordRule,
    error: 'Пароль должен иметь длину 8-40, включая по крайней мере одну заглавную букву и цифру',
  },
  passwordConfirm: {
    rule: { equal: 'password' },
    error: 'Пароли не совпадают',
  },
  oldPassword: {
    rule: noEmptyRule,
    error: 'Введите старый пароль',
  },
  newPassword: {
    rule: passwordRule,
    error: 'Пароль должен иметь длину 8-40, включая по крайней мере одну заглавную букву и цифру',
  },
  newPasswordConfirm: {
    rule: { equal: 'newPassword' },
    error: 'Пароли не совпадают',
  },
  message: {
    rule: noEmptyRule,
    error: 'Поле не должно быть пустым',
  },
};
