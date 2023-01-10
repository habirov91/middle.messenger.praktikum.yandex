import { BlockProps } from 'shared/types';

export interface IButton extends BlockProps {
  type: 'button' | 'reset' | 'submit';
  content: string | HTMLElement;
  transparent?: boolean;
}
