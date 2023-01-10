import Block from 'shared/classes/block';
import { handleInputChange, validateField } from 'shared/functions';
import { ProfileFormModule, Navigation, Sidebar, Link, ProfileLayout } from 'shared/ui';
import {validationSchema} from 'shared/data';
import Input from '../../shared/ui/atoms/form/input';
import FormError from '../../shared/ui/atoms/form/error';
import { IPasswordChange } from './types';
import fieldsData from './utils';

class PasswordChange extends Block<IPasswordChange> {
  constructor(props: IPasswordChange) {
    super(ProfileLayout.template, props);
  }

  render() {
    const { sidebar, content } = this.props;

    return this.compile({
      sidebar,
      content,
    });
  }
}

const link = new Link({
  content: 'Назад к профилю',
  url: 'profile',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const fields = fieldsData.map(({ name, placeholder, type }) => ({
  input: new Input({ name, placeholder, type }),
  error: new FormError({}),
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

const passwordForm = ProfileFormModule(fields, 'password');

export default new PasswordChange({
  sidebar,
  content: passwordForm,
});
