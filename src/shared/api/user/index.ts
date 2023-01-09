import {BaseAPI, Request} from 'shared/classes';
import { IUserInfo, IUserSearch } from './types';

class User extends BaseAPI<undefined, Promise<IUserInfo | IUserInfo[]>> {
  public async getCurrentUser() {
    const res = await Request.get<undefined, IUserInfo>('auth/user');

    return res;
  }

  public async findUser(data: IUserSearch) {
    const res = await Request.post<IUserSearch, IUserInfo[]>('user/search', {
      data,
    });

    return res;
  }
}

export const UserAPI = new User();
