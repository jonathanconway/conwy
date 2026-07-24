import { Article } from "@/framework/client";

import { Image } from "../../image";
import { Responsive } from "../../responsive";
import { Breakpoints } from "../../styling";

import * as styles from "./article-image.css";

export interface ArticleImageProps {
  readonly article: Article;
}

export function ArticleImage(props: ArticleImageProps) {
  const {
    article: { meta: articleMeta },
  } = props;

  if (!articleMeta.mainImage) {
    return null;
  }

  return (
    <Responsive maxWidth={Breakpoints.Medium}>
      <Image
        className={styles.image}
        image={articleMeta.mainImage}
        alt="Article main image"
        priority
        unoptimized={true}
      />
    </Responsive>
  );
}
