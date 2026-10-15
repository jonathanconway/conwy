import { ComplexStyleRule } from "@vanilla-extract/css";

import * as labelMixins from "../../label/label.mixins";
import { gap, media, responsive, rounded } from "../../styling";
import * as textSizeMixins from "../../text/text-size/text-size.mixins";
import * as textWeightMixins from "../../text/text-weight/text-weight.mixins";
import { vars } from "../../theme";

export const navsContainer = {
  display: "flex",
  flex: 1,
  ...responsive.flexDirectionMobileColumnRowElse,
  ...gap._2,
};

export const navItem = {
  flex: 1,
  width: "100%",
};

export const containerEmpty = {
  display: "flex",
  width: "100%",
  padding: "0.25rem",
  backgroundColor: vars.itemNav.placeholder.background.color,
  opacity: 0.5,

  ...rounded.md,

  "@media": {
    [media.sm]: {
      display: "none",
    },
  },
};

export const mainColumn: ComplexStyleRule = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.5rem",
  justifyContent: "center",
  overflow: "hidden",
};

export const asideColumn = {
  display: "flex",
  alignContent: "center",
};

export const label = {
  ...labelMixins.label,
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
};

export const labelText = {};

export const title = {
  ...textWeightMixins.navText,
  ...textSizeMixins.small,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",

  "@media": {
    [media.sm]: {
      maxWidth: "20vw",
    },
  },
};
