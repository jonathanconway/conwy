import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

export const stackBase: ComplexStyleRule = {
  display: "flex",
  gap: "1rem",
};

export const stackColumn: ComplexStyleRule = {
  flexDirection: "column",
};

export const stackRow: ComplexStyleRule = {
  flexDirection: "row",
};

export const stackColumnReverse: ComplexStyleRule = {
  flexDirection: "column-reverse",
};

export const stackRowReverse: ComplexStyleRule = {
  flexDirection: "row-reverse",
};

export const stackChildrenDistributionEven: GlobalStyleRule = {
  flex: 1,
};

export const stackChildrenDistributionFlow: GlobalStyleRule = {};
