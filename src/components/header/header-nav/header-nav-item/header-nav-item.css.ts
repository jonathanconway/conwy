import { style } from "@vanilla-extract/css";

import { focusOutline } from "../../../focus-outline";
import { colors, media, text as text_ } from "../../../styling";
import { vars } from "../../../theme";

export const link = style({
  position: "relative",
  textTransform: "lowercase",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  textDecoration: "none",
  ...focusOutline,

  "@media": {
    [media.sm]: {
      color: vars.headerNav.color,
      width: "100%",
      textAlign: "center",
    },
    [media.mdAndUp]: {
      color: vars.text.body.color,
    },
  },
  ":hover": {
    color: colors.stone_400,
  },
});

export const linkInner = style({
  display: "inline-block",
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
