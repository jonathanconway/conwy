import { ListItemSpacingStrategy } from "./list-item-spacing-strategy";
import { ListSpacingStrategy } from "./list-spacing-strategy";

export interface ListPropsBase {
  readonly listSpacingStrategy?: ListSpacingStrategy;
  readonly listItemSpacingStrategy?: ListItemSpacingStrategy;
}
