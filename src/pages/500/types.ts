import { BlockProps } from 'shared/types';
import { Link } from 'shared/ui';

export interface IError500 extends BlockProps {
  code: string;
  text: string;
  link: Link;
}
