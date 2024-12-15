import {
  border_2,
  border_b,
  border_stone_300,
  border_stone_700,
  border_stone_900,
  cn,
  dark,
  flex,
  flex_row,
  gap_6,
  items_start,
  mt_4,
  my_10,
  pb_10,
  rounded_full,
  w_14,
} from "@jonathanconway/tailwindjs";
import { style } from "@vanilla-extract/css";

import { colors } from "../vars";

export const container = style({
  display: "flex",
  flexDirection: "row",

  marginTop: "2.5rem",
  marginBottom: "2.5rem",
  gap: "1.5rem",
  alignItems: "flex-start",
  paddingBottom: "2.5rem",

  borderBottomWidth: "1px",
  borderColor: colors.stone_300,
});
// my_10,

// flex,
// flex_row,
// gap_6,
// items_start,
// pb_10,

// border_b,
// border_stone_300,
// dark(border_stone_700),
// );

export const face = cn(
  w_14,
  rounded_full,
  border_2,
  border_stone_900,
  dark(border_stone_700),
  mt_4,
);
