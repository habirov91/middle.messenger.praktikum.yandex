import {
  Controller,
  FormControllerProps,
} from 'shared/classes/controller';
import {Router} from 'shared/classes/router';
import {Store} from 'shared/store';
import {catchDec, validationDec} from 'shared/decorators';
import {validationSchema} from 'shared/data';
import {UserAPI} from 'shared/api';
import ProfileAPI from '../api';
import { AvatarForm } from '../types';

class ProfileController extends Controller<AvatarForm> {
  @catchDec
  public async getUser() {
    Store.set('user', null);

    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
  }

  @catchDec
  public async logout(e: MouseEvent) {
    e.preventDefault();
    await ProfileAPI.logout();

    Store.empty();

    Router.go('/');
  }

  @validationDec(validationSchema)
  @catchDec
  public async changeAvatar(
    _params: FormControllerProps,
    callback: () => void,
  ) {
    const data = new FormData();
    data.append('avatar', this.data.avatar);
    const user = await ProfileAPI.changeAvatar(data);
    Store.set('user', user);
    callback();
  }
}

export default new ProfileController();
