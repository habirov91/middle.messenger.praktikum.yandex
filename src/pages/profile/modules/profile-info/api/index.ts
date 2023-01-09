import {BaseAPI} from 'shared/classes/base-api';
import {Request} from 'shared/classes/request';
import { IUserInfo } from 'shared/api/user/types';

class ProfileAPI extends BaseAPI<
  undefined | FormData,
  Promise<string | IUserInfo>
> {
  public async logout() {
    const res = await Request.post<undefined, string>('auth/logout');

    return res;
  }

  public async changeAvatar(data: FormData) {
    const res = await Request.put<FormData, IUserInfo>('user/profile/avatar', {
      data,
    });

    return res;
  }
}

export default new ProfileAPI();
