import { style } from "@vanilla-extract/css";

import * as listItemMixins from "./list-item.mixins";

export const listItem = style(listItemMixins.listItem);

export const listItemWithoutSpacing = style(
  listItemMixins.listItemWithoutSpacing,
);

export const listItemSmall = style(listItemMixins.listItemSmall);

export const listItemSmallWithoutSpacing = style(
  listItemMixins.listItemSmallWithoutSpacing,
);
