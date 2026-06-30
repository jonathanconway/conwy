import { TypeOfConst } from "@/framework/client";

export const CheckboxBaseColors = {
  Yellow: "yellow",
  Purple: "purple",
} as const;

export type CheckboxBaseColor = TypeOfConst<typeof CheckboxBaseColors>;
