import {
  all,
  bg_gradient_to_b,
  bg_gradient_to_t,
  border,
  border_stone_300,
  border_stone_700,
  cn,
  content_center,
  dark,
  from_stone_100,
  from_stone_500,
  h_5,
  h_full,
  inline_flex,
  items_center,
  rounded,
  text_white,
  to_stone_300,
  to_stone_700,
  w_5,
  w_full,
} from "@jonathanconway/tailwindjs";

const buttonSelectedFalse = cn(
  from_stone_100,
  to_stone_300,

  dark(from_stone_500),
  dark(to_stone_700),

  bg_gradient_to_b,

  border_stone_300,
  dark(border_stone_700),
);

const buttonSelectedTrue = cn(
  dark(from_stone_100),
  dark(to_stone_300),

  from_stone_500,
  to_stone_700,

  bg_gradient_to_t,

  border_stone_700,
  dark(border_stone_300),
);

export const button = (isSelected = false) =>
  cn(
    inline_flex,
    items_center,
    content_center,

    isSelected ? buttonSelectedTrue : buttonSelectedFalse,

    rounded,
    border,
    w_5,
    h_5,

    all(w_full),
    all(h_full),

    dark(text_white),
  );
