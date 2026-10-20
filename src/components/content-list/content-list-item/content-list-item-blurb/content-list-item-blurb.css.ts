import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import * as textSizeConsts from "../../../text/text-size/text-size.consts";

export const blurb = style({
  fontSize: rems(textSizeConsts.fontSizeRems.s),
});
