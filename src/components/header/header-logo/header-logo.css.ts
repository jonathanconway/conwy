import { style } from "@vanilla-extract/css";

import { filters, media } from "../../vars";

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
    filter: filters.brightness_110,
  },
  ":focus": {
    filter: filters.brightness_110,
  },
});

export const logo = style({
  filter: filters.dark.brightness_125,
  width: "8rem",
  pointerEvents: "none",
  "@media": {
    [media.sm]: {
      marginLeft: "-0.375rem",
      width: "10rem",
    },
  },
});

export const text = style({ display: "none" });
