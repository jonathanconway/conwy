import { style } from "@vanilla-extract/css";

import { helpers, vars } from "../../theme";

export const faceAndLogoContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
});

export const logoContainer = style({
  position: "relative",
  height: "1.5rem",
  ":hover": {
    filter: vars.filters.brightness_110,
  },
  ":focus": {
    filter: vars.filters.brightness_110,
  },
});

export const logo = style({
  filter: vars.filters.logo,
  width: "8rem",
  pointerEvents: "none",
  "@media": {
    [helpers.media.sm]: {
      marginLeft: "-0.375rem",
      width: "10rem",
    },
  },
});

export const text = style({ display: "none" });
