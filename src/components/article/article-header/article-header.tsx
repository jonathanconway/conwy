import { Article as Article_ } from "@/framework/client";

import { info } from "../../../info";
import { Date } from "../../date";
import { Heading } from "../../heading";
import { Link } from "../../link";

import * as styles from "./article-header.styles";

export interface ArticleHeaderProps {
  readonly article: Article_;
}

export function ArticleHeader({
  article: {
    meta: { date, title, tags, slug },
  },
}: ArticleHeaderProps) {
  const historyUrl = `${info.repoUrl}/commits/main/src/content/articles/${slug}/content.mdx`;

  return (
    <div className={styles.container}>
      <Heading level={2}>{title}</Heading>

      <div className={styles.line1}>
        <span>{<Date>{date}</Date>}</span> •
        <Link href={historyUrl}>History</Link>
      </div>

      <p className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
}
