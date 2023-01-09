import {Store} from '../store';
import { Indexed } from '../types';

const socketUrl = 'wss://ya-praktikum.tech/ws/chats/';

export enum WSServiceEvents {
  OPEN = 'open',
  MESSAGE = 'message',
  ERROR = 'error',
  CLOSE = 'cloase',
}

const { OPEN, MESSAGE, ERROR, CLOSE } = WSServiceEvents;

export class WSService {
  socket: WebSocket;

  private _id: number;

  constructor(userId: number, chatId: number, token: string) {
    this._id = chatId;
    this.socket = new WebSocket(`${socketUrl}${userId}/${chatId}/${token}`);

    this.socket.addEventListener(OPEN, this.handleOpen);
    this.socket.addEventListener(MESSAGE, this.handleMessage.bind(this));
    this.socket.addEventListener(ERROR, this.handleError);
    this.socket.addEventListener(CLOSE, this.handleClose);
  }

  getChatHistory() {
    this.socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      }),
    );
  }

  send(message: string) {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      }),
    );
  }

  close() {
    this.socket.close();
  }

  handleOpen(e: Event) {
    console.log('Соединение установлено', e);
  }

  handleMessage(e: MessageEvent) {
    const data = JSON.parse(e.data);

    if (Array.isArray(data)) {
      Store.set('messages', { chat: this._id, data });
    } else if (data.type !== 'message') {
      return;
    } else {
      const { messages } = Store.getState();
      messages.data.unshift(data);
      Store.set('messages', messages);
    }

    const { currChats } = Store.getState();

    if (!currChats) {
      return;
    }

    const chats = currChats.map((item: Indexed) => {
      if (item.id === this._id) {
        if (Array.isArray(data)) {
          item.messages = item.messages.concat(data);
        } else {
          item.messages.unshift(data);
        }
      }
      return item;
    });

    Store.set('currChats', chats);
  }

  handleError(e: ErrorEvent) {
    console.log('Ошибка', e.message);
  }

  handleClose(e: CloseEvent) {
    if (e.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${e.code} | Причина: ${e.reason}`);
  }
}
