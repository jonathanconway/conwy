import { globalStyle, style } from "@vanilla-extract/css";

import { helpers, vars } from "../../theme";

export const hiddenCheckbox = style({
  display: "none",
});

export const icon = style({
  color: vars.colors.mobile_menu_button,
  display: "none",

  "@media": {
    [helpers.media.sm]: {
      display: "inline-flex",
    },
  },
});

export const contents = style({
  position: "relative",
  zIndex: 0,
  right: "auto",
  marginTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  boxShadow: "0 0 #0000",
  backgroundColor: "transparent",
  color: vars.colors.mobile_menu,

  "@media": {
    [helpers.media.sm]: {
      position: "absolute",
      zIndex: 20,
      right: "0.5rem",
      marginTop: "15rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      backgroundColor: vars.colors.stone_800,
      color: vars.colors.stone_200,
    },
  },
});

globalStyle(`${hiddenCheckbox} ~ ${contents}`, {
  "@media": {
    [helpers.media.sm]: {
      display: "none",
    },
  },
});

globalStyle(`${hiddenCheckbox}:checked ~ ${contents}`, {
  "@media": {
    [helpers.media.sm]: {
      display: "flex",
    },
  },
});

export const menuBackdrop = style({
  display: "none",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10,
  backgroundColor: vars.colors.black_50,
});

globalStyle(`${hiddenCheckbox} ~ ${menuBackdrop}`, {
  "@media": {
    [helpers.media.sm]: {
      display: "none",
    },
  },
});

globalStyle(`${hiddenCheckbox}:checked ~ ${menuBackdrop}`, {
  "@media": {
    [helpers.media.sm]: {
      display: "flex",
    },
  },
});
