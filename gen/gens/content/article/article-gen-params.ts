import { PostTag } from "@/framework";

export interface ArticleGenParams {
  readonly title: string;
  readonly slug: string;

  readonly tags: readonly PostTag[];
}
