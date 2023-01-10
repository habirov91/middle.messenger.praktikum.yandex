import { BlockProps } from 'shared/types';
import {Button} from '../button';
import Input from './input';
import Error from './error';
import FileInput from './fileInput';

export interface IFields {
  input: Input | FileInput;
  error?: Error;
}

export interface IForm extends BlockProps {
  vertical?: boolean;
  fields: IFields[];
  button: Button;
}
