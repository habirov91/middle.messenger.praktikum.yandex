import { BlockProps } from 'shared/types';

export interface IFileInput extends BlockProps {
  name: string;
  label: string;
  error?: string;
}
