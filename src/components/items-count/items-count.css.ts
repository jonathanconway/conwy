import { style } from "@vanilla-extract/css";

import * as textSizeMixins from "../text/text-size";
import { vars } from "../theme";

export const itemsCountText = style({
  color: vars.label.color,
  whiteSpace: "nowrap",
  ...textSizeMixins.xs,
});
