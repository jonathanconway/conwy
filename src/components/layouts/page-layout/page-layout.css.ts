import { style } from "@vanilla-extract/css";

import { media } from "@/components/styling";

const containerMaxWidth = "65rem";

export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: containerMaxWidth,
  minHeight: "100vh",
  padding: "1rem",
  gap: "2rem",

  "@media": {
    [media.xlAndUp]: {
      width: containerMaxWidth,
    },
  },
});

export const mainWrapper = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "1rem",
});
