import { globalStyle, style } from "@vanilla-extract/css";

import * as labelMixins from "../../label/label.mixins";
import { gap, media, responsive, rounded, size, text } from "../../styling";
import { vars } from "../../theme";

export const navsContainer = style({
  display: "flex",
  flex: 1,
  ...responsive.flexDirectionMobileColumnRowElse,
  ...gap._2,
});

globalStyle(`${navsContainer} > *`, {
  flex: 1,
});

export const containerEmpty = style({
  display: "flex",
  width: size.full,
  ...rounded.md,
  padding: "0.25rem",
  backgroundColor: vars.itemNav.placeholder.background.color,
  opacity: 0.5,

  "@media": {
    [media.sm]: {
      display: "none",
    },
  },
});

export const mainColumn = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.25rem",
  justifyContent: "center",
  overflow: "hidden",
});

export const asideColumn = style({
  display: "flex",
  alignContent: "center",
});

export const label = style({
  ...labelMixins.label,
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});

export const labelText = style({});

export const title = style({
  fontWeight: "bold",
  ...text.size.xs,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",

  "@media": {
    [media.sm]: {
      maxWidth: "20vw",
    },
  },
});
