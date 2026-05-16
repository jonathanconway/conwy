import { HTMLProps } from "react";

import * as styles from "./list-item.css";

export type ListItemProps = HTMLProps<HTMLLIElement>;

export function ListItem(props: ListItemProps) {
  const { className = styles.listItem, ...restProps } = props;
  return <li className={className} {...restProps} />;
}
