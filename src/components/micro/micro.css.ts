import { style } from "@vanilla-extract/css";

import { media } from "../styling";

export const container = style({
  "@media": {
    [media.mdAndUp]: {
      maxWidth: "20rem",
    },
  },
});
