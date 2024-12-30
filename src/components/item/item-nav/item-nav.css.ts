import {
  cn,
  flex,
  flex_1,
  flex_col,
  font_bold,
  gap_1,
  group_name,
  hover,
  justify_center,
  overflow_hidden,
  sm,
  text_ellipsis,
  text_sm,
  text_xs,
  underline,
} from "@jonathanconway/tailwindjs";
import { globalStyle, style } from "@vanilla-extract/css";

import * as labelStyles from "../../label/label.css";
import * as listItemStyles from "../../list-item/list-item.styles";
import { gap, media, responsive, rounded, size } from "../../styling";
import { vars } from "../../theme";

export const navsContainer = style({
  display: "flex",
  flex: 1,
  ...responsive.flexDirectionColumnMobileRowElse,
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

export const mainColumn = cn(
  flex,
  flex_col,
  flex_1,
  gap_1,
  justify_center,
  overflow_hidden,
);

export const asideColumn = listItemStyles.asideColumn;

export const label = labelStyles.label;

export const title = cn(
  font_bold,
  group_name(hover.name, underline),
  text_xs,
  sm(text_sm),
  text_ellipsis,
  overflow_hidden,
);
