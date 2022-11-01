import {Sidebar, ProfileForm} from "shared/ui";
import {BlockProps} from "shared/types";

export interface IProfileChange extends BlockProps {
  sidebar: Sidebar;
  content: ProfileForm;
}
