import { TypeOfConst } from "@/framework";

export const ButtonAppearances = {
  Regular: "regular",
  None: "none",
} as const;

export type ButtonAppearance = TypeOfConst<typeof ButtonAppearances>;
