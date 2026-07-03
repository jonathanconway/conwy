import { style } from "@vanilla-extract/css";

import * as textSizeMixins from "../../../text/text-size/text-size.mixins";
import { vars } from "../../../theme";

export const tags = style({
  marginTop: "0.25rem",
  ...textSizeMixins.xs,
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  flexFlow: "wrap",
});

export const tag = style({
  display: "flex",
  backgroundColor: "#fefefe",
  border: "solid 1px gray",
  borderRadius: "0.25rem",
});

export const tagGroup = style({
  borderRight: "solid 1px gray",
  color: vars.text.body.color,
  padding: "0.0125rem 0.125rem",
});

export const tagName = style({
  color: vars.link.text.color,
  padding: "0.0125rem 0.125rem",
});
