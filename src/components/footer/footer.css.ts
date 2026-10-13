import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import { linkContent } from "../link/link.mixins";
import * as textSizeConsts from "../text/text-size/text-size.consts";
import { vars } from "../theme";

export const left = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.5rem",
});

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "1rem" /* 16px */,
  backgroundColor: vars.footer.background.color,
  color: vars.footer.color || undefined,
});

export const row = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
});

export const link = style({
  ...linkContent,
  textDecorationLine: "underline",
});
