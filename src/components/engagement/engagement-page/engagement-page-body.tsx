import { Engagement } from "@/framework";

import { MdxContainer } from "../../mdx";

interface EngagementPageBodyProps {
  readonly engagement: Engagement;
}

export function EngagementPageBody(props: EngagementPageBodyProps) {
  return <MdxContainer>{props.engagement.content}</MdxContainer>;
}
