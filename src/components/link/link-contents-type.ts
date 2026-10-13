import { TypeOfConst } from "@/framework";

export const LinkContentsTypes = {
  Text: "text",
  Image: "image",
} as const;

export type LinkContentsType = TypeOfConst<typeof LinkContentsTypes>;
