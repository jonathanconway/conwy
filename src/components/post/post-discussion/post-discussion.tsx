import { Post } from "@/framework/client";

import { PostDiscussionInline } from "./post-discussion-inline";
import { PostDiscussionLink } from "./post-discussion-links";
import { POST_DISCUSSION_ANCHOR_ID } from "./post-discussion.const";

export interface PostDiscussionProps {
  readonly post: Post;
}

export function PostDiscussion(props: PostDiscussionProps) {
  return (
    <>
      <a id={POST_DISCUSSION_ANCHOR_ID} />

      <PostDiscussionLink post={props.post} />
      <PostDiscussionInline post={props.post} />
    </>
  );
}
