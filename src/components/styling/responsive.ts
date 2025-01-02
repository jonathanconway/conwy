import { ComplexStyleRule } from "@vanilla-extract/css";

import { media } from "./media";

export const responsive = {
  flexDirectionMobileColumnRowElse: {
    flexDirection: "row",
    "@media": {
      [media.sm]: {
        flexDirection: "column",
      },
    },
  } as ComplexStyleRule,

  flexDirectionMobileRowColumnElse: {
    flexDirection: "column",
    "@media": {
      [media.sm]: {
        flexDirection: "row",
      },
    },
  } as ComplexStyleRule,
};
