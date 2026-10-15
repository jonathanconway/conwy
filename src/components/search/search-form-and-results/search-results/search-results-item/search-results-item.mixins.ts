import * as textSizeMixins from "../../../../text/text-size/text-size.mixins";

export const excerpt = {
  ...textSizeMixins.small,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
};

export const excerptImage = {
  display: "none",
};
