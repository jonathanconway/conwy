import React from "react";

import { TextType, TextTypes } from "./text-type";

interface TextTypeDetails {
  readonly element: React.HTMLElementType;
}

export const TEXT_TYPES_DETAILS: Record<TextType, TextTypeDetails> = {
  [TextTypes.Heading1]: {
    element: "h1",
  },
  [TextTypes.Heading2]: {
    element: "h2",
  },
  [TextTypes.Heading3]: {
    element: "h3",
  },
  [TextTypes.Heading4]: {
    element: "h4",
  },
  [TextTypes.Heading5]: {
    element: "h5",
  },
  [TextTypes.HorizontalRule]: {
    element: "hr",
  },
  [TextTypes.Paragraph]: {
    element: "p",
  },
  [TextTypes.OrderedList]: {
    element: "ol",
  },
  [TextTypes.UnorderedList]: {
    element: "ul",
  },
  [TextTypes.ListItem]: {
    element: "li",
  },
  [TextTypes.Anchor]: {
    element: "a",
  },
  [TextTypes.Figure]: {
    element: "figure",
  },
  [TextTypes.Preformatted]: {
    element: "pre",
  },
  [TextTypes.Label]: {
    element: "label",
  },
  [TextTypes.Small]: {
    element: "small",
  },
  // todo: rename to ListItemSubTitle?
  [TextTypes.SubTitle]: {
    element: "p",
  },
  [TextTypes.Summary]: {
    element: "summary",
  },
  [TextTypes.Body]: {
    element: "div",
  },
  [TextTypes.Table]: {
    element: "table",
  },
  [TextTypes.Image]: {
    element: "img",
  },
};
