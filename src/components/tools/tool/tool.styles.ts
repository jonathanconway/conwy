import {
  all,
  border,
  border_stone_300,
  border_stone_700,
  cn,
  dark,
  flex,
  flex_col,
  gap_1,
  h_8,
  max_w_12,
  mt_1,
  p_2,
  relative,
  rounded_md,
  w_72,
  w_auto,
} from "@jonathanconway/tailwindjs";

import { linkBox } from "../../link-box/link-box.css";

export const toolLinkBox = cn(
  linkBox,

  flex,
  flex_col,
  gap_1,

  rounded_md,
  border,
  border_stone_300,
  dark(border_stone_700),
  relative,
  p_2,
  w_72,

  "group",
);

export const toolTitle = cn();

export const toolImageContainer = cn(relative, h_8);

export const toolImage = cn();
