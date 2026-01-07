import { TypeOfConst } from "@/framework/client";

export const TextTypes = {
  Heading1: "h1",
  Heading2: "h2",
  Heading3: "h3",
  Heading4: "h4",
  Heading5: "h5",
  HorizontalRule: "hr",
  OrderedList: "ol",
  UnorderedList: "ul",
  ListItem: "li",
  Preformatted: "pre",
  Figure: "figure",
  Image: "image",
  Table: "table",
  Anchor: "a",
  Body: "body",
  Label: "label",
  Paragraph: "paragraph",
  Small: "small",
  SubTitle: "subtitle",
  Summary: "summary",
} as const;

export type TextType = TypeOfConst<typeof TextTypes>;
