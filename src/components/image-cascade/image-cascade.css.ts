import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import { boxBorderDecorative } from "../box/box.mixins";
import { rounded } from "../styling";
import * as textSizeConsts from "../text/text-size/text-size.consts";
import { vars } from "../theme";

import { IMAGE_CASCADE_SIZE_PX } from "./image-cascade-size";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1rem",
});

export const cascadeContainer = style({
  position: "relative",
  margin: "auto",
  backgroundColor: vars.imageCascade.background.color,
  overflow: "hidden",
});

const imageBorder = {
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: boxBorderDecorative.borderColor,
  ...rounded.lg,
};

const imageContainerBase = {
  ...imageBorder,
};

export const imageContainerSingle = style({
  position: "relative",
  height: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...imageContainerBase,
});

export const imageContainer = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.375rem",
  cursor: "pointer",
  backgroundColor: vars.layout.body.background.color,
  ...imageContainerBase,
});

export const imageInner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
});

export const imageNumber = style({
  position: "absolute",
  right: "-0.5rem",
  top: "-0.5rem",
  backgroundColor: vars.tooltip.background.color,
  color: vars.tooltip.color,
  width: "1.5rem",
  height: "1.5rem",
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  pointerEvents: "none",
  ...imageBorder,
  ...rounded.full,
});

export const image = style({
  ...rounded.regular,
  pointerEvents: "none",
  margin: "0.25rem",
  maxHeight: "100%",
  width: "auto",
});

export const selectedImageContainer = style({
  ...imageContainerBase,
  display: "inline-flex",
  alignContent: "center",
  margin: "auto",
  cursor: "pointer",
  maxWidth: IMAGE_CASCADE_SIZE_PX.width,
  width: IMAGE_CASCADE_SIZE_PX.width,
  maxHeight: IMAGE_CASCADE_SIZE_PX.height,
  height: IMAGE_CASCADE_SIZE_PX.width,
});

export const selectedImage = style({
  ...rounded.regular,
  pointerEvents: "none",
  margin: "auto",
  maxHeight: "100%",
  maxWidth: "100%",
  width: "auto",
  height: "auto",
});

export const nav = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  gap: "0.5rem",
});
