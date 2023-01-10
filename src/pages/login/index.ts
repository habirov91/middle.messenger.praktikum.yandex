import Block from 'shared/classes/block';
import {handleInputChange} from 'shared/functions/handle-input-change';
import {validateField} from 'shared/functions/validate-field';
import {ContentBlock, Button, Form, Link, AuthorizationLayout} from 'shared/ui';
import Input from '../../shared/ui/atoms/form/input';
import FormError from '../../shared/ui/atoms/form/error';
import { ILogin } from './types';
import { fieldsData, validationSchema } from './utils';
import LoginController from './controller';

class Login extends Block<ILogin> {
  constructor(props: ILogin) {
    super(AuthorizationLayout.template, props);
  }

  render() {
    const { form, link } = this.props;

    return this.compile({
      form,
      link,
    });
  }
}

const button = new Button({
  content: 'Вход',
  type: 'submit',
});

const fields = fieldsData.map(({ name, placeholder, type }) => ({
  input: new Input({
    name,
    placeholder,
    type,
  }),
  error: new FormError({ error: '' }),
}));

fields.forEach(({ input, error }) => {
  input.setProps({
    events: {
      blur: (e: FocusEvent) => {
        handleInputChange(input, e);
        validateField(input, error, validationSchema, fields);
      },
    },
  });
});

const form = new Form({
  vertical: true,
  fields,
  button,
  events: {
    submit: (e: SubmitEvent) => LoginController.login({ fields, e }),
  },
});

const link = new Link({ content: 'Зарегистрироваться', url: 'register' });

const loginForm = new ContentBlock({
  title: 'Вход',
  content: form,
  authForm: true,
});

export default new Login({
  form: loginForm,
  link,
});
