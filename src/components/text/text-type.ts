import { TypeOfConst } from "@/framework/client";

export const TextTypes = {
  Body: "body",
  Label: "label",
  Paragraph: "paragraph",
  Small: "small",
  SubTitle: "sub-title",
  Summary: "summary",
} as const;

export type TextType = TypeOfConst<typeof TextTypes>;
