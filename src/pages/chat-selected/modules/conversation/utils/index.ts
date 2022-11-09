import { IInput } from 'shared/ui/atoms/input/types';
import cameraPhoto from '../../../../../../static/images/camera-photo.png';

export const conversationData = [
  {
    own: false,
    content:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    status: null,
    time: '16:20',
  },
  {
    own: false,
    content: `<img src='${cameraPhoto}' alt="Камера">`,
    status: null,
    time: '15:13',
  },
  {
    own: true,
    content: 'Круто!',
    status: 'status: read',
    time: '15:13',
  },
];

export const MessageData: IInput[] = [{ name: 'message', placeholder: 'Введите сообщение', type: 'text' }];
