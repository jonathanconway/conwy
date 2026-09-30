import { Post } from "@/framework/client";

import { PostDiscussionInlineGisqus } from "./post-discussion-inline-gisqus";

export interface PostDiscussionInlineProps {
  readonly post: Post;
}

export function PostDiscussionInline(props: PostDiscussionInlineProps) {
  return <PostDiscussionInlineGisqus />;
}
