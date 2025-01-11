import { WorkMeta } from "@/framework/client";

import { Image } from "../../image";

import * as styles from "./work-main-image.css";

interface WorkMainImageProps {
  readonly workMeta: WorkMeta;
}

export function WorkMainImage(props: WorkMainImageProps) {
  if (!props.workMeta.mainImage) {
    return;
  }

  return (
    <Image
      className={styles.image}
      image={props.workMeta.mainImage}
      alt={`Work thumbnail image for ${props.workMeta.client}`}
      width={96}
      height={64}
    />
  );
}
