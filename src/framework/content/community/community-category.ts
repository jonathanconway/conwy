import { TypeOfConst } from "../../utils";

export const CommunityCategories = {
  SoftwareDevelopment: "software-development",
  Investing: "investing",
} as const;

export type CommunityCategory = TypeOfConst<typeof CommunityCategories>;
