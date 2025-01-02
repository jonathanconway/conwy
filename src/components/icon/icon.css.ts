import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const checkboxCircle = style({
  fill: "transparent",
  stroke: vars.icon.checkbox.color,
});

export const checkboxPath = style({
  fill: vars.icon.checkbox.color,
});

export const iconContainer = style({
  position: "relative",
  display: "inline-block",
  pointerEvents: "none",
});

export const iconSvg = style({
  width: "100%",
  height: "100%",
});

export const iconOverlay = style({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const iconMaterial = style({
  display: "flex",
  width: "100%",
  height: "100%",
});
