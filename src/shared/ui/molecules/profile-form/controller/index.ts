import { Controller, FormControllerProps, Router } from 'shared/classes';
import {UserAPI} from 'shared/api';
import {Store} from 'shared/store';
import {catchDec, validationDec} from 'shared/decorators';
import {validationSchema} from 'shared/data';
import { PasswordChangeForm, ProfileChangeForm } from '../types';
import ProfileChangeAPI from '../api';

class ProfileChangeController extends Controller {
  profileData: ProfileChangeForm;

  passwordData: PasswordChangeForm;

  @validationDec(validationSchema, 'profileData')
  @catchDec
  public async changeProfile(_params: FormControllerProps) {
    await ProfileChangeAPI.changeProfile(this.profileData);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/profile');
  }

  @validationDec(validationSchema, 'passwordData')
  @catchDec
  public async changePassword(_params: FormControllerProps) {
    const { newPasswordConfirm, ...passwordData } = this.passwordData;
    await ProfileChangeAPI.changePassword(passwordData);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/profile');
  }
}

export default new ProfileChangeController();
