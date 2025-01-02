import { style } from "@vanilla-extract/css";

import { media } from "../../../styling";

export const notScrolledDown = style({
  position: "relative",
});

export const scrolledDown = style({
  position: "fixed",
  top: "2.5rem",
  maxWidth: `${(65 - 5) * 0.3}rem`,
  width: `calc( ( 100% * 0.3 ) - 1.55rem )`,

  "@media": {
    [media.lessThanXl]: {
      right: "1rem",
    },
  },
});
