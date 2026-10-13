import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import * as textSizeConsts from "../../../text/text-size/text-size.consts";

export const blurb = style({
  fontSize: rems(textSizeConsts.fontSizeRems.sm),
});
