import { ComplexStyleRule } from "@vanilla-extract/css";

import { media } from "./media";

export const responsive: Record<string, ComplexStyleRule> = {
  flexDirectionColumnMobileRowElse: {
    flexDirection: "row",
    "@media": {
      [media.sm]: {
        flexDirection: "column",
      },
    },
  },
  flexDirectionRowMobileColumnElse: {
    flexDirection: "column",
    "@media": {
      [media.sm]: {
        flexDirection: "row",
      },
    },
  },
};
