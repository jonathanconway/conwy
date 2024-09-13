import {
  brightness_110,
  brightness_125,
  cn,
  dark,
  flex,
  flex_row,
  focus,
  gap_4,
  h_6,
  hidden,
  hover,
  items_center,
  ml_1_5,
  neg,
  pointer_events_none,
  relative,
  sm,
  w_32,
  w_40,
} from "@jonathanconway/tailwindjs";

export const faceAndLogoContainer = cn(flex, flex_row, gap_4, items_center);

export const logoContainer = cn(
  relative,
  h_6,
  hover(brightness_110),
  focus(brightness_110),
);

export const logo = cn(
  sm(neg(ml_1_5)),
  dark(brightness_125),
  w_32,
  sm(w_40),
  pointer_events_none,
);

export const text = cn(hidden);

export const tooltip = {
  backgroundColor: "var(--color-sky-300)",
  color: "black",
};
