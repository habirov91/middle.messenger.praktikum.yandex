import {BlockProps} from "../../../types";
import {Block} from "../../../classes";


export interface IContentBlock extends BlockProps {
  title: string;
  content: string | Block;
  authForm?: boolean;
}
