import Block from 'shared/classes/block';
import { Link, ErrorLayout } from 'shared/ui';
import { IError500 } from './types';

class Error500 extends Block<IError500> {
  constructor(props: IError500) {
    super(ErrorLayout.template, props);
  }

  render() {
    const { code, text, link } = this.props;

    return this.compile({
      code,
      text,
      link,
    });
  }
}

const link = new Link({
  url: '/',
  content: 'Назад на главную страницу',
});

export default new Error500({
  code: '500',
  text: 'We are fixing it',
  link,
});
