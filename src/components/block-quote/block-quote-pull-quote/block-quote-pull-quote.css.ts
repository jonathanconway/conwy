import { globalStyle, style } from "@vanilla-extract/css";

import * as pullQuoteMixins from "./block-quote-pull-quote.mixins";

export const pullQuote = style(pullQuoteMixins.pullQuote);

globalStyle(`${pullQuote} p:first-child`, {
  marginTop: 0,
});
