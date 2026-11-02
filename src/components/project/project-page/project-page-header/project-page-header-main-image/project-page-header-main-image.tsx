import { ProjectMeta } from "@/framework";

import { Image } from "../../../../image";

import * as styles from "./project-page-header-main-image.css";

interface ProjectPageHeaderMainImageProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectPageHeaderMainImage(
  props: ProjectPageHeaderMainImageProps,
) {
  if (!props.projectMeta.mainImage) {
    return null;
  }

  return (
    <Image
      className={styles.image}
      image={props.projectMeta.mainImage}
      alt={`Project thumbnail image for ${props.projectMeta.title}`}
      width={96}
      height={64}
    />
  );
}
