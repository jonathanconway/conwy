import {
  cn,
  cursor_pointer,
  dark,
  font_medium,
  hover,
  inline_block,
  text_inherit,
  text_sky_300,
  text_sky_400,
  text_sky_500,
  text_sky_600,
  underline,
} from "@jonathanconway/tailwindjs";

export const link = cn(
  inline_block,

  text_sky_600,
  dark(text_sky_300),
  font_medium,

  hover(text_sky_500),
  hover(dark(text_sky_400)),
  hover(underline),

  cursor_pointer,
);

export const linkIcon = cn(text_inherit);
