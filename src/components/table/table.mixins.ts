import * as boxMixins from "../box/box.mixins";
import { text } from "../styling";
import * as textMixins from "../text/text.mixins";

export const table = {
  marginTop: "1rem",
  // padding: "0.75rem",
  borderSpacing: 0,
  // todo: remove
  borderCollapse: "unset",
  ...text.size.sm,
  ...boxMixins.boxBorderStructural,
};

export const tableCell = {
  borderLeftStyle: "solid",
  borderLeftWidth: "1px",
  borderLeftColor: boxMixins.boxBorderStructural.borderColor,
  borderTopStyle: "solid",
  borderTopWidth: "1px",
  borderTopColor: boxMixins.boxBorderStructural.borderColor,
  padding: "0.25rem 0.5rem",
};

export const tableCellHeaderTop = {};

export const tableCellLeft = {
  borderRight: "none",
};

export const tableCellHeaderTopLeft = {
  borderTopLeftRadius: boxMixins.boxBorderStructural.borderRadius,
};

export const tableCellHeaderTopRight = {
  borderTopRightRadius: boxMixins.boxBorderStructural.borderRadius,
  borderRight: "none",
};

export const tableCellHeader = {
  ...tableCell,
  ...textMixins.label,
  borderTop: "none",
  borderBottom: "none",
  whiteSpace: "nowrap",
  fontSize: "0.6rem",
};

export const tableCellBody = {
  ...tableCell,
  fontSize: "0.875rem",
  borderBottom: "none",
};

export const tableCellBodyBottom = {
  borderBottom: "none",
};

export const tableCellBodyBottomLeft = {
  borderBottomLeftRadius: boxMixins.boxBorderStructural.borderRadius,
};

export const tableCellBodyBottomRight = {
  borderBottomRightRadius: boxMixins.boxBorderStructural.borderRadius,
  borderRight: "none",
};