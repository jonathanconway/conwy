import { style } from "@vanilla-extract/css";

import { media } from "../../styling";

export const switchButtonsContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",

  "@media": {
    [media.sm]: {
      justifyContent: "end",
    },
  },
});
