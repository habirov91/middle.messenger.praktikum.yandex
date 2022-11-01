import {BlockProps} from "../../../types";


export interface ILink extends BlockProps {
  url: string;
  content: string | HTMLElement;
}
