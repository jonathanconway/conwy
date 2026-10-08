import * as textMixins from "../text/text.mixins";

export const container = {
  display: "flex",
  alignItems: "center",
};

export const titleSegment = {
  ...textMixins.small,
  overflow: "hidden",
  flex: 1,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const chevronSegment = {
  ...textMixins.small,
};
