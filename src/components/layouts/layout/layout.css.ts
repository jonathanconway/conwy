import { globalStyle, style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import { colors, media } from "../../styling";
import * as textStyles from "../../text/text.css";
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

export const body = cn(
  style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflowY: "visible",
    backgroundColor: vars.layout.body.background.color,
    gap: "4rem",

    "@media": {
      [media.sm]: {
        flexDirection: "row",
      },
    },
  }),

  textStyles.colorBody,
);
