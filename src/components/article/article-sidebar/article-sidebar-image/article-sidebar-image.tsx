import { ArticleMeta } from "@/framework/client";

import { Image } from "../../../image";

import * as styles from "./article-sidebar-image.css";

export interface ArticleSidebarImageProps {
  readonly meta: ArticleMeta;
}

export function ArticleSidebarImage({ meta }: ArticleSidebarImageProps) {
  if (!meta.mainImage) {
    return null;
  }

  return (
    <Image
      className={styles.image}
      image={meta.mainImage}
      alt="Article main image"
      priority
      unoptimized={true}
      width={100}
      height={65}
    />
  );
}
