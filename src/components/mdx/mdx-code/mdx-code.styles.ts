import {
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_400,
  cn,
  dark,
  group_name,
  px_1_5,
  rounded_md,
  text_sm,
  whitespace_pre_wrap,
} from "@jonathanconway/tailwindjs";

import { pre_group_name } from "../mdx-pre/mdx-pre.styles";

export const code = cn(
  whitespace_pre_wrap,

  bg_stone_200,
  dark(bg_stone_800),

  text_sm,

  group_name(pre_group_name, border),
  group_name(pre_group_name, border_stone_400),
  group_name(pre_group_name, rounded_md),
  group_name(pre_group_name, px_1_5),
);
