import {Button, Form, Avatar} from 'shared/ui';
import {connect} from 'shared/functions';
import Block from '../../../classes/block';
import { template } from './profile-form.tmpl';
import mapStateToProfileForm from './utils';
import ProfileChangeController from './controller';
import { IProfileForm } from './types';
import { IFields } from '../../atoms/form/types';
import profilePicture from '../../../../../static/images/profilePicture.png';


export class ProfileForm extends Block<IProfileForm> {
  constructor(props: IProfileForm) {
    super(template, props);
  }

  render() {
    const { avatar, form } = this.props;

    return this.compile({
      avatar,
      form,
    });
  }
}

const profileForm = connect<IProfileForm>(mapStateToProfileForm);

const ProfileFormHoc = profileForm(ProfileForm);

export function ProfileFormModule(
  fields: IFields[],
  action: 'profile' | 'password',
): ProfileForm {
  const button = new Button({
    type: 'submit',
    content: 'Сохранить',
  });

  const form = new Form({
    fields,
    button,
    vertical: true,
    events: {
      submit: (e: SubmitEvent) => {
        if (action === 'profile') {
          ProfileChangeController.changeProfile({ fields, e });
        } else {
          ProfileChangeController.changePassword({ fields, e });
        }
      },
    },
  });

  const avatar = new Avatar({
    source: profilePicture,
  });

  return new ProfileFormHoc({
    avatar,
    form,
  });
}
