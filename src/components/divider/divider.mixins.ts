import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import { vars } from "../theme";

export const hr: ComplexStyleRule & GlobalStyleRule = {
  borderRight: 0,
  borderTopColor: vars.divider.color,
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderBottom: 0,
  borderLeft: 0,
  height: "1px",
};
