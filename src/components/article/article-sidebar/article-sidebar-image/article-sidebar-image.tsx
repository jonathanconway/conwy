import Image from "next/image";

import { ArticleMeta } from "@/framework/client";

import * as styles from "./article-sidebar-image.css";

export interface ArticleSidebarImageProps {
  readonly meta: ArticleMeta;
}

export function ArticleSidebarImage({ meta }: ArticleSidebarImageProps) {
  return (
    <Image
      className={styles.image}
      src={`/images/articles/${meta.slug}/${meta.mainImage ?? "main.jpg"}`}
      alt="Article main image"
      priority
      unoptimized={true}
      width={100}
      height={65}
    />
  );
}
