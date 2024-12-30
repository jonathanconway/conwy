import { style } from "@vanilla-extract/css";

import { filters, media } from "../../styling";
import { vars } from "../../theme";

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
  filter: vars.headerLogo.filter,
  pointerEvents: "none",
  marginLeft: "-0.375rem",
  width: "8rem",
  "@media": {
    [media.sm]: {
      width: "8rem",
    },
  },
});

export const text = style({ display: "none" });
