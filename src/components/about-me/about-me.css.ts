import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const outerContainer = style({
  borderBottom: "solid 1px",
  borderBottomColor: vars.colors.border_1,
});

export const container = style({
  display: "flex",

  flexDirection: "row",
  gap: "1.5rem",
  alignItems: "flex-start",

  width: "80%",
  maxWidth: "24rem",

  marginTop: "2.5rem",
  marginBottom: "1rem",
  paddingBottom: "2.5rem",
});

globalStyle(`${container} h1`, {
  marginTop: 0,
});

export const face = style({
  width: "3.5rem",
  borderRadius: "9999px",
  borderWidth: "2px",
  borderColor: vars.colors.border_2,
});
