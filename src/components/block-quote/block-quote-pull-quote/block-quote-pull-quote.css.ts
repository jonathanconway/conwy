import { globalStyle, style } from "@vanilla-extract/css";

import { rounded } from "../../styling";
import { vars } from "../../theme";

export const pullQuote = style({
  padding: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  ...rounded.md,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.aside.border.color,
  backgroundColor: vars.aside.background.color,
  position: "relative",
  paddingRight: "5rem",

  ":after": {
    position: "absolute",
    content: " ",
    right: "1rem",
    top: "1rem",
    width: "3rem",
    height: "3rem",
    opacity: 0.125,
    backgroundImage: "url(/images/components/icon/svg/quote.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "3rem",
  },
});

globalStyle(`${pullQuote} p:first-child`, {
  marginTop: 0,
});
