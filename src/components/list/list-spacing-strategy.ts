import { TypeOfConst } from "@/framework";

export const ListSpacingStrategies = {
  IncludeExceptFirstChild: "include-except-first-child",
  Include: "include",
  Exclude: "exclude",
} as const;

export type ListSpacingStrategy = TypeOfConst<typeof ListSpacingStrategies>;
