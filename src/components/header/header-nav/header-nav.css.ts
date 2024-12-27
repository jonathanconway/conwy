import { style } from "@vanilla-extract/css";

import { helpers } from "../../theme";

export const container = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.5rem",
  alignItems: "start",
  width: "auto",

  "@media": {
    [helpers.media.sm]: {
      position: "relative",
      flexDirection: "column",
      alignItems: "center",
      width: "10rem",
      gap: 0,
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
});
