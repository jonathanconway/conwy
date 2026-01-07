import { globalStyle, style } from "@vanilla-extract/css";

import { rounded, text } from "../styling";
import { vars } from "../theme";

export const aside = style({
  padding: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  ...rounded.md,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.aside.border.color,
  backgroundColor: vars.aside.background.color,
});

globalStyle(`${aside} > *:first-child`, {
  paddingTop: 0,
});

export const asideHeading = style({
  ...text.size.md,
  fontWeight: 600,
});
