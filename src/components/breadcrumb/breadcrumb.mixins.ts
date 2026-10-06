import { text } from "../styling";

export const container = {
  display: "flex",
  alignItems: "center",
  ...text.size.sm,
};

export const titleSegment = {
  overflow: "hidden",
  flex: 1,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};
