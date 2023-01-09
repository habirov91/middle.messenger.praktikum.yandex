import {Router} from 'shared/classes/router';
import Block from 'shared/classes/block';
import { StoreEvents, Store } from 'shared/store';
import { UserAPI } from 'shared/api';
import { IUserInfo } from 'shared/api/user/types';
import Error404 from './pages/404';
import Error500 from './pages/500';
import Register from './pages/register';
import Login from './pages/login';
import ChatSelect from './pages/chat-select';
import ChatSelected from './pages/chat-selected';
import Profile from './pages/profile';
import PasswordChange from './pages/password-change';
import ProfileChange from './pages/profile-change';

interface Pages {
  path: string;
  block: Block;
}

class App {
  currUser: IUserInfo | null = null;

  defaultPages: Pages[];

  loggedPages: Pages[];

  constructor() {
    Store.on(StoreEvents.Updated, this.handleStoreUpdate.bind(this));

    this.defaultPages = [
      { path: '/404', block: Error404 },
      { path: '/500', block: Error500 },
      { path: '/register', block: Register },
      { path: '/', block: Login },
    ];

    this.loggedPages = [
      { path: '/404', block: Error404 },
      { path: '/500', block: Error500 },
      { path: '/', block: ChatSelect },
      { path: '/chat', block: ChatSelected },
      { path: '/profile', block: Profile },
      { path: '/password-change', block: PasswordChange },
      { path: '/profile-change', block: ProfileChange },
    ];

    this.initialRender();
  }

  async initialRender() {
    try {
      await UserAPI.getCurrentUser();
    } catch (err) {
      this.handleRoutes();
    }
  }

  handleStoreUpdate() {
    const { user } = Store.getState();

    if ((!this.currUser && user) || (!user && this.currUser)) {
      this.currUser = user;
      Router.routes = [];
    }

    this.handleRoutes();
  }

  handleRoutes() {
    if (!this.currUser) {
      this.defaultPages.forEach(({ path, block }) => Router.use(path, block));
    } else {
      this.loggedPages.forEach(({ path, block }) => Router.use(path, block));
    }
    Router.start();
  }
}

export default new App();
