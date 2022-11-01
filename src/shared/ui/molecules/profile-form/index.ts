import {Block} from "../../../classes";
import {template} from './profile-form.tmpl';

import {Button} from "../../atoms/button";
import {Form} from "../form";
import {Avatar} from "../../atoms/avatar";

import { IProfileForm } from './types';
import {ValidationSchema} from "../../../types";
import profilePicture from '../../../../../static/images/profile-picture.png';
import {IFields} from "../form/types";
import {handleSubmit} from "../../../functions/handle-submit";




export class ProfileForm extends Block {
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

export function ProfileFormModule(
  fields: IFields[],
  validationSchema: ValidationSchema,
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
