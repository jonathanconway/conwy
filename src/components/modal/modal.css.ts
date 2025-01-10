import { style } from "@vanilla-extract/css";

import { colors, media, rounded, text } from "../styling";
import { vars } from "../theme";

export const backdrop = style({
  position: "fixed",
  display: "flex",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: colors.black_50,
});

export const modal = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  zIndex: 10,
  margin: "auto",
  padding: "1rem",
  ...rounded.lg,
  backgroundColor: vars.imageModal.background.color,
  borderWidth: "1px",
  borderColor: colors.stone_600,
  borderStyle: "solid",

  "@media": {
    [media.md]: {
      marginLeft: "2rem",
      marginRight: "2rem",
    },
    [media.sm]: {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
});

export const modalHeader = style({
  display: "flex",
  "@media": {
    [media.mdAndUp]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [media.sm]: {
      flexDirection: "column",
      gap: "1rem",
    },
  },
});

export const modalTitle = style({
  ...text.size.xl,
  fontWeight: "bold",
  display: "inline-flex",
});

export const modalToolbar = style({
  display: "flex",
  justifyContent: "space-between",
  top: 0,
  right: 0,
  gap: "0.5rem",
});

export const modalMain = style({
  position: "relative",
  overflow: "scroll",
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flex: 1,

  "@media": {
    [media.lessThanLg]: {
      flexDirection: "column",
    },
    [media.lgAndUp]: {
      flexDirection: "row",
    },
  },
});
