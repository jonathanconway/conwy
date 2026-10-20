import { TypeOfConst } from "@/framework";

export const TextSpacingStrategies = {
  IncludeExceptFirstChild: "include-except-first-child",
  Include: "include",
  Exclude: "exclude",
} as const;

export type TextSpacingStrategy = TypeOfConst<typeof TextSpacingStrategies>;
