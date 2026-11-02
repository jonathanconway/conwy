import { cn } from "@/framework";

import { ListItemProps } from "./list-item-props";
import { ListItemSizes } from "./list-item-size";
import * as styles from "./list-item.css";

export function ListItem(props: ListItemProps) {
  const classNameSize = {
    [ListItemSizes.Regular]: styles.listItem,
    [ListItemSizes.Small]: styles.listItemSmall,
  }[props.size ?? ListItemSizes.Regular];

  const { className = cn(classNameSize), size, ...restProps } = props;

  return <li className={className} {...restProps} />;
}
