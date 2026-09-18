import { ComplexStyleRule } from "@vanilla-extract/css";

import { media } from "../../../styling";

const resultsContainerHeight = "80vh";

export const resultsContainer = {
  display: "flex",
  overflow: "scroll",
  height: resultsContainerHeight,
  minHeight: resultsContainerHeight,
  maxHeight: resultsContainerHeight,
};

const resultsContainerGap = "0.5rem";

export const resultsInnerContainer: ComplexStyleRule = {
  display: "flex",
  flex: 1,
  gap: resultsContainerGap,

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

const resultsContainerLabelHeight = "1rem";

const resultsContainerWithLabelHeight = `calc(${resultsContainerHeight} - ${resultsContainerLabelHeight} - ${resultsContainerGap})`;

export const resultsContainerWithLabel: ComplexStyleRule = {
  ...resultsContainer,
  minHeight: resultsContainerWithLabelHeight,
  maxHeight: resultsContainerWithLabelHeight,
};

export const resultsContainerLabel: ComplexStyleRule = {
  display: "inline-flex",
  flex: "unset",
  height: resultsContainerLabelHeight,
};
