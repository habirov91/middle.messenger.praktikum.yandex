import {render} from 'shared/functions';
import Block from './block';

export class Route {
  private _pathname: string;

  private _block: Block;

  private _props: any;

  constructor(pathname: string, view: Block, props: any) {
    this._pathname = pathname;
    this._block = view;
    this._props = props;
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    this._block.hide();
  }

  render() {
    render(this._props.rootQuery, this._block);
    this._block.show();
  }
}
