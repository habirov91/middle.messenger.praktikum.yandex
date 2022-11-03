import { Block } from 'shared/classes';
import { Button, Input, FormError, Form, ContentBlock, Link, AuthorizationLayout } from 'shared/ui';
import { handleInputChange } from 'shared/functions/handle-input-change';
import { handleSubmit } from 'shared/functions/handle-submit';
import { renderDom } from 'shared/functions/render-dom';
import { ILogin } from './types';
import { loginData } from './utils';
import { validateField } from 'shared/functions/validate-field';
import { validationSchema } from 'shared/data/user-validation-schema';

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
  content: 'Авторизоваться',
  type: 'submit',
});

const fields = loginData.map(({ name, placeholder, type }) => ({
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

const link = new Link({ content: 'Нет аккаунта?', url: './register.html' });

const form = new Form({
  vertical: true,
  fields,
  button,
  link,
  events: {
    submit: (e: SubmitEvent) => handleSubmit({ fields, e }),
  },
});

const loginForm = new ContentBlock({
  title: 'Вход',
  content: form,
  authForm: true,
});

const content = new Login({
  form: loginForm,
});

renderDom('#root', content);