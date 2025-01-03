import { globalStyle, style } from "@vanilla-extract/css";

import { colors, rounded, text } from "../../styling";

export const fragment = style({
  ...text.size.sm,
});

const h3 = {
  paddingTop: "1.25rem",
};

globalStyle(`${fragment} > h3:not(:first-child)`, h3);

const h4 = {
  paddingTop: "1.25rem",
};

globalStyle(`${fragment} > h4:not(:first-child)`, h4);

const hr = {
  marginTop: "1rem",
};

globalStyle(`${fragment} hr`, hr);

const p = {
  paddingTop: "0.5rem",
  ...text.size.sm,
  lineHeight: "1.5rem",
};

globalStyle(`${fragment} p`, p);

// globalStyle(`${fragment} p:not(:first-child)`, {
//   paddingTop: "0.5rem",
// });

const pFirst = {
  paddingTop: 0,
};

globalStyle(`${fragment} p:first-child`, pFirst);

const ol = {
  listStyleType: "decimal",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: 0,
  paddingRight: "1.5rem",
  paddingBottom: 0,
  paddingLeft: "1.5rem",
};

globalStyle(`${fragment} ol`, ol);

const ul = {
  listStyleType: "disc",
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingRight: "1.5rem",
  paddingBottom: 0,
  paddingLeft: "1.5rem",
};

globalStyle(`${fragment} ul`, ul);

const li = {
  marginTop: "0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1.5rem",
};

globalStyle(`${fragment} li`, li);

const pre = {
  marginTop: "1rem",
  marginBottom: "1rem",
  padding: "1rem",
  backgroundColor: colors.stone_200,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: colors.stone_400,
  ...rounded.md,
  whiteSpace: "pre-wrap",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
};

globalStyle(`${fragment} pre`, pre);

const childPFirst = {
  paddingTop: 0,
};

globalStyle(`${fragment} * > p:first-child`, childPFirst);
