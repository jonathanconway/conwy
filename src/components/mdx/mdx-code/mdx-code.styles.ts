import {
  border,
  border_stone_400,
  border_stone_700,
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

  text_sm,

  rounded_md,
  border,
  border_stone_400,
  dark(border_stone_700),
  px_1_5,

  group_name(pre_group_name, border),
  group_name(pre_group_name, border_stone_400),
  group_name(pre_group_name, rounded_md),
  group_name(pre_group_name, px_1_5),
);
