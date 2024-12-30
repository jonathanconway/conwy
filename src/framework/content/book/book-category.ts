import { TypeOfConst } from "@/framework/utils";

export const BookCategories = {
  Business: "business",
  Culture: "culture",
  Design: "design",
  Economics: "economics",
  Finance: "finance",
  Geopolitics: "geopolitics",
  History: "history",
  Politics: "politics",
  Psychology: "psychology",
  Science: "science",
  SelfHelp: "self-help",
  SoftwareDevelopment: "software-development",
  Spirituality: "spirituality",
} as const;

export type BookCategory = TypeOfConst<typeof BookCategories>;
