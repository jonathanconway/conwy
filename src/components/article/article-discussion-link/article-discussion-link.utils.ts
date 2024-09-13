import pluralize from "pluralize";

import { ArticleMeta, SocialLinkLabels } from "@/framework";

export function getArticleDiscussionLinkDetails(articleMeta: ArticleMeta) {
  if (!articleMeta.discussionLink) {
    return null;
  }

  const discussionLink = articleMeta.discussionLink;

  const type = SocialLinkLabels[discussionLink.type];

  const commentCount = discussionLink.commentCount
    ? `(${discussionLink.commentCount} ${pluralize("comment", discussionLink.commentCount)})`
    : "";

  const socialLink = {
    ...articleMeta.discussionLink,
    title: `Discussion on ${type}`,
  };

  return {
    socialLink,
    commentCount,
  };
}
