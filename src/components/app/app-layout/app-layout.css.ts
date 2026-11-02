import { globalStyle, style } from "@vanilla-extract/css";

import { colors, media } from "../../styling";
import { vars } from "../../theme";

export const html = style({
  backgroundColor: vars.layout.background.color,

  ":before": {
    content: " ",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderTopWidth: "4px",
    borderTopStyle: "solid",
    borderTopColor: colors.purple_400,
    borderBottomWidth: "4px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.sky_300,
    zIndex: 1,
  },
});

globalStyle("::selection", {
  backgroundColor: vars.layout.selection.background.color,
});

export const body = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  overflowY: "visible",
  backgroundColor: vars.layout.body.background.color,
  color: vars.text.body.color,

  "@media": {
    [media.sm]: {
      flexDirection: "row",
    },
  },
});
