import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import * as iconMixins from "../../../icon/icon.mixins";
import * as linkMixins from "../../../link/link.mixins";
import { rounded } from "../../../styling";
import * as textSizeConsts from "../../../text/text-size/text-size.consts";
import { vars } from "../../../theme";

export const mainLink = style({
  ...linkMixins.link,
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
});

// todo: extract to separate component
export const decorationContainer = style({
  ...rounded.md,
  height: "3.5rem",
  color: vars.microsListItem.decorationContainer.color,
});

export const decoration = style({
  ...iconMixins.iconContainer,
  width: "100%",
  height: "100%",
});

export const decorativeImage = style({
  width: "70%",
  height: "auto",
  float: "right",
  opacity: 0.25,
});
