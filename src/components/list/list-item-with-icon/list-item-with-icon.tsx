import { Icon } from "../../icon";
import { Stack, StackDirections, StackDistributions } from "../../stack";
import { ListItem } from "../list-item/list-item";

import { ListItemWithIconProps } from "./list-item-with-icon-props";
import * as styles from "./list-item-with-icon.css";

/**
 * List item with an icon on the left and text on the center and right
 */
export function ListItemWithIcon(props: ListItemWithIconProps) {
  const { icon, children, ...restProps } = props;
  return (
    <ListItem {...restProps}>
      <Stack
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
        alignItems="start"
        gap={0.5}
      >
        <Icon className={styles.workProjectsListItemIcon} icon={icon} />
        <span className={styles.workProjectsListItemTitle}>{children}</span>
      </Stack>
    </ListItem>
  );
}
