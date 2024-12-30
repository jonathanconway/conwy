import { style } from "@vanilla-extract/css";

import { boxBorder } from "../../box/box.mixins";

export const image = style({
  ...boxBorder,
  width: "6rem",
});
