import { globalStyle, style } from "@vanilla-extract/css";

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

// export const navContainer = style({
//   position: "relative",
//   width: size.full,
//   display: "flex",
//   flexDirection: "row",
//   gap: "1rem",
//   ...boxBorder,
// });

//   hover(bg_stone_200),
//   hover(dark(bg_stone_800)),

//   p_1,

//   text_stone_950,
//   dark(text_stone_50),
//   hover(text_stone_950),
//   hover(dark(text_stone_50)),

export const mainColumn = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.25rem",
  justifyContent: "center",
  overflow: "hidden",
});

export const asideColumn = ""; // listItemStyles.asideColumn;

export const label = ""; // labelStyles.label;

export const title = style({
  fontWeight: "bold",
  ...text.size.xs,
  textOverflow: "ellipsis",
  overflow: "hidden",

  "@media": {
    [media.sm]: {
      ...text.size.sm,
    },
  },
});
