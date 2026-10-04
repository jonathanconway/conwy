import { PostTag } from "@/framework";

export interface MicroGenParams {
  readonly content: string;
  readonly shortBlurb?: string;
  readonly slug: string;

  readonly mainLink?: string;
  readonly socialLinkUrls: readonly string[];
  readonly discussionLinkUrls: readonly string[];

  readonly tags: readonly PostTag[];

  readonly isPinned: boolean;
}
