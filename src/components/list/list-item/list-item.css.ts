import { style } from "@vanilla-extract/css";

import * as listItemMixins from "./list-item.mixins";

export const listItem = style(listItemMixins.listItem);

export const listItemSmall = style(listItemMixins.listItemSmall);
