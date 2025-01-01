import { ComplexStyleRule } from "@vanilla-extract/css";

import { media } from "./media";

export const responsive = {
  flexDirectionColumnMobileRowElse: {
    flexDirection: "row",
    "@media": {
      [media.sm]: {
        flexDirection: "column",
      },
    },
  } as ComplexStyleRule,
  flexDirectionRowMobileColumnElse: {
    flexDirection: "column",
    "@media": {
      [media.sm]: {
        flexDirection: "row",
      },
    },
  } as ComplexStyleRule,
};
