import {BaseAPI, Request} from 'shared/classes';
import { ProfileChangeForm, PasswordChangeForm } from '../types';

class ProfileChangeAPI extends BaseAPI<
  ProfileChangeForm | PasswordChangeForm,
  Promise<string>
> {
  public async changeProfile(user: ProfileChangeForm) {
    const res = await Request.put<ProfileChangeForm, string>('user/profile', {
      data: user,
    });

    return res;
  }

  public async changePassword(data: PasswordChangeForm) {
    const res = await Request.put<PasswordChangeForm, string>('user/password', {
      data,
    });

    return res;
  }
}

export default new ProfileChangeAPI();
