import { Nullable } from '../types';
import { Block } from '../classes';

export function renderDom(query: string, block: Block): Nullable<Element> {
  const root = document.querySelector(query);

  if (!root) {
    return root;
  }

  root.appendChild(block.getContent()!);

  block.dispatchComponentDidMount();

  return root;
}
