import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { rounded } from "../../../styling";
import * as textSizeConsts from "../../../text/text-size/text-size.consts";

export const image = style({
  ...rounded.md,
});

export const date = style({
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
});
