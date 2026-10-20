import { CSSProperties } from "@vanilla-extract/css";

import * as boxMixins from "../box/box.mixins";
import * as textMixins from "../text/text.mixins";

export const table: CSSProperties = {
  marginTop: "1rem",
  borderSpacing: 0,
  borderCollapse: "unset",
  ...textMixins.small,
  ...boxMixins.boxBorderStructural,
};

export const tableCell: CSSProperties = {
  borderLeftStyle: "solid",
  borderLeftWidth: "1px",
  borderLeftColor: boxMixins.boxBorderStructural.borderColor,
  borderTopStyle: "solid",
  borderTopWidth: "1px",
  borderTopColor: boxMixins.boxBorderStructural.borderColor,
  padding: "0.25rem 0.5rem",
};
