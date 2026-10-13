import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import { media } from "../../../styling";

export const notScrolledDown = style({
  position: "relative",
});

export const scrolledDown = style({
  position: "fixed",
  top: "2.5rem",
  maxWidth: rems((65 - 5) * 0.3),
  width: `calc( ( 100% * 0.3 ) - 1.55rem )`,

  "@media": {
    [media.lessThanXl]: {
      right: "1rem",
    },
  },
});

export const innerStack = style({
  gap: "2.5rem",
  overflow: "scroll",
  maxHeight: "80vh",
});
