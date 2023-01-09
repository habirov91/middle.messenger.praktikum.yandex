import { Controller, FormControllerProps } from 'shared/classes/controller';
import {Router} from 'shared/classes/router';
import {Store} from 'shared/store';
import {UserAPI} from 'shared/api';
import {catchDec, validationDec} from 'shared/decorators';
import {validationSchema} from 'shared/data';
import { RegisterForm } from '../types';
import RegisterAPI from '../api';

class RegisterController extends Controller<RegisterForm> {
  @validationDec(validationSchema)
  @catchDec
  public async register(_params: FormControllerProps) {
    await RegisterAPI.register(this.data);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/');
  }
}

export default new RegisterController();
