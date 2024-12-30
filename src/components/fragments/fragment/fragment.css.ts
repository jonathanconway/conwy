import { globalStyle, style } from "@vanilla-extract/css";

import { colors, rounded } from "../../styling";

export const fragment = style({});

// todo: is there a better way?

const hr = {
  marginTop: "1rem",
};

globalStyle(`${fragment} hr`, hr);

const p = {
  paddingTop: "0.5rem",
  fontSize: "0.875rem" /* todo: add to variables */,
  lineHeight: "1.5rem",
};

globalStyle(`${fragment} p`, p);

const pFirst = {
  paddingTop: 0,
};

globalStyle(`${fragment} p:first-child`, pFirst);

const ol = {
  listStyleType: "decimal",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "1rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: 0,
  paddingBottom: 0,
};

globalStyle(`${fragment} ol`, ol);

const ul = {
  listStyleType: "disc",
  marginLeft: 0,
  marginRight: 0,
  marginTop: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: 0,
  paddingBottom: 0,
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
