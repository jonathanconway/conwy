import { TextType, TextTypes } from "./text-type";
import { textStyles } from "./text.css";

export const TEXT_TYPE_DETAILS: Record<
  TextType,
  {
    readonly element: string;
    readonly className: string;
  }
> = {
  [TextTypes.Regular]: {
    element: "span",
    className: textStyles.body,
  },
  [TextTypes.Summary]: {
    element: "p",
    className: textStyles.summary,
  },
};
