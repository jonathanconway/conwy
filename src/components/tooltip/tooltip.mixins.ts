import { CSSProperties } from "react";

import { rems } from "@/framework/css";

import { spacingRems } from "../spacing/spacing.consts";
import * as textSizeMixins from "../text/text-size/text-size.mixins";
import * as textWeightMixins from "../text/text-weight/text-weight.mixins";
import { vars } from "../theme";

export const tooltip: CSSProperties = {
  ...textSizeMixins.small,
  ...textWeightMixins.body,
  backgroundColor: vars.tooltip.background.color,
  color: vars.tooltip.color,
  padding: `${rems(spacingRems.xs)} ${rems(spacingRems.s)}`,
  maxWidth: rems(15),
  textShadow: "none",
  zIndex: 10_000,
  userSelect: "none",
};

export const childrenContainer = {
  display: "inline-flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};
