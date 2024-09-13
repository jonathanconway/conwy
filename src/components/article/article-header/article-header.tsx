import { Article as Article_ } from "@/framework/client";

import { Date } from "../../date";
import { Heading } from "../../heading";

import * as styles from "./article-header.styles";

export interface ArticleHeaderProps {
  readonly article: Article_;
}

export function ArticleHeader({
  article: {
    meta: { date, title, tags },
  },
}: ArticleHeaderProps) {
  return (
    <div className={styles.container()}>
      <Heading level={2}>{title}</Heading>

      <p className={styles.date()}>{<Date>{date}</Date>}</p>

      <p className={styles.tags()}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag()}>
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
}
