import { TypeOfConst } from "@/framework/client";

export const LinkContentsTypes = {
  Text: "text",
  Image: "image",
} as const;

export type LinkContentsType = TypeOfConst<typeof LinkContentsTypes>;
