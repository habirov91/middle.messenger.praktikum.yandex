import Block from 'shared/classes/block';
import { Link, ErrorLayout } from 'shared/ui';
import { IError404 } from './types';

class Error404 extends Block<IError404> {
  constructor(props: IError404) {
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

export default new Error404({
  code: '404',
  text: 'Wrong path',
  link,
});
