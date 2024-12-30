import { style } from "@vanilla-extract/css";

import { colors, text as text_ } from "../../../styling";

export const link = style({
  position: "relative",
  textTransform: "lowercase",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  ":hover": {
    color: colors.stone_400,
  },
});

export const text = style({
  ...text_.size.lg,
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
});

export const activeIndicator = style({
  display: "flex",
  width: "100%",
  height: "0.5rem",
});

export const activeIndicatorLeft = style({
  flex: "1",
  backgroundPosition: "left",
  height: "0.5rem",
});

export const activeIndicatorRight = style({
  flex: "1",
  backgroundPosition: "right",
  height: "0.5rem",
});
