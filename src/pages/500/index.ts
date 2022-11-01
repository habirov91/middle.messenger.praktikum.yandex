import {Block} from "shared/classes";
import {Link, ErrorLayout} from "shared/ui";
import {renderDom} from "shared/functions/render-dom";
import { IError500 } from './types';

class Error500 extends Block {
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
  url: 'chatSelect.html',
  content: 'Назад к чатам',
});

const content = new Error500({
  code: '500',
  text: 'Мы уже фиксим',
  link,
});

renderDom('#root', content);
