import { DateString } from "../date";
import { MetaBase } from "../meta";
import { PostTag } from "../post";
import { SocialLink } from "../social-link";

export interface MicroMeta extends MetaBase {
  readonly createdDate: DateString;
  readonly updatedDate?: string;

  readonly mainLink?: string;

  readonly socialLinks: readonly SocialLink[];
  readonly tags: readonly PostTag[];

  readonly isPinned?: boolean;
}
