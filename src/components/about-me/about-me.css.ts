import { globalStyle, style } from "@vanilla-extract/css";

import { rounded } from "../styling";
import { vars } from "../theme";

export const outerContainer = style({
  borderBottom: "solid 1px",
  borderBottomColor: vars.aboutMe.container.border.bottom.color,
});

export const container = style({
  display: "flex",

  flexDirection: "row",
  gap: "1rem",
  alignItems: "flex-start",

  marginTop: "2.5rem",
  marginBottom: "1.5rem",
});

globalStyle(`${container} h1`, {
  marginTop: 0,
});

export const face = style({
  ...rounded.full,
  borderWidth: "2px",
  borderColor: vars.aboutMe.face.border.color,
  borderStyle: "solid",
});
