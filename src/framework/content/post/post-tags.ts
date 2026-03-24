import { TypeOfConst } from "@/framework/utils";

export const PostTags = {
  SoftwareDevelopment: "software-development",
  Design: "design",
  Life: "life",
  Learning: "learning",
} as const;

export type PostTag = TypeOfConst<typeof PostTags>;

export const POST_TAG_TITLES: Record<PostTag, string> = {
  [PostTags.SoftwareDevelopment]: "Software development",
  [PostTags.Design]: "Design",
  [PostTags.Life]: "Life",
  [PostTags.Learning]: "Learning",
};
