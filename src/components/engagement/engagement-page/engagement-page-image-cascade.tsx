import { Engagement } from "@/framework";

import { ImageCascade } from "../../image-cascade";

export interface EngagementPageImageCascadeProps {
  readonly engagement: Engagement;
}

export function EngagementPageImageCascade(
  props: EngagementPageImageCascadeProps,
) {
  return <ImageCascade images={props.engagement.meta.images} />;
}
