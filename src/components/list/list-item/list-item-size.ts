import { TypeOfConst } from "@/framework";

export const ListItemSizes = {
  Regular: "regular",
  Small: "small",
} as const;

export type ListItemSize = TypeOfConst<typeof ListItemSizes>;
