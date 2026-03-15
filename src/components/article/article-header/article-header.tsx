import { TextSizes } from "@/components/text";
import { Article as Article_ } from "@/framework/client";

import { info } from "../../../info";
import { DateView } from "../../date";
import { Heading } from "../../heading";
import { Link } from "../../link";

import { ArticleHeaderTags } from "./article-header-tags";
import * as styles from "./article-header.css";

export interface ArticleHeaderProps {
  readonly article: Article_;
}

export function ArticleHeader(props: ArticleHeaderProps) {
  const {
    article: {
      meta: { createdDate, updatedDate, title, tags, slug },
    },
  } = props;
  const historyUrl = `${info.repoUrl}/commits/main/src/content/articles/${slug}/content.mdx`;

  return (
    <div className={styles.container}>
      <Heading id="top" level={2}>
        {title}
      </Heading>

      <div className={styles.line1}>
        <span>
          <label htmlFor="article-created-date">Created: </label>
          <span id="article-created-date">
            <DateView>{createdDate}</DateView>
          </span>
        </span>
        {updatedDate && (
          <>
            •
            <span>
              <label htmlFor="article-updated-date">Updated: </label>
              <span id="article-updated-date">
                <DateView>{updatedDate}</DateView>
              </span>
            </span>
          </>
        )}
        •
        <Link href={historyUrl} size={TextSizes.xs}>
          History
        </Link>
      </div>

      <ArticleHeaderTags tags={tags} />
    </div>
  );
}
