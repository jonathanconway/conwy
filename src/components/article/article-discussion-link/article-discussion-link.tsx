import pluralize from "pluralize";

import { SocialLinksListItem } from "@/components/social-links";
import { Article, SocialLinkLabels } from "@/framework";

import * as styles from "./article-discussion-link.styles";
import { getArticleDiscussionLinkDetails } from "./article-discussion-link.utils";

interface ArticleDiscussionLinkProps {
  readonly article: Article;
}

export function ArticleDiscussionLink(props: ArticleDiscussionLinkProps) {
  const discussionLinkedDetails = getArticleDiscussionLinkDetails(
    props.article.meta,
  );

  if (!discussionLinkedDetails) {
    return null;
  }

  const { socialLink, commentCount } = discussionLinkedDetails;

  return (
    <div className={styles.container}>
      <SocialLinksListItem socialLink={socialLink} />

      <span className={styles.count}>{commentCount}</span>
    </div>
  );
}
