import { TypeOfConst } from "@/framework/client";

export const TextTypes = {
  Body: "body",
  CollapsibleTitle: "collapsibleTitle",
  Heading1: "heading1",
  Heading2: "heading2",
  Heading3: "heading3",
  Heading4: "heading4",
  Heading5: "heading5",
  Label: "label",
  ListItem: "listItem",
  ListItemSmall: "listItemSmall",
  ListItemSubTitle: "listItemSubTitle",
  Paragraph: "paragraph",
  Preformatted: "pre",
  Small: "small",
  SubTitle: "subTitle",
  Summary: "summary",
  Table: "table",
} as const;

export type TextType = TypeOfConst<typeof TextTypes>;
