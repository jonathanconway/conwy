import { Article as Article_ } from "@/framework/client";

import { Fragment } from "../../fragments";

import * as styles from "./article-body.css";

export interface ArticleBodyProps {
  readonly article: Article_;
}

export function ArticleBody({
  article: { content: Content },
}: ArticleBodyProps) {
  return (
    <div className={styles.container}>
      <Fragment>
        <Content />
      </Fragment>
    </div>
  );
}
