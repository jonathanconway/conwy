import { MetaBase } from "../meta-base";
import { SocialLink } from "../social-link";

export interface PostMetaBase extends MetaBase {
  readonly title?: string;
  readonly date: string;
  readonly tags: readonly string[];
  readonly socialLinks: readonly SocialLink[];
  readonly blurb: string;
  readonly shortBlurb?: string;
  readonly mainLink?: string;
}
