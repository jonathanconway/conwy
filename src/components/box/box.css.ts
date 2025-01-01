import { style } from "@vanilla-extract/css";

import { boxBorderDecorative, boxBorderStructural } from "./box.mixins";

export const decorative = style({
  ...boxBorderDecorative,
  padding: "0.75rem" /* 12px */,
});

export const structural = style({
  ...boxBorderStructural,
  padding: "0.75rem" /* 12px */,
});
