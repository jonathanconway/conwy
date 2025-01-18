import { style } from "@vanilla-extract/css";

import { boxBorderDecorative } from "../box/box.mixins";
import { text } from "../styling";
import { vars } from "../theme";

export const container = style({
  paddingLeft: "2rem" /* 32px */,
  paddingRight: "2rem" /* 32px */,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  ...boxBorderDecorative,
});

export const img = style({
  maxWidth: "100%",
  maxHeight: "20rem",
  width: "100%",
  height: "auto",
  padding: "0.5rem",
  borderWidth: "1px",
  borderStyle: "solid",
  filter: vars.imageFigure.filter,
});

export const figCaption = style({
  marginTop: "1rem",
  ...text.size.xs,
  lineHeight: "1rem",
});
