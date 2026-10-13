import React from "react";

import { TextType, TextTypes } from "./text-type";

interface TextTypeDetails {
  readonly element: React.HTMLElementType;
}

export const TEXT_TYPES_DETAILS: Record<TextType, TextTypeDetails> = {
  [TextTypes.Body]: { element: "div" },
  [TextTypes.CollapsibleTitle]: { element: "span" },
  [TextTypes.Heading1]: { element: "h1" },
  [TextTypes.Heading2]: { element: "h2" },
  [TextTypes.Heading3]: { element: "h3" },
  [TextTypes.Heading4]: { element: "h4" },
  [TextTypes.Heading5]: { element: "h5" },
  [TextTypes.Label]: { element: "label" },
  [TextTypes.ListItem]: { element: "li" },
  [TextTypes.ListItemSmall]: { element: "li" },
  [TextTypes.ListItemSubTitle]: { element: "p" },
  [TextTypes.Paragraph]: { element: "p" },
  [TextTypes.Preformatted]: { element: "pre" },
  [TextTypes.Small]: { element: "small" },
  [TextTypes.SubTitle]: { element: "p" },
  [TextTypes.Summary]: { element: "summary" },
  [TextTypes.Table]: { element: "table" },
};
