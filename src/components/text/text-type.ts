import { TypeOfConst } from "@/framework/client";

export const TextTypes = {
  Anchor: "a",
  Body: "body",
  CollapsibleTitle: "collapsibleTitle",
  Figure: "figure",
  Heading1: "h1",
  Heading2: "h2",
  Heading3: "h3",
  Heading4: "h4",
  Heading5: "h5",
  HorizontalRule: "hr",
  Image: "image",
  Label: "label",
  ListItem: "li",
  OrderedList: "ol",
  Paragraph: "paragraph",
  PostDate: "postDate",
  Preformatted: "pre",
  Small: "small",
  SubTitle: "subtitle",
  Summary: "summary",
  Table: "table",
  UnorderedList: "ul",
} as const;

export type TextType = TypeOfConst<typeof TextTypes>;
