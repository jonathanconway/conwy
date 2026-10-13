import { TypeOfConst } from "@/framework";

export const DateFormats = {
  Full: "full",
  Short: "short",
} as const;

export type DateFormat = TypeOfConst<typeof DateFormats>;
