import {
  absolute,
  bottom_0,
  cn,
  flex,
  h_full,
  inline_block,
  left_0,
  pointer_events_none,
  relative,
  right_0,
  top_0,
  w_full,
} from "@jonathanconway/tailwindjs";

export const DEFAULT_SIZE = "1rem";

export const iconContainer = cn(relative, inline_block, pointer_events_none);

export const iconSvg = cn(w_full, h_full);

export const iconOverlay = cn(absolute, left_0, top_0, right_0, bottom_0);

export const iconMaterial = cn(flex, w_full, h_full);

export const iconMaterialStyleOverrides = {
  display: "flex",
  width: "100%",
  height: "100%",
};
