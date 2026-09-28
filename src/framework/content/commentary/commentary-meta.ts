import { ContentLink } from "../content-link";
import { DateTimeString } from "../date-time";
import { PostTag } from "../post";
import { Slug } from "../slug";
import { SocialLink } from "../social-link";

export interface CommentaryMeta {
  readonly slug: Slug;
  readonly date: DateTimeString;

  readonly blurb: string;
  readonly shortBlurb?: string;

  readonly source: ContentLink;

  readonly socialLinks: readonly SocialLink[];
  readonly tags: readonly PostTag[];

  readonly commentCount?: number;
}
