import {BaseAPI} from 'shared/classes/base-api';
import {Request} from 'shared/classes/request';
import { LoginForm } from '../types';

class LoginAPI extends BaseAPI<LoginForm, Promise<string>> {
  public async login(user: LoginForm) {
    const res = await Request.post<LoginForm, string>('auth/signin', {
      data: user,
    });

    return res;
  }
}

export default new LoginAPI();
