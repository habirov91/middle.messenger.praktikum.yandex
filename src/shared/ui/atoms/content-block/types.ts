import { BlockProps } from 'shared/types';
import Block from '../../../classes/block';

export interface IContentBlock extends BlockProps {
  title: string;
  content: string | Block;
  authForm?: boolean;
}
