import { ListItemProps } from "./list-item-props";
import * as styles from "./list-item.css";

export function ListItem(props: ListItemProps) {
  const { className = generateListItemClassName(props), ...restProps } = props;

  return <li className={className} {...restProps} />;
}

function generateListItemClassName(props: ListItemProps) {
  if (props.small) {
    if (props.noSpacing) {
      return styles.listItemSmallWithoutSpacing;
    } else {
      return styles.listItemSmall;
    }
  } else {
    if (props.noSpacing) {
      return styles.listItemWithoutSpacing;
    } else {
      return styles.listItem;
    }
  }
}
