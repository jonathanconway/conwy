import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./item-nav.mixins";

export const navsContainer = style(mixins.navsContainer);

globalStyle(`${navsContainer} > *`, {
  flex: 1,
  width: "100%",
});

export const containerEmpty = style(mixins.containerEmpty);

export const mainColumn = style(mixins.mainColumn);

export const asideColumn = style(mixins.asideColumn);

export const title = style(mixins.title);
