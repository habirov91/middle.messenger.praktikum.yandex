import {Block} from "shared/classes";
import {ErrorLayout, Link} from "shared/ui";
import {renderDom} from "shared/functions/render-dom";
import { IError404 } from './types';

class Error404 extends Block {
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
  url: 'chatSelect.html',
  content: 'Назад к чатам',
});

const content = new Error404({
  code: '404',
  text: 'Не туда попали',
  link,
});

renderDom('#root', content);
