import { TypeOfConst } from "@/framework/client";

export const Themes = {
  Dark: "dark",
  Light: "light",
} as const;

export type Theme = TypeOfConst<typeof Themes>;
