import { PostMetaBase } from "../post/post-meta-base";
import { SocialLink } from "../social-link";

export interface ArticleMeta extends PostMetaBase {
  readonly title: string;
  readonly type: "article";
  readonly discussionLink?: ArticleMetaDiscussionLink;
}

export interface ArticleMetaDiscussionLink extends SocialLink {
  readonly commentCount?: number;
  readonly likeCount?: number;
}
