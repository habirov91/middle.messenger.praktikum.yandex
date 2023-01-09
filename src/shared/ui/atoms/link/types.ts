import { BlockProps } from 'shared/types';

export interface ILink extends BlockProps {
  url: string;
  content: string | HTMLElement;
}
