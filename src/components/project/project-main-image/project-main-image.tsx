import Image from "next/image";

import { ProjectMeta } from "@/framework/client";

import * as styles from "./project-main-image.styles";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface ProjectMainImageProps extends ImageProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectMainImage(props: ProjectMainImageProps) {
  return (
    <Image
      className={styles.image}
      priority
      unoptimized={true}
      width={96}
      height={64}
      {...props}
      src={`/images/projects/${props.projectMeta.slug}/main.svg`}
      alt={`Project thumbnail image for ${props.projectMeta.title}`}
    />
  );
}
