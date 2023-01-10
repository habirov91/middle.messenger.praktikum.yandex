import Block from '../../../../classes/block';
import template from './fileInput.tmpl';
import { IFileInput } from './types';

export default class FileInput extends Block<IFileInput> {
  constructor(props: IFileInput) {
    super(template, props);
  }

  render() {
    const { name, label, error } = this.props;

    return this.compile({ name, label, error });
  }
}
