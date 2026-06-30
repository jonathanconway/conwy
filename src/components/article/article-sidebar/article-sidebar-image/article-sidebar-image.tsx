import { ArticleMeta } from "@/framework/client";

import { Image } from "../../../image";

import * as styles from "./article-sidebar-image.css";

export interface ArticleSidebarImageProps {
  readonly articleMeta: ArticleMeta;
}

export function ArticleSidebarImage(props: ArticleSidebarImageProps) {
  const { articleMeta } = props;

  if (!articleMeta.mainImage) {
    return null;
  }

  return (
    <Image
      className={styles.image}
      image={articleMeta.mainImage}
      alt="Article main image"
      priority
      unoptimized={true}
      width={100}
      height={65}
    />
  );
}
