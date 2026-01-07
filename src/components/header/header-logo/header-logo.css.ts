import { style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";
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
});

export const link = style({
  ...linkMixins.link,
  display: "inline-block",
  // Allow extra surface area for pointer events: hover, click
  marginLeft: "-0.25rem",
  marginTop: "0.5rem",
  height: "2.5rem",
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
  width: "8.5rem",
  padding: "0.25rem",
});

export const text = style({ display: "none" });
