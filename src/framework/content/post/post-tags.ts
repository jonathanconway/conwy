import { TypeOfConst } from "@/framework/utils";

export const PostTags = {
  SoftwareDevelopment: "software-development",
  Design: "design",
  Life: "life",
  Learning: "learning",
} as const;

export type PostTag = TypeOfConst<typeof PostTags>;
