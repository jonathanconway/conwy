import { ReactNode } from "react";

import { PageLayout } from "../page-layout";

import * as styles from "./article-layout.css";

export interface ArticleLayoutProps {
  readonly main: ReactNode;
  readonly aside: ReactNode;
}

export function ArticleLayout({ main, aside }: ArticleLayoutProps) {
  return (
    <PageLayout
      selectedNavPath="/articles"
      main={
        <div className={styles.container}>
          <div className={styles.main}>{main}</div>

          <div className={styles.aside}>{aside}</div>
        </div>
      }
    />
  );
}
