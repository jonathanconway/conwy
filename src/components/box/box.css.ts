import { style } from "@vanilla-extract/css";

import { boxBorder } from "./box.mixins";

export const container = style({
  ...boxBorder,
  padding: "0.75rem" /* 12px */,
});
