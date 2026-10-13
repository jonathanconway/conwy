import { Post } from "@/framework";

import { PostDiscussionInlineGisqus } from "./post-discussion-inline-gisqus";

export interface PostDiscussionInlineProps {
  readonly post: Post;
}

export function PostDiscussionInline(props: PostDiscussionInlineProps) {
  return <PostDiscussionInlineGisqus />;
}
