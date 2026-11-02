import { ListProps } from "@mui/material";

import { cn } from "@/framework";

import { ListItemSpacingStrategies } from "./list-item-spacing-strategy";
import { ListOrderedProps } from "./list-ordered";
import { ListSpacingStrategies } from "./list-spacing-strategy";
import { ListUnorderedProps } from "./list-unordered";
// todo: maybe there's an alternative way to avoid including this
import * as styles from "./list.css";

export const classNamesByListSpacings = {
  [ListSpacingStrategies.IncludeExceptFirstChild]:
    styles.listSpacingExceptFirstChild,
  [ListSpacingStrategies.Include]: styles.listSpacing,
  [ListSpacingStrategies.Exclude]: "",
};

export const classNamesByListItemSpacing = {
  [ListItemSpacingStrategies.IncludeExceptFirstChild]:
    styles.listItemSpacingExceptFirstChild,
  [ListItemSpacingStrategies.Include]: styles.listItemSpacing,
  [ListItemSpacingStrategies.Exclude]: "",
};

export function getListOrderedOlProps(props: ListOrderedProps) {
  const {
    className,
    as,
    listSpacingStrategy = ListSpacingStrategies.IncludeExceptFirstChild,
    listItemSpacingStrategy = ListItemSpacingStrategies.IncludeExceptFirstChild,
    ...olRestProps
  } = props;

  const classNameListSpacing = classNamesByListSpacings[listSpacingStrategy];

  const classNameListItemSpacing =
    classNamesByListItemSpacing[listItemSpacingStrategy];

  const olClassName =
    className ??
    cn(classNameListSpacing, classNameListItemSpacing, styles.orderedList);

  return {
    olClassName,
    olRestProps,
  };
}

export function getListOrderedUlProps(props: ListUnorderedProps) {
  const {
    className,
    as,
    listSpacingStrategy = ListSpacingStrategies.IncludeExceptFirstChild,
    listItemSpacingStrategy = ListItemSpacingStrategies.IncludeExceptFirstChild,
    noBullets,
    ...ulRestProps
  } = props;

  const classNameBullets = noBullets
    ? styles.unorderedListNoBullets
    : styles.unorderedListBullets;

  const classNameListSpacing = classNamesByListSpacings[listSpacingStrategy];

  const classNameListItemSpacing =
    classNamesByListItemSpacing[listItemSpacingStrategy];

  const ulClassName =
    props.className ??
    cn(
      classNameListSpacing,
      classNameListItemSpacing,
      classNameBullets,
      styles.unorderedList,
    );

  return {
    ulClassName,
    ulRestProps,
  };
}
