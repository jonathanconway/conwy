import {
  absolute,
  bottom_0,
  cn,
  h_full,
  left_0,
  relative,
  right_0,
  top_0,
  w_full,
} from "@jonathanconway/tailwindjs";

export const DEFAULT_SIZE = "1rem";

export const iconContainer = cn(relative);

export const iconSvg = cn(w_full, h_full);

export const iconOverlay = cn(absolute, left_0, top_0, right_0, bottom_0);
