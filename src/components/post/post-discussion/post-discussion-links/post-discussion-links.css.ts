import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import * as textSizeConsts from "../../../text/text-size/text-size.consts";

export const discussion = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  marginTop: "0.5rem",
});

export const count = style({
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
});
