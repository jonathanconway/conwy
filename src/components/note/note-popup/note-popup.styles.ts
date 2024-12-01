import {
  border,
  border_b_stone_50,
  border_b_stone_950,
  border_r_stone_50,
  border_r_stone_950,
  border_red_100,
  cn,
  dark,
  flex_1,
  inline_flex,
  items_center,
  justify_center,
  shadow,
  shadow_md,
} from "@jonathanconway/tailwindjs";
import { CSSProperties } from "react";

export const childrenContainer = cn(
  inline_flex,
  flex_1,
  justify_center,
  items_center,
  border,
  border_red_100,
);

export const tooltip = cn(shadow, shadow_md);

export const tooltipStyles = {
  backgroundColor: "var(--page-background-color)",
  color: "var(--text-color)",
  zIndex: 10_000,
  pointerEvents: "all",
  maxWidth: "20rem",
} as CSSProperties;

export const tooltipBorder = `solid 1px var(--text-color)`;

export const tooltipArrow = cn(
  border_b_stone_950,
  dark(border_b_stone_50),
  border_r_stone_950,
  dark(border_r_stone_50),
);
