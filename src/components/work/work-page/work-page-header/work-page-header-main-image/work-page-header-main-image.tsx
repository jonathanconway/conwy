import { Work } from "@/framework";

import { Image } from "../../../../image";

import * as styles from "./work-page-header-main-image.css";

interface WorkPageHeaderMainImageProps {
  readonly work: Work;
}

export function WorkPageHeaderMainImage(props: WorkPageHeaderMainImageProps) {
  const { work } = props;
  const { meta } = work;

  if (!meta.mainImage) {
    return;
  }

  return (
    <Image
      className={styles.image}
      image={meta.mainImage}
      alt={`Work thumbnail image for ${meta.client}`}
      width={96}
      height={64}
    />
  );
}
