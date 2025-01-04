import { TextTypes } from "./text-type";

export const TEXT_TYPE_DETAILS = {
  [TextTypes.Body]: {
    element: "p",
    classNameKey: "body",
  },
  [TextTypes.Label]: {
    element: "label",
    classNameKey: "label",
  },
  [TextTypes.Paragraph]: {
    element: "p",
    classNameKey: "paragraph",
  },
  [TextTypes.Small]: {
    element: "small",
    classNameKey: "small",
  },
  // todo: rename to ListItemSubTitle?
  [TextTypes.SubTitle]: {
    element: "p",
    classNameKey: "subTitle",
  },
  [TextTypes.Summary]: {
    element: "p",
    classNameKey: "summary",
  },
} as const;
