import { BlockProps } from 'shared/types';
import {Sidebar, ProfileForm} from 'shared/ui';

export interface IProfileChange extends BlockProps {
  sidebar: Sidebar;
  content: ProfileForm;
}
