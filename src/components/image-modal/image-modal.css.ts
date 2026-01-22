import { style } from "@vanilla-extract/css";

import { boxBorderDecorative } from "../box/box.mixins";
import * as modalMixins from "../modal/modal.mixins";
import { media, rounded } from "../styling";
import { vars } from "../theme";

export const imageModalButtonsContainer = style({
  display: "flex",
  justifyContent: "space-between",
  top: 0,
  right: 0,
  gap: "0.5rem",
});

export const imageModal = style({
  ...modalMixins.modal,
  width: "80vw",
  height: "90vh",
  "@media": {
    [media.lessThanMd]: {
      width: "90%",
    },
  },
});

export const imageModalMain = style({
  position: "relative",
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flex: 1,
  height: "100%",

  "@media": {
    [media.lessThanLg]: {
      flexDirection: "column",
    },
    [media.lgAndUp]: {
      flexDirection: "row",
    },
  },
});

export const imageContainer = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const image = style({
  width: "100%",
  height: "auto",
  maxHeight: "80vh",
  maxWidth: "unset",
  padding: "0.375rem",
  ...rounded.lg,
  borderWidth: "2px",
  // todo: come up with an abstraction
  borderColor: boxBorderDecorative.borderColor,
  backgroundColor: vars.layout.body.background.color,

  "@media": {
    // [media.lessThanLg]: {
    //   maxWidth: "100%",
    // },
    // [media.lgAndUp]: {
    //   maxWidth: "70vw",
    // },
  },
});
