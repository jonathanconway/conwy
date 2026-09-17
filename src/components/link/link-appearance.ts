import { TypeOfConst } from "@/framework";

export const LinkAppearances = {
  Text: "text",
  Button: "button",
} as const;

export type LinkAppearance = TypeOfConst<typeof LinkAppearances>;
