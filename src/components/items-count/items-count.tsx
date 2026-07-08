import pluralize from "pluralize";

import { Box, BoxSizes } from "../box";

import { ItemsCountProps } from "./items-count-props";
import * as styles from "./items-count.css";

export function ItemsCount(props: ItemsCountProps) {
  const suffix = props.suffix ?? "item";
  const suffixPluralised = pluralize(suffix, props.count);

  return (
    <Box size={BoxSizes.Small}>
      <span className={styles.itemsCountText}>
        {props.count} {suffixPluralised}
      </span>
    </Box>
  );
}
