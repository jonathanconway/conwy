import { createPostMock } from "@/framework";

import { PostDiscussionLinkProps } from "./post-discussion-links";

export function createPostDiscussionLinkPropsMock(): PostDiscussionLinkProps {
  return { post: createPostMock() };
}
