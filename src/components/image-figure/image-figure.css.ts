import { style } from "@vanilla-extract/css";

import * as boxMixins from "../box/box.mixins";
import * as linkMixins from "../link/link.mixins";
import { text } from "../styling";
import { vars } from "../theme";

export const container = style({
  padding: "0.5rem",
  display: "inline-flex",
  flexDirection: "column",
  gap: "0.5rem",
  ...boxMixins.boxBorderDecorative,
});

export const link = style({
  ...linkMixins.link,
  display: "inline-flex",
});

export const img = style({
  maxWidth: "100%",
  maxHeight: "20rem",
  width: "unset",
  height: "auto",

  borderWidth: "1px",
  borderStyle: "solid",
  filter: vars.imageFigure.filter,
});

export const figCaption = style({
  ...text.size.xs,
  lineHeight: "1rem",
});
