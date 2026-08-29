import { style } from "@vanilla-extract/css";

import * as pullQuoteMixins from "../../block-quote/block-quote-pull-quote/block-quote-pull-quote.mixins";
import { vars } from "../../theme";

export const quotesListItem = style({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
});

export const quotePullQuote = style({
  ...pullQuoteMixins.pullQuote,
  marginBottom: 0,

  ":hover": {
    backgroundColor: vars.linkBox.hover.background.color,
  },
});
