import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import * as buttonStyles from "../button/button.css";

export const iconButtonBase = cn(
  buttonStyles.buttonBase,
  style({
    display: "inline-flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: "0.25rem",
    borderWidth: "1px",
    width: "1.5rem",
    height: "1.5rem",
    padding: "0.25rem",
  }),
);

export const iconButtonSelected = buttonStyles.buttonSelected;

export const iconButtonUnselected = buttonStyles.buttonUnselected;

// export const iconButtonSelected = cn(
//   dark(from_stone_100),
//   dark(to_stone_300),

//   from_stone_500,
//   to_stone_700,

//   bg_gradient_to_t,

//   border_stone_700,
//   dark(border_stone_300),
// );

// export const iconButtonUnselected = cn(
//   bg_gradient_to_b,

//   from_stone_100,
//   to_stone_300,

//   enabled(hover(from_stone_200)),
//   enabled(hover(to_stone_400)),

//   dark(from_stone_500),
//   dark(to_stone_700),

//   enabled(hover(dark(from_stone_400))),
//   enabled(hover(dark(to_stone_600))),

//   border_stone_300,
//   enabled(hover(border_stone_400)),

//   dark(border_stone_700),
//   enabled(hover(dark(border_stone_600))),
// );

export const icon = style({
  pointerEvents: "none",
});

export const iconButtonDisabled = style({
  opacity: 0.3,
});
