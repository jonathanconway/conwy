import { TypeOfConst } from "@/framework";

export const LocalStorageKeys = {
  Theme: "conwy.theme",
  ArticleFilterTags: "conwy.articleFilterTags",
} as const;

export type LocalStorageKey = TypeOfConst<typeof LocalStorageKeys>;
