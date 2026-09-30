import pluralize from "pluralize";

import {
  PostDiscussionLink,
  PostMeta,
  SocialLinkLabels,
} from "@/framework/client";

export function getPostDiscussionLinksDetails(postMeta: PostMeta) {
  if (!postMeta.discussionLinks) {
    return null;
  }

  return postMeta.discussionLinks.map(getPostDiscussionLinkDetails);
}

export function getPostDiscussionLinkDetails(
  discussionLink: PostDiscussionLink,
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
