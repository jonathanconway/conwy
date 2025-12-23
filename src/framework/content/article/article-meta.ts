import { Image } from "../image";
import { MetaBase } from "../meta";
import { PostTag } from "../post";
import { SocialLink } from "../social-link";

export interface ArticleMeta extends MetaBase {
  readonly type: "article";
  readonly title: string;
  readonly date: string;

  readonly blurb: string;
  readonly shortBlurb?: string;

  readonly mainImage?: Image;

  readonly discussionLinks: readonly ArticleMetaDiscussionLink[];
  readonly socialLinks: readonly SocialLink[];
  readonly tags: readonly PostTag[];

  readonly isPinned?: boolean;
}

export interface ArticleMetaDiscussionLink extends SocialLink {
  readonly commentCount?: number;
  readonly likeCount?: number;
}
