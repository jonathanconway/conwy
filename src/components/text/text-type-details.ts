import React from "react";

import { TextType, TextTypes } from "./text-type";

interface TextTypeDetails {
  readonly element: React.HTMLElementType;
}

export const TEXT_TYPES_DETAILS: Record<TextType, TextTypeDetails> = {
  [TextTypes.Anchor]: { element: "a" },
  [TextTypes.Body]: { element: "div" },
  [TextTypes.CollapsibleTitle]: { element: "span" },
  [TextTypes.Figure]: { element: "figure" },
  [TextTypes.Heading1]: { element: "h1" },
  [TextTypes.Heading2]: { element: "h2" },
  [TextTypes.Heading3]: { element: "h3" },
  [TextTypes.Heading4]: { element: "h4" },
  [TextTypes.Heading5]: { element: "h5" },
  [TextTypes.HorizontalRule]: { element: "hr" },
  [TextTypes.Image]: { element: "img" },
  [TextTypes.Label]: { element: "label" },
  [TextTypes.ListItem]: { element: "li" },
  [TextTypes.OrderedList]: { element: "ol" },
  [TextTypes.Paragraph]: { element: "p" },
  [TextTypes.PostDate]: { element: "time" },
  [TextTypes.Preformatted]: { element: "pre" },
  [TextTypes.Small]: { element: "small" },
  // todo: rename to ListItemSubTitle?
  [TextTypes.SubTitle]: { element: "p" },
  [TextTypes.Summary]: { element: "summary" },
  [TextTypes.Table]: { element: "table" },
  [TextTypes.UnorderedList]: { element: "ul" },
};
