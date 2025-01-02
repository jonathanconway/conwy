import { ProjectMeta } from "@/framework/client";

import { Image } from "../../image";

import * as styles from "./project-main-image.css";

interface ProjectMainImageProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectMainImage(props: ProjectMainImageProps) {
  return (
    <Image
      className={styles.image}
      image={{
        src: `/images/projects/${props.projectMeta.slug}/${props.projectMeta.mainImage ?? "main.svg"}`,
        alt: `Project thumbnail image for ${props.projectMeta.title}`,
        notes: [],
      }}
      width={96}
      height={64}
    />
  );
}
