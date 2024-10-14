import {
  cn,
  cursor_pointer,
  dark,
  decoration_sky_300,
  decoration_sky_400,
  decoration_sky_500,
  decoration_sky_600,
  font_medium,
  gap_1_5,
  group,
  hover,
  inline_flex,
  items_center,
  text_inherit,
  text_sky_300,
  text_sky_400,
  text_sky_500,
  text_sky_600,
  underline,
} from "@jonathanconway/tailwindjs";

export const linkDecoration = cn(
  decoration_sky_600,
  dark(decoration_sky_300),

  `group:hover:decoration-sky-500`,
  `group:hover:dark:decoration-sky-400`,
  group(hover(decoration_sky_500)),
  group(hover(dark(decoration_sky_400))),
);

export const link = cn(
  "group",

  inline_flex,
  items_center,

  font_medium,
  hover(underline),

  cursor_pointer,

  linkDecoration,
);

export const linkIcon = cn(text_inherit);

export const linkText = cn(
  inline_flex,
  items_center,
  gap_1_5,

  text_sky_600,
  dark(text_sky_300),

  hover(text_sky_500),
  hover(dark(text_sky_400)),
);
