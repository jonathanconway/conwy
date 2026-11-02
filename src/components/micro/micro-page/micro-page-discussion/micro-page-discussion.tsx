import { Micro } from "@/framework";

import { PostDiscussion } from "../../../post";

interface MicroPageDiscussionProps {
  readonly micro: Micro;
}

export function MicroPageDiscussion(props: MicroPageDiscussionProps) {
  return <PostDiscussion post={props.micro} />;
}
