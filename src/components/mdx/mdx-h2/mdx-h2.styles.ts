import {
  absolute,
  bottom_0,
  cn,
  flex,
  font_semibold,
  group,
  group_name,
  hover,
  invisible,
  items_center,
  left_4,
  neg,
  pl_4,
  relative,
  text_sky_500,
  text_sm,
  text_stone_500,
  text_xl,
  top_0,
  visible,
} from "@jonathanconway/tailwindjs";

export const link = cn(
  group,
  relative,
  hover(text_sky_500),
  text_xl,
  font_semibold,
);

export const linkHoverHash = cn(
  absolute,
  flex,
  top_0,
  items_center,
  neg(left_4),
  bottom_0,

  text_stone_500,
  invisible,
  group_name(hover.name, visible),
  pl_4,
  text_sm,
);
