import { Sidebar } from 'shared/ui';
import { BlockProps } from 'shared/types';
import { ProfileInfo } from './modules/profile-info';

export interface IProfile extends BlockProps {
  sidebar: Sidebar;
  content: ProfileInfo;
}
