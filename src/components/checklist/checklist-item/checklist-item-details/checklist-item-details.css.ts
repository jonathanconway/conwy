import { globalStyle, style } from "@vanilla-extract/css";

import * as textSizeMixins from "../../../text/text-size/text-size.mixins";

export const checklistDetails = style(textSizeMixins.xs);

globalStyle(
  [
    `${checklistDetails} code[class*=language-]`,
    `${checklistDetails} pre[class*=language-]`,
  ].join(","),
  textSizeMixins.xs,
);
