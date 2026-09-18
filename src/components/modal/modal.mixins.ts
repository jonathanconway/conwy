import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import { colors, media, rounded, text } from "../styling";
import { vars } from "../theme";

export const backdrop: ComplexStyleRule = {
  position: "fixed",
  display: "flex",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: colors.black_50,
};

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
  overflow: "hidden",

  "@media": {
    [media.sm]: {
      marginLeft: "1rem",
      marginRight: "1rem",
      width: "100%",
    },
    [media.mdAndUp]: {
      marginInline: "auto",
      maxWidth: "50rem",
      minWidth: "38rem",
      width: "70vw",
    },
  },
};

/*
  Fix to prevent unwanted zoom on inputs inside modals.
  Most mobile browsers require font-size in inputs to be 16px.

  Source - https://stackoverflow.com/a/45769607
  Posted by Azamat Rasulov, modified by community. See post 'Timeline' for change history
  Retrieved 2026-09-18, License - CC BY-SA 4.0
*/
export const modalInputZoomFix: GlobalStyleRule = {
  fontSize: "16px",
};

export const modalHeader: ComplexStyleRule = {
  display: "flex",
  gap: "1rem",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const modalTitle: ComplexStyleRule = {
  ...text.size.xl,
  fontWeight: "bold",
  display: "inline-flex",
};

export const modalToolbar: ComplexStyleRule = {
  display: "flex",
  justifyContent: "space-between",
  top: 0,
  right: 0,
  gap: "0.5rem",
};

export const modalMain: ComplexStyleRule = {
  flex: 1,
};
