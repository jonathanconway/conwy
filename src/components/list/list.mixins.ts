import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

// todo: within text flow, e.g. MdxContainer, generically apply top margin to direct children
// elsewhere, don't

export const list: ComplexStyleRule & GlobalStyleRule = {
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingRight: "1.5rem",
  paddingBottom: 0,
  paddingLeft: "1.5rem",
};

export const unorderedList: ComplexStyleRule & GlobalStyleRule = {
  ...list,
};

export const unorderedListBullets: ComplexStyleRule & GlobalStyleRule = {
  listStyleType: "disc",
};

export const unorderedListNoBullets: ComplexStyleRule & GlobalStyleRule = {
  // margin: 0,
  paddingInline: 0,
  listStyle: "none",
};

export const orderedList: ComplexStyleRule & GlobalStyleRule = {
  ...list,
};
