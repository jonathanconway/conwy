import {
  cn,
  dark,
  hover,
  text_purple_300,
  text_purple_400,
  text_purple_500,
  text_purple_600,
} from "@jonathanconway/tailwindjs";

export const linkBracketedItem = cn(
  text_purple_600,
  dark(text_purple_300),

  hover(text_purple_500),
  hover(dark(text_purple_400)),
);
