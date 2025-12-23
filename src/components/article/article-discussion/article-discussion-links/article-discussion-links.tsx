import { Article } from "@/framework/client";

import { SocialLinksListItem } from "../../../social-links";

import * as styles from "./article-discussion-links.css";
import { getArticleDiscussionLinksDetails } from "./article-discussion-links.utils";

export interface ArticleDiscussionLinkProps {
  readonly article: Article;
}

export function ArticleDiscussionLink(props: ArticleDiscussionLinkProps) {
  const discussionLinksDetails = getArticleDiscussionLinksDetails(
    props.article.meta,
  );

  if (!discussionLinksDetails?.length) {
    return null;
  }

  return (
    <div>
      {discussionLinksDetails.map(({ socialLink, commentCount, likeCount }) => (
        <div key={socialLink.url} className={styles.discussion}>
          <SocialLinksListItem socialLink={socialLink} />

          {commentCount && <span className={styles.count}>{commentCount}</span>}
          {likeCount && <span className={styles.count}>{likeCount}</span>}
        </div>
      ))}
    </div>
  );
}
