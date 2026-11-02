import { CONTENT_TYPE_LABELS, Engagement } from "@/framework";

import { Image } from "../../../../image";

import * as styles from "./engagement-page-header-main-image.css";

interface EngagementPageHeaderMainImageProps {
  readonly engagement: Engagement;
}

export function EngagementPageHeaderMainImage(
  props: EngagementPageHeaderMainImageProps,
) {
  const { engagement } = props;
  const { meta } = engagement;

  if (!meta.mainImage) {
    return;
  }

  return (
    <Image
      className={styles.image}
      image={meta.mainImage}
      alt={`${CONTENT_TYPE_LABELS[engagement.type]} thumbnail image for ${meta.title}`}
      width={96}
      height={64}
    />
  );
}
