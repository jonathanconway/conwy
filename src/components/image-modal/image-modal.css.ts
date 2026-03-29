import { globalStyle, style } from "@vanilla-extract/css";

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
  width: "100%",
});

globalStyle(`${imageContainer} > div`, {
  width: "100%",
});

export const image = style({
  margin: "auto",
  height: "auto",
  maxHeight: "80vh",
  maxWidth: "unset",
  padding: "0.375rem",
  ...rounded.lg,
  borderWidth: "2px",
  borderColor: boxBorderDecorative.borderColor,
  backgroundColor: vars.layout.body.background.color,

  "@media": {
    [media.lessThanMd]: {
      width: "100%",
    },
  },
});
