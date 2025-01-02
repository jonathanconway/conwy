import pluralize from "pluralize";

import {
  ArticleMeta,
  ArticleMetaDiscussionLink,
  SocialLinkLabels,
} from "@/framework/client";

export function getArticleDiscussionLinksDetails(articleMeta: ArticleMeta) {
  if (!articleMeta.discussionLinks) {
    return null;
  }

  return articleMeta.discussionLinks.map(getArticleDiscussionLinkDetails);
}

export function getArticleDiscussionLinkDetails(
  discussionLink: ArticleMetaDiscussionLink,
) {
  const type = SocialLinkLabels[discussionLink.type];

  const commentCount = discussionLink.commentCount
    ? `${discussionLink.commentCount} ${pluralize("comment", discussionLink.commentCount)}`
    : "";

  const likeCount = discussionLink.likeCount
    ? `${discussionLink.likeCount} ${pluralize("like", discussionLink.likeCount)}`
    : "";

  const socialLink = {
    ...discussionLink,
    title: `Discussion on ${type}`,
  };

  return {
    socialLink,
    commentCount,
    likeCount,
  };
}
