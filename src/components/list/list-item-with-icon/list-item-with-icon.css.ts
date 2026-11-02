import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import * as iconMixins from "../../icon/icon.mixins";
import { lineHeightRems } from "../../text/text-size/text-size.consts";
import * as textSizeMixins from "../../text/text-size/text-size.mixins";
import * as textWeightMixins from "../../text/text-weight/text-weight.mixins";

export const workProjectsListItemTitle = style({
  fontSize: textSizeMixins.small.fontSize,
  lineHeight: rems(lineHeightRems.s),
  minHeight: rems(1),
  ...textWeightMixins.body,
  flex: 1,
});

export const workProjectsListItemIcon = style({
  display: "flex",
  ...iconMixins.iconContainer,
  width: rems(1),
  alignItems: "center",
  justifyContent: "center",
});
