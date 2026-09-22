import { PostTag } from "@/framework";

export interface ArticleGenParams {
  readonly title: string;
  readonly category: PostTag;
  readonly slug: string;
}
