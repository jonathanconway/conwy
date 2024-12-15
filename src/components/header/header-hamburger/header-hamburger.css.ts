import {
  absolute,
  bg_stone_800,
  bg_transparent,
  bottom_0,
  cn,
  dark,
  fixed,
  left_0,
  mt_0,
  mt_60,
  px_0,
  px_2,
  relative,
  right_0,
  right_2,
  right_auto,
  shadow_lg,
  shadow_none,
  sm,
  text_stone_50,
  text_stone_200,
  text_stone_950,
  top_0,
  z_0,
  z_10,
  z_20,
} from "@jonathanconway/tailwindjs";
import { style } from "@vanilla-extract/css";

import { colors } from "../../vars";

export const hiddenCheckbox = style({
  display: "none",
});

export const icon = style({
  backgroundColor: colors.stone_100,
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        backgroundColor: colors.stone_900,
      },
    },
  },
});

export const contents = cn(
  absolute,
  sm(relative),

  z_20,
  sm(z_0),

  right_2,
  sm(right_auto),

  mt_60,
  sm(mt_0),

  px_2,
  sm(px_0),

  shadow_lg,
  sm(shadow_none),

  bg_stone_800,
  sm(bg_transparent),

  text_stone_200,
  sm(text_stone_950),
  sm(dark(text_stone_50)),
);

export const menuBackdrop = cn(
  fixed,
  top_0,
  bottom_0,
  left_0,
  right_0,
  z_10,
  `bg-black/50`,
);
