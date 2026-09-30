import { createPostMock } from "@/framework/client";

import { PostDiscussionLinkProps } from "./post-discussion-links";

export function createPostDiscussionLinkPropsMock(): PostDiscussionLinkProps {
  return { post: createPostMock() };
}
