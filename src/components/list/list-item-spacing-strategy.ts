import { TypeOfConst } from "@/framework";

export const ListItemSpacingStrategies = {
  IncludeExceptFirstChild: "include-except-first-child",
  Include: "include",
  Exclude: "exclude",
} as const;

export type ListItemSpacingStrategy = TypeOfConst<
  typeof ListItemSpacingStrategies
>;
