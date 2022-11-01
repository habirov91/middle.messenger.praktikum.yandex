import {Block} from "shared/classes";
import {ProfileLayout, Link, Navigation, Sidebar, Input, ProfileFormModule, FormError} from "shared/ui";
import {validateField} from "shared/functions/validate-field";
import {handleInputChange} from "shared/functions/handle-input-change";
import {renderDom} from "shared/functions/render-dom";
import { validationSchema } from "shared/data/user-validation-schema";
import { IPasswordChange } from './types';
import {passwordData} from './utils';

class PasswordChange extends Block {
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
  content: 'Назад',
  url: 'profile.html',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const fields = passwordData.map(({ name, placeholder, type }) => ({
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

const passwordForm = ProfileFormModule(fields, validationSchema);

const content = new PasswordChange({
  sidebar,
  content: passwordForm,
});

renderDom('#root', content);
