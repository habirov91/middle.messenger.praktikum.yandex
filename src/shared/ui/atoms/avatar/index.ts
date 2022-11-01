import {Block} from "shared/classes";
import {template} from './avatar.tmpl';
import { IAvatar } from './types';


export class Avatar extends Block {
  constructor(props: IAvatar) {
    super(template, props);
  }

  render() {
    const { source } = this.props;

    return this.compile({ source });
  }
}
