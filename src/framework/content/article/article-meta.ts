import { DateString } from "../date";
import { Image } from "../image";
import { PostTag } from "../post";
import { PostMetaBase } from "../post/post-meta-base";
import { SocialLink } from "../social-link";

import { ArticleMetaExtensions } from "./article-meta-extensions";

export interface ArticleMeta extends PostMetaBase<ArticleMetaExtensions> {
  readonly title: string;
  readonly createdDate: DateString;
  readonly updatedDate?: string;

  readonly blurb: string;
  readonly shortBlurb?: string;

  readonly mainImage?: Image;
  readonly smallImage?: Image;

  readonly socialLinks: readonly SocialLink[];
  readonly tags: readonly PostTag[];

  readonly isPinned?: boolean;
}
