import { IconType } from "../../icon";
import { ListItemProps } from "../list-item/list-item-props";

export interface ListItemWithIconProps extends ListItemProps {
  readonly icon: IconType;
}
