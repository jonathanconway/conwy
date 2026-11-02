import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./layout-grid.mixins";

export const layoutGrid = style(mixins.layoutGrid);

globalStyle(`${layoutGrid} > *`, {
  margin: 0,
});
