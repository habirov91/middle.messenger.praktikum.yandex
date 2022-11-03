import { Block } from 'shared/classes';
import { Button, Input, FormError, Form, Link, ContentBlock, AuthorizationLayout } from 'shared/ui';
import { handleInputChange } from 'shared/functions/handle-input-change';
import { validateField } from 'shared/functions/validate-field';
import { handleSubmit } from 'shared/functions/handle-submit';
import { renderDom } from 'shared/functions/render-dom';
import { validationSchema } from 'shared/data/user-validation-schema';
import { IRegister } from './types';
import { registerData } from './utils';

class Register extends Block<IRegister> {
  constructor(props: IRegister) {
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
  content: 'Зарегистрироваться',
  type: 'submit',
});

const fields = registerData.map(({ name, placeholder, type }) => ({
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

const link = new Link({ content: 'Войти', url: './login.html' });

const form = new Form({
  vertical: true,
  fields,
  button,
  link,
  events: {
    submit: (e: SubmitEvent) => handleSubmit({ fields, e, validationSchema }),
  },
});

const registerForm = new ContentBlock({
  title: 'Войти',
  content: form,
  authForm: true,
});

const content = new Register({
  form: registerForm,
});

renderDom('#root', content);
