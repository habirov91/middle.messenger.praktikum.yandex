import { Block } from 'shared/classes';
import { template } from './sidebar.tmpl';
import { ISidebar } from './types';

export class Sidebar extends Block<ISidebar> {
  constructor(props: ISidebar) {
    super(template, props);
  }

  render() {
    const { content } = this.props;

    return this.compile({ content });
  }
}
