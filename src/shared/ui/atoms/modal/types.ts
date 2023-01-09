import { BlockProps } from 'shared/types';
import Block from '../../../classes/block';

export interface IModal extends BlockProps {
  isModalOpen: boolean;
  content: Block | string;
}
