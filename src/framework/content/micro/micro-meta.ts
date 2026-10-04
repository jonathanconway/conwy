import { DateString } from "../date";
import { PostTag } from "../post";
import { PostMetaBase } from "../post/post-meta-base";
import { SocialLink } from "../social-link";

export interface MicroMeta extends PostMetaBase {
  readonly createdDate: DateString;
  readonly updatedDate?: string;

  readonly mainLink?: string;

  readonly shortBlurb?: string;

  readonly socialLinks: readonly SocialLink[];
  readonly tags: readonly PostTag[];

  readonly isPinned?: boolean;
}
