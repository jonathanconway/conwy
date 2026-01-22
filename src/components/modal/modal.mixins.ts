import { ComplexStyleRule } from "@vanilla-extract/css";

import { colors, media, rounded } from "../styling";
import { vars } from "../theme";

export const modal: ComplexStyleRule = {
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
};
