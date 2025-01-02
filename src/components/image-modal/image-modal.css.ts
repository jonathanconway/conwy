import { style } from "@vanilla-extract/css";

import { boxBorderDecorative } from "../box/box.mixins";
import * as shadowMixins from "../shadow";
import { colors, media, rounded, text } from "../styling";
import { vars } from "../theme";

export const imageModalBackdrop = style({
  position: "fixed",
  display: "flex",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: colors.black_50,
});

export const imageModal = style({
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
  maxWidth: "80vw",
});

export const imageModalHeader = style({
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

export const imageModalTitle = style({
  ...text.size.xl,
  fontWeight: "bold",
  display: "inline-flex",
  // order: 1,
  // "@media": {
  //   [media.sm]: {
  //     order: 2,
  //   },
  // },
});

export const imageModalButtonsContainer = style({
  display: "flex",
  justifyContent: "space-between",
  top: 0,
  right: 0,
  gap: "0.5rem",
});

export const imageModalMain = style({
  position: "relative",
  overflow: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "center",
  flex: 1,

  "@media": {
    [media.sm]: {
      flexDirection: "row",
    },
  },
});

export const imageContainer = style({});

export const image = style({
  width: "600px",
  padding: "0.375rem",
  ...rounded.lg,
  borderWidth: "2px",
  // todo: come up with an abstraction
  borderColor: boxBorderDecorative.borderColor,
  backgroundColor: vars.layout.body.background.color,
});

export const noteHotspot = style({
  position: "absolute",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.yellow_400,
  color: colors.white,
  fontWeight: "bold",
  borderWidth: "2px",
  borderStyle: "solid",
  boxShadow: shadowMixins.boxShadowRegular,
  width: "1.5rem",
  height: "1.5rem",
  ...rounded.full,
  ...text.size.sm,
});

export const notesContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "15rem",
});

export const notesContainerWithHotspots = style({
  paddingLeft: "1rem",
});

export const noteText = style({
  position: "relative",
  paddingTop: "0.125rem",
  ...text.size.sm,
});

export const noteTextWithHotspots = style({
  paddingLeft: "1.5rem",
  "@media": {
    [media.sm]: {
      paddingLeft: "0.5rem",
    },
  },
});

export const noteNumber = style({
  position: "absolute",
  left: "-0.75rem",
  backgroundColor: colors.stone_700,
  borderColor: colors.yellow_400,
  borderWidth: "2px",
  boxShadow: shadowMixins.boxShadowRegular,
  width: "1.5rem",
  height: "1.5rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: colors.white,
  ...rounded.full,
  ...text.size.sm,

  "@media": {
    [media.sm]: {
      left: "-1.75rem",
    },
  },
});
