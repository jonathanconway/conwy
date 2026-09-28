import { globalStyle, style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";
import { filters } from "../../styling";
import { vars } from "../../theme";

export const faceAndLogoContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
  outline: "none",
});

export const link = style({
  ...linkMixins.link,
  display: "inline-block",
  marginLeft: "-0.25rem", // Allow extra surface area for pointer events: hover, click
  marginTop: "0.5rem",
  height: "2.5rem",
  outline: "none",
});

globalStyle([`${link}:hover > span`, `${link}:focus > span`].join(", "), {
  filter: filters.brightness_110,
});

export const logo = style({
  filter: vars.headerLogo.filter,
  pointerEvents: "none",
  marginLeft: "-0.375rem",
  width: "8.5rem",
  padding: "0.25rem",
});

export const text = style({ display: "none" });
