import { Block } from 'shared/classes';
import { Button, Avatar } from 'shared/ui';
import { ValidationSchema } from 'shared/types';
import { handleSubmit } from 'shared/functions/handle-submit';
import { template } from './profile-form.tmpl';
import { Form } from '../form';
import { IProfileForm } from './types';
import profilePicture from '../../../../../static/images/profile-picture.png';
import { IFields } from '../form/types';

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

export function ProfileFormModule(fields: IFields[], validationSchema: ValidationSchema): ProfileForm {
  const button = new Button({
    type: 'submit',
    content: 'Сохранить',
  });

  const form = new Form({
    fields,
    button,
    vertical: true,
    events: {
      submit: (e: SubmitEvent) => handleSubmit({ e, fields, validationSchema }),
    },
  });

  const avatar = new Avatar({
    source: profilePicture,
  });

  return new ProfileForm({
    avatar,
    form,
  });
}
