import { Post } from "@/framework/client";

import { SocialLinksListItem } from "../../../social-links";

import * as styles from "./post-discussion-links.css";
import { getPostDiscussionLinksDetails } from "./post-discussion-links.utils";

export interface PostDiscussionLinkProps {
  readonly post: Post;
}

export function PostDiscussionLink(props: PostDiscussionLinkProps) {
  const discussionLinksDetails = getPostDiscussionLinksDetails(props.post.meta);

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
