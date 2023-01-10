import { ValidationSchema } from 'shared/types';
import { noEmptyRule } from 'shared/data';

const validationSchema: ValidationSchema = {
  message: {
    rule: noEmptyRule,
    error: '',
  },
};

export default validationSchema;
