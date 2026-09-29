import { PostTag } from "@/framework";

export interface MicroGenParams {
  readonly content: string;
  readonly slug: string;

  readonly mainLink?: string;
  readonly socialLinkUrls: readonly string[];

  readonly tags: readonly PostTag[];
}
