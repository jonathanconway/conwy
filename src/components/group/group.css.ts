import { style } from "@vanilla-extract/css";

import * as textMixins from "../text/text.mixins";

export const groupContainer = style({
  display: "inline-flex",
  border: "solid 1px silver",
  borderRadius: "0.25rem",
  padding: "0.5rem",
});

export const groupTitle = style({
  paddingInline: "0.5rem",
  ...textMixins.label,
});
