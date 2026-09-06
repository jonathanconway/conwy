import { IconType } from "../../icon";

export interface Contact {
  readonly iconType: IconType;
  readonly label: string;
  readonly id: string;
  readonly href: string;
}
