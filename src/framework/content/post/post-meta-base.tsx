import { MetaBase } from "../meta";
import { SocialLink } from "../social-link";

import { PostTag } from "./post-tags";

export interface PostMetaBase extends MetaBase {
  readonly title?: string;
  readonly date: string;
  readonly tags: readonly PostTag[];
  readonly socialLinks: readonly SocialLink[];
  readonly blurb: string;
  readonly shortBlurb?: string;
  readonly mainLink?: string;
  readonly isPinned?: boolean;
}
