import { style } from "@vanilla-extract/css";

import { boxBorderDecorative } from "../box/box.mixins";
import { rounded, text } from "../styling";
import { vars } from "../theme";

export const container = style({
  position: "relative",
  height: "10rem",
});

export const imageContainerSingle = style({
  position: "relative",
  height: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const imageBorder = {
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: boxBorderDecorative.borderColor,
};

export const imageContainer = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.375rem",
  cursor: "pointer",
  backgroundColor: vars.layout.body.background.color,
  ...rounded.lg,
  ...imageBorder,

  ":hover": {
    // todo: generalize
    borderColor: vars.link.hover.text.color,
  },
});

export const imageInner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

export const imageNumber = style({
  position: "absolute",
  left: "-0.5rem",
  top: "-0.5rem",
  backgroundColor: vars.imageModal.background.color,
  width: "1.5rem",
  height: "1.5rem",
  fontSize: text.size.xs.fontSize,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  ...imageBorder,
  ...rounded.full,
});

export const image = style({
  ...rounded.regular,
  pointerEvents: "none",
  margin: "0.25rem",
  maxHeight: "100%",
  width: "auto",
  // width: "100%",
});

export const nav = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
});
