import { style } from "@vanilla-extract/css";

import { colors, text } from "../styling";
import { vars } from "../theme";

export const container = style({
  paddingLeft: "2rem" /* 32px */,
  paddingRight: "2rem" /* 32px */,
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

export const img = style({
  maxHeight: "20rem",
  width: "auto",
  padding: "0.5rem",
  borderWidth: "1px",
  borderColor: vars.imageFigure.border.color,
  borderStyle: "solid",
  backgroundColor: colors.white,
  filter: vars.imageFigure.filter,
});

export const figCaption = style({
  marginTop: "1rem",
  ...text.size.xs,
  lineHeight: "1rem",
});
