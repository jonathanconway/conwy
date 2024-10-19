import {
  bg_stone_200,
  bg_stone_800,
  cn,
  cursor_pointer,
  dark,
  hover,
} from "@jonathanconway/tailwindjs";

export const linkBox = cn(
  hover(bg_stone_200),
  hover(dark(bg_stone_800)),

  cursor_pointer,
);
