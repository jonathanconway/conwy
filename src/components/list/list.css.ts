import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./list.mixins";

export const list = style(mixins.list);

export const unorderedList = style(mixins.unorderedList);

export const unorderedListBullets = style(mixins.unorderedListBullets);

export const unorderedListNoBullets = style(mixins.unorderedListNoBullets);

globalStyle(
  [unorderedList, unorderedListBullets, unorderedListNoBullets]
    .map((unorderedListClass) => `${unorderedListClass} > li:not(:first-child)`)
    .join(", "),
  mixins.listItemSpacing,
);

export const orderedList = style(mixins.orderedList);

globalStyle(
  [orderedList]
    .map((orderedListClass) => `${orderedListClass} > li:not(:first-child)`)
    .join(", "),
  mixins.listItemSpacing,
);
