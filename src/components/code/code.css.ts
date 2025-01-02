import { globalStyle, style } from "@vanilla-extract/css";

import { rounded, text } from "../styling";
import { vars } from "../theme";

export const code = style({
  ...rounded.md,
  borderWidth: "1px",
  borderColor: vars.code.border.color,
  paddingLeft: "0.375rem",
  paddingRight: "0.375rem",
  ...text.size.sm,
});

globalStyle(`pre code`, {
  whiteSpace: "pre-wrap !important", // todo: because of prismjs; find a way to fix
});

globalStyle(`p code, li code`, {
  whiteSpace: "nowrap !important", // todo: because of prismjs; find a way to fix
});
