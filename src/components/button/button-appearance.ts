import { TypeOfConst } from "@/framework/client";

export const ButtonAppearances = {
  Regular: "regular",
  None: "none",
} as const;

export type ButtonAppearance = TypeOfConst<typeof ButtonAppearances>;
