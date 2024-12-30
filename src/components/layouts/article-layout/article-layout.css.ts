import { globalStyle, style } from "@vanilla-extract/css";

import { media } from "../../styling";

export const headerWrapper = style({
  width: "100%",
  paddingLeft: "1rem" /* 16px */,
  paddingRight: "1rem" /* 16px */,

  "@media": {
    [media.sm]: {
      position: "absolute",
      top: 0,
    },
  },
});

globalStyle(`${headerWrapper} *`, {
  margin: "auto",

  "@media": {
    [media.sm]: {
      width: "65rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
});

export const mainWrapper = style({
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: "1rem",
  paddingRight: "1rem",

  "@media": {
    [media.sm]: {
      display: "flex",
      flexDirection: "row",
      marginLeft: "auto",
      marginTop: "7rem",
      width: "43rem",
      gap: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    [media.lg]: {
      paddingLeft: 0,
    },
  },
});

export const asideWrapper = style({
  display: "none",
  position: "sticky",
  top: 0,
  marginTop: "12rem",
  marginRight: "auto",
  paddingTop: "2.5rem",
  paddingRight: "2rem",

  "@media": {
    [media.sm]: {
      display: "flex",
      width: "18rem",
    },
  },
});

export const footerWrapper = style({
  left: 0,
  right: 0,
  marginTop: "1rem",
  paddingTop: "1rem" /* 16px */,
  paddingBottom: "1rem",

  "@media": {
    [media.sm]: {
      position: "absolute",
      marginTop: "7rem",
      paddingTop: "2.5rem" /* 16px */,
      paddingBottom: "2.rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
});

globalStyle(`${footerWrapper} *`, {
  margin: "auto",

  "@media": {
    [media.sm]: {
      width: "60rem",
    },
  },
});
