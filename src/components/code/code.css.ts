import { globalStyle, style } from "@vanilla-extract/css";

import * as boxMixins from "../box/box.mixins";
import { media, rounded, text } from "../styling";

// todo: because of prismjs; find a way to remove the !important 's

export const code = style({
  display: "inline",
  paddingLeft: "0.25rem !important",
  paddingRight: "0.25rem !important",
  wordWrap: "break-word !important",
  ...rounded.md,
  ...boxMixins.boxBorderDecorative,
  ...text.size.sm,
} as any);

globalStyle(`pre code`, {
  whiteSpace: "pre-wrap !important",
});

globalStyle(`p code, li code`, {
  "@media": {
    [media.lessThanLg]: {
      display: "inline-block",
      width: "100%",
      whiteSpace: "break-word !important",
    },
    [media.lgAndUp]: {
      // Only on larger screens; otherwise, a wide link might blow out the page width.
      whiteSpace: "nowrap !important",
    },
  },
});
