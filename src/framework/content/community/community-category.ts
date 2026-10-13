import { TypeOfConst } from "../../utils/typing";

export const CommunityCategories = {
  SoftwareDevelopment: "software-development",
  Investing: "investing",
} as const;

export type CommunityCategory = TypeOfConst<typeof CommunityCategories>;
