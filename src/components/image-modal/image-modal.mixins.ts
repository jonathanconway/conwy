import { ComplexStyleRule } from "@vanilla-extract/css";

import { boxBorderDecorative } from "../box/box.mixins";
import * as modalMixins from "../modal/modal.mixins";
import { media, rounded } from "../styling";
import { vars } from "../theme";

export const imageModalButtonsContainer = {
  display: "flex",
  justifyContent: "space-between",
  top: 0,
  right: 0,
  gap: "0.5rem",
};

export const imageModal = {
  ...modalMixins.modal,
  width: "90vw",
  height: "90vh",
  "@media": {
    [media.lessThanMd]: {
      width: "90%",
    },
  },
};

export const imageModalMain: ComplexStyleRule = {
  position: "relative",
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flex: 1,
  height: "100%",

  "@media": {
    [media.lessThanMd]: {
      flexDirection: "column",
    },
    [media.mdAndUp]: {
      flexDirection: "row",
    },
  },
};

export const imageContainer: ComplexStyleRule = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

export const image = {
  margin: "auto",
  width: "100%",
  height: "auto",
  maxHeight: "80vh",
  maxWidth: "100%",
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
};
