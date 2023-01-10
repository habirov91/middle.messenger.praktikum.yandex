import { ValidationSchema } from 'shared/types';
import { noEmptyRule } from 'shared/data';

const validationSchema: ValidationSchema = {
  login: {
    rule: noEmptyRule,
    error: "Enter user's login",
  },
};
export default validationSchema;
