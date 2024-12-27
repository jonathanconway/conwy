import { TypeOfConst } from "@/framework";

export const TextTypes = {
  Regular: "regular",
  Summary: "summary",
} as const;

export type TextType = TypeOfConst<typeof TextTypes>;
