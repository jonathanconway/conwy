import { ComplexStyleRule } from "@vanilla-extract/css";

import { media } from "../../../styling";

export const resultsItems: ComplexStyleRule = {
  overflow: "scroll",
  flex: 1,
  minHeight: "70vh",
  maxHeight: "70vh",
  height: "70vh",
  gap: "0.5rem",

  "@media": {
    [media.lessThanMd]: {
      display: "flex",
      flexDirection: "column",
    },
    [media.mdAndUp]: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gridAutoRows: "max-content",
    },
    [media.lgAndUp]: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  },
};

export const resultsInnerContainer = {
  display: "flex",
  height: "70vh",
  minHeight: "70vh",
  maxHeight: "70vh",
};
