import { BlockProps } from 'shared/types';
import { Link } from 'shared/ui';

export interface IError404 extends BlockProps {
  code: string;
  text: string;
  link: Link;
}
