import { style } from "@vanilla-extract/css";

export const items = style({
  display: "flex",
  flexDirection: "row",
});

export const item = style({
  width: "100%",
});

export const itemUnselected = style({
  visibility: "hidden",
  marginLeft: "-100%",
});

export const itemSelected = style({});
