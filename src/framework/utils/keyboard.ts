import type { TypeOfConst } from "./typing";

export const KeyboardKeys = {
  Enter: "Enter",
  Escape: "Escape",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  Tab: "Tab",
} as const;

export type KeyboardKey = TypeOfConst<typeof KeyboardKeys>;
