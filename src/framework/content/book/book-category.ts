import { TypeOfConst } from "@/framework/client";

export const BookCategories = {
  Business: "business",
  Culture: "culture",
  Design: "design",
  Diet: "diet",
  Economics: "economics",
  Finance: "finance",
  Geopolitics: "geopolitics",
  Health: "health",
  History: "history",
  Music: "music",
  Philosophy: "philosophy",
  Politics: "politics",
  Psychology: "psychology",
  Science: "science",
  SelfHelp: "self-help",
  SoftwareDevelopment: "software-development",
  Spirituality: "spirituality",
  Writing: "writing",
} as const;

export type BookCategory = TypeOfConst<typeof BookCategories>;
