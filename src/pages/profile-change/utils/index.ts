import {handleInputChange} from 'shared/functions/handle-input-change';
import {validateField} from 'shared/functions/validate-field';
import { ProfileFormModule } from 'shared/ui';
import {validationSchema} from 'shared/data';
import { Indexed } from 'shared/types';
import { IInput } from 'shared/ui/atoms/form/input/types';
import FormError from '../../../shared/ui/atoms/form/error';
import Input from '../../../shared/ui/atoms/form/input';




const fieldsData: IInput[] = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'login', placeholder: 'Логин', type: 'text' },
  { name: 'first_name', placeholder: 'Имя', type: 'text' },
  { name: 'second_name', placeholder: 'Фамилия', type: 'text' },
  { name: 'display_name', placeholder: 'Имя в чате', type: 'text' },
  { name: 'phone', placeholder: 'Номер телефона', type: 'text' },
];

const mapStateToProfileChange = ({ user }: Indexed) => {
  const fields = fieldsData.map(({ name, placeholder, type }) => ({
    input: new Input({
      name,
      placeholder,
      type,
      value: user ? user[name] : '',
    }),
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
  return {
    content: ProfileFormModule(fields, 'profile'),
  };
};

export default mapStateToProfileChange;
