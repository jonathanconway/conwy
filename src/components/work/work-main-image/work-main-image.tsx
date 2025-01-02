import { WorkMeta } from "@/framework/client";

import { Image } from "../../image";

import * as styles from "./work-main-image.css";

interface WorkMainImageProps {
  readonly workMeta: WorkMeta;
}

export function WorkMainImage(props: WorkMainImageProps) {
  return (
    <Image
      className={styles.image}
      image={{
        src: `/images/works/${props.workMeta.slug}/${props.workMeta.mainImage ?? "thumbnail.png"}`,
        alt: `Work thumbnail image for ${props.workMeta.client}`,
        notes: [],
      }}
      width={96}
      height={64}
    />
  );
}
