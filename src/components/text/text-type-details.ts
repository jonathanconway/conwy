import { TextTypes } from "./text-type";
import * as textStyles from "./text.css";

export const TEXT_TYPE_DETAILS = {
  [TextTypes.Body]: {
    element: "p",
    className: textStyles.body,
  },
  [TextTypes.Label]: {
    element: "label",
    className: textStyles.label,
  },
  [TextTypes.Paragraph]: {
    element: "p",
    className: textStyles.paragraph,
  },
  [TextTypes.Small]: {
    element: "small",
    className: textStyles.small,
  },
  // todo: rename to ListItemSubTitle?
  [TextTypes.SubTitle]: {
    element: "p",
    className: textStyles.subTitle,
  },
  [TextTypes.Summary]: {
    element: "p",
    className: textStyles.summary,
  },
} as const;
