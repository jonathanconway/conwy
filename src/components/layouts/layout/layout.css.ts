import {
  bg_blue_100,
  bg_stone_100,
  bg_stone_700,
  bg_stone_900,
  bg_white,
  cn,
  dark,
  flex,
  flex_col,
  flex_row,
  overflow_y_visible,
  relative,
  selection,
  sm,
} from "@jonathanconway/tailwindjs";
import { globalStyle, style } from "@vanilla-extract/css";

import * as textStyles from "../../text/text.styles";
import { vars } from "../../theme";

export const html = style({
  backgroundColor: vars.colors.behind_page_background,
});

export const bodyBackground = style({
  backgroundColor: vars.colors.page_background,
});

const text = style({
  color: vars.colors.text,
});

globalStyle("::selection", {
  backgroundColor: vars.colors.selection_background,
});

export const body = cn(
  relative,
  overflow_y_visible,

  text,

  flex,
  flex_col,
  sm(flex_row),

  bodyBackground,
);
