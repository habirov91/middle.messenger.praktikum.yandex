import {Block} from "../../../classes";
import {template} from './content-block.tmpl';
import { IContentBlock } from './types';


export class ContentBlock extends Block {
  constructor(props: IContentBlock) {
    super(template, props);
  }

  render() {
    const { title, content, authForm } = this.props;

    return this.compile({ title, content, authForm });
  }
}
