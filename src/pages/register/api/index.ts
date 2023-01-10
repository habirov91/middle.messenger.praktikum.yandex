import {BaseAPI} from 'shared/classes/base-api';
import {Request} from 'shared/classes/request';
import { RegisterData, RegisterForm } from '../types';

class RegisterAPI extends BaseAPI<RegisterForm, Promise<RegisterData>> {
  public async register(user: RegisterForm) {
    const res = await Request.post<RegisterForm, RegisterData>('auth/signup', {
      data: user,
    });

    return res;
  }
}
export default new RegisterAPI();
