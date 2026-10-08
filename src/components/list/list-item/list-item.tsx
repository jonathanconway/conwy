import { ListItemProps } from "./list-item-props";
import * as styles from "./list-item.css";

export function ListItem(props: ListItemProps) {
  const { className = styles.listItem, ...restProps } = props;
  return <li className={className} {...restProps} />;
}
