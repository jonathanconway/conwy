import { style } from "@vanilla-extract/css";

import * as mixins from "./list.mixins";

export const list = style(mixins.list);

export const orderedList = style(mixins.orderedList);

export const unorderedList = style(mixins.unorderedList);

export const unorderedListBullets = style(mixins.unorderedListBullets);

export const unorderedListNoBullets = style(mixins.unorderedListNoBullets);
