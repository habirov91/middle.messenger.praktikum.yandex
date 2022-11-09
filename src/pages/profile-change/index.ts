import { Block } from 'shared/classes';
import { ProfileFormModule, Navigation, Link, FormError, Input, Sidebar, ProfileLayout } from 'shared/ui';
import { handleInputChange } from 'shared/functions/handle-input-change';
import { validateField } from 'shared/functions/validate-field';
import { renderDom } from 'shared/functions/render-dom';
import { validationSchema } from 'shared/data/user-validation-schema';
import { IProfileChange } from './types';
import { profileChangeData } from './utils';

class ProfileChange extends Block<IProfileChange> {
  constructor(props: IProfileChange) {
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

const fields = profileChangeData.map(({ name, placeholder, type }) => ({
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

const content = new ProfileChange({
  sidebar,
  content: passwordForm,
});

renderDom('#root', content);
