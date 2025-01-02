import { style } from "@vanilla-extract/css";

import { boxBorderDecorative } from "../box/box.mixins";
import { colors, rounded, text } from "../styling";
import { vars } from "../theme";

export const imageCascade = style({
  ...rounded.lg,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.stone_600,
});

export const container = style({
  position: "relative",
  height: "10rem",
});

export const imageContainer = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: "0.375rem",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: boxBorderDecorative.borderColor,
  ...rounded.lg,
  cursor: "pointer",
  backgroundColor: vars.layout.body.background.color,

  ":hover": {
    // todo: generalize
    borderColor: vars.link.hover.text.color,
  },
});

export const imageNumber = style({
  position: "absolute",
  left: "0.25rem",
  top: "0.25rem",
  backgroundColor: vars.imageModal.background.color,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: vars.text.body.color,
  ...rounded.full,
  width: "1.5rem",
  height: "1.5rem",
  fontSize: text.size.xs.fontSize,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});

export const image = style({
  ...rounded.regular,
  pointerEvents: "none",
});

export const nav = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
});
