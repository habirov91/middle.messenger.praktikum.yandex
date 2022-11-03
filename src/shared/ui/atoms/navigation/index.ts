import { Block } from '../../../classes';
import { template } from './navigation.tmpl';
import { INavigation } from './types';

export class Navigation extends Block<INavigation> {
  constructor(props: INavigation) {
    super(template, props);
  }

  render() {
    const { link } = this.props;

    return this.compile({
      link,
    });
  }
}
