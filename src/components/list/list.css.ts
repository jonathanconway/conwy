import { GlobalStyleRule, globalStyle, style } from "@vanilla-extract/css";

import { listItem } from "./list-item/list-item.css";
import * as mixins from "./list.mixins";

// list

export const list = style(mixins.list);

// listSpacing

export const listSpacing = style(mixins.listSpacing);

export const listSpacingExceptFirstChild = {
  selectors: {
    "&:not(:first-child)": {
      ...mixins.listSpacing,
    },
  },
};

// listItemSpacing

export const listItemSpacing = style(mixins.listItemSpacing);

globalStyle(`${listItemSpacing} > ${listItem}`, {
  ...mixins.listItemSpacing,
} as GlobalStyleRule);

// listItemSpacingExceptFirstChild

export const listItemSpacingExceptFirstChild = style(mixins.listItemSpacing);

globalStyle(
  `${listItemSpacingExceptFirstChild} > ${listItem}:not(:first-child)`,
  {
    ...mixins.listItemSpacing,
  } as GlobalStyleRule,
);

// orderedList

export const orderedList = style(mixins.orderedList);

// unorderedList

export const unorderedList = style(mixins.unorderedList);

export const unorderedListBullets = style(mixins.unorderedListBullets);

export const unorderedListNoBullets = style(mixins.unorderedListNoBullets);
