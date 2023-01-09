import Block from '../../../classes/block';
import {template} from './modal.tmpl';
import { IModal } from './types';

export class Modal extends Block<IModal> {
  constructor(props: IModal) {
    super(template, props);
    this.setProps({
      events: {
        click: (e: MouseEvent) => {
          const target = e.target as HTMLElement;

          const classes = Array.from(target.classList);
          const isShadow = classes.filter((item) =>
            item.includes('modalShadow'),
          )[0];

          if (isShadow) {
            this.setProps({ isModalOpen: false });
          }
        },
      },
    });
  }

  render() {
    const { isModalOpen, content } = this.props;

    return this.compile({
      isModalOpen,
      content,
    });
  }
}
