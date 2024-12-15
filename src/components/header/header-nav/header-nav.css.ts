import { style } from "@vanilla-extract/css";

import { media } from "../../vars";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "10rem",

  "@media": {
    [media.sm]: {
      flexDirection: "row",
      gap: "1.5rem",
      alignItems: "start",

      width: "auto",
    },
  },
});
