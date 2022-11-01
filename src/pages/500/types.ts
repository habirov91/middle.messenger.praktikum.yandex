import {Link} from "shared/ui";
import {BlockProps} from "shared/types";

export interface IError500 extends BlockProps {
  code: string;
  text: string;
  link: Link;
}
