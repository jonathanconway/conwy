import { style } from "@vanilla-extract/css";

import { colors, media, rounded, text } from "../styling";
import { vars } from "../theme";

import * as mixins from "./modal.mixins";

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

export const modal = style(mixins.modal);

export const modalHeader = style({
  display: "flex",
  gap: "1rem",
  flexDirection: "row",
  justifyContent: "space-between",
  // "@media": {
  //   [media.mdAndUp]: {
  //   },
  //   [media.sm]: {
  //     flexDirection: "column",
  //   },
  // },
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

export const modalMain = style({});
