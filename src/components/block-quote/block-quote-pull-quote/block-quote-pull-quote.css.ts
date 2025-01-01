import { globalStyle, style } from "@vanilla-extract/css";

export const pullQuote = style({
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
