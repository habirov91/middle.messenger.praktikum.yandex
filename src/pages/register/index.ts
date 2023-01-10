import Block from 'shared/classes/block';
import {handleInputChange, validateField} from 'shared/functions';
import {ContentBlock, Button, Form, Link, AuthorizationLayout} from 'shared/ui';
import {validationSchema} from 'shared/data';
import Input from '../../shared/ui/atoms/form/input';
import FormError from '../../shared/ui/atoms/form/error';
import { IRegister } from './types';
import RegisterController from './controller';
import fieldsData from './utils';

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
    submit: (e: SubmitEvent) => RegisterController.register({ fields, e }),
  },
});

const link = new Link({ content: 'Войти', url: '/' });

const registerForm = new ContentBlock({
  title: 'Зарегистрироваться',
  content: form,
  authForm: true,
});

export default new Register({
  form: registerForm,
  link,
});
