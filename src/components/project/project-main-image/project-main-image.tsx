import { ProjectMeta } from "@/framework/client";

import { Image } from "../../image";

import * as styles from "./project-main-image.css";

interface ProjectMainImageProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectMainImage(props: ProjectMainImageProps) {
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
