import { Controller, FormControllerProps } from 'shared/classes/controller';
import {Router} from 'shared/classes/router';
import {Store} from 'shared/store';
import {UserAPI} from 'shared/api';
import {catchDec, validationDec} from 'shared/decorators';
import { validationSchema } from '../utils';
import { LoginForm } from '../types';
import LoginAPI from '../api';

class LoginController extends Controller<LoginForm> {
  @validationDec(validationSchema)
  @catchDec
  public async login(_params: FormControllerProps) {
    await LoginAPI.login(this.data);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/');
  }
}

export default new LoginController();
