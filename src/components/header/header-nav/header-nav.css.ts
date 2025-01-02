import { style } from "@vanilla-extract/css";

import { media } from "../../styling";
import { vars } from "../../theme";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "start",

  "@media": {
    [media.mdAndUp]: {
      gap: "1rem",
      height: "3rem",
    },
    [media.sm]: {
      position: "relative",
      flexDirection: "column",
      alignItems: "center",
      width: "10rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      zIndex: 20,
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      backgroundColor: vars.headerNav.background.color,
    },
  },
});
