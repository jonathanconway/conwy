import { TypeOfConst } from "@/framework/utils";

export const PostTags = {
  SoftwareDevelopment: "software-development",
  SoftwareEngineering: "software-engineering",
  Design: "design",
  Finance: "finance",
  Life: "life",
  Learning: "learning",
} as const;

export type PostTag = TypeOfConst<typeof PostTags>;

export const POST_TAG_TITLES: Record<PostTag, string> = {
  [PostTags.SoftwareDevelopment]: "Software development",
  [PostTags.SoftwareEngineering]: "Software engineering",
  [PostTags.Design]: "Design",
  [PostTags.Finance]: "Finance",
  [PostTags.Life]: "Life",
  [PostTags.Learning]: "Learning",
};
