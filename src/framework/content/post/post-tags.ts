import { TypeOfConst } from "@/framework/utils";

export const PostTags = {
  Career: "career",
  Design: "design",
  Finance: "finance",
  Learning: "learning",
  Life: "life",
  SoftwareDevelopment: "software-development",
  SoftwareEngineering: "software-engineering",
} as const;

export type PostTag = TypeOfConst<typeof PostTags>;

export const POST_TAG_TITLES: Record<PostTag, string> = {
  [PostTags.Career]: "Career",
  [PostTags.Design]: "Design",
  [PostTags.Finance]: "Finance",
  [PostTags.Learning]: "Learning",
  [PostTags.Life]: "Life",
  [PostTags.SoftwareDevelopment]: "Software development",
  [PostTags.SoftwareEngineering]: "Software engineering",
};
